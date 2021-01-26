import React, { useState, useEffect, useRef } from "react";
import { View, Animated, StyleSheet, PanResponder, PanResponderInstance } from "react-native";
import colors from "../config/colors";

const DecayAnimation = () => {
  const [animation, setAnimation] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const setPanResponser = (): PanResponderInstance =>
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: animation.x, dy: animation.y }], { useNativeDriver: false }),
      onPanResponderGrant: (): void => {
        animation.extractOffset();
      },
      onPanResponderRelease: (e, { vx, vy }) => {
        Animated.decay(animation, {
          useNativeDriver: true,
          velocity: { x: vx, y: vy },
          deceleration: 0.997,
        }).start();
      },
    });
  const panResponder = useRef(setPanResponser()).current;

  const animatedStyles: any = { transform: animation.getTranslateTransform() };
  return (
    <View style={styles.container}>
      <Animated.View {...panResponder?.panHandlers} style={[styles.box, animatedStyles]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    elevation: 10,
    borderRadius: 25,
    height: 50,
    width: 50,
    backgroundColor: colors.danger,
  },
});

export default DecayAnimation;
