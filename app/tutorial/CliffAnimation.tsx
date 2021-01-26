import React, { useState, useEffect, useRef } from "react";
import { View, Animated, StyleSheet, PanResponder, Dimensions, Text, PanResponderInstance } from "react-native";
import colors from "../config/colors";

const DecayAnimation = () => {
  const [animation, setAnimation] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const setPanResponser = (): PanResponderInstance =>
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: animation.x, dy: animation.y }], { useNativeDriver: false }),
      onPanResponderGrant: () => {
        animation.extractOffset();
      },
    });
  const panResponder = useRef(setPanResponser()).current;

  const { height } = Dimensions.get("window");
  //Cliffing is the act of switching values with no animation in between
  //for values that are interpolated there is no setValue
  //so we manually cliff the animation by setting the
  //interpolation input range to switch the output abruptly
  const inputRange = [0, height / 2 - 40, height / 2 - 39.99, height];

  const backgroundColorInterpolate = animation.y.interpolate({
    inputRange,
    outputRange: ["rgb(99,71,255)", "rgb(99,71,255)", "rgb(255,0,0)", "rgb(255,0,0)"],
  });
  const flipInterpolate = animation.y.interpolate({
    inputRange,
    outputRange: [1, 1, -1, -1],
  });

  const animatedStyles: any = {
    backgroundColor: backgroundColorInterpolate,
    transform: [...animation.getTranslateTransform(), { scale: flipInterpolate }],
  };
  return (
    <View style={styles.container}>
      <View style={[styles.top, styles.center, styles.container]}>
        <Text>Good</Text>
      </View>
      <View style={[styles.center, styles.container]}>
        <Text>Bad</Text>
      </View>
      <Animated.View {...panResponder.panHandlers} style={[styles.box, styles.center, animatedStyles]}>
        <Text>Box</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    position: "absolute",
    width: 50,
    height: 50,
    top: 0,
    color: "black",
    left: 10,
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: "#AAA",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DecayAnimation;
