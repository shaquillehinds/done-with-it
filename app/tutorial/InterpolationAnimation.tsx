import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";

const InterpolationAnimation = () => {
  const animation = useState(new Animated.Value(0))[0];

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"],
  });
  const colorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(99,71,255)", "rgb(255,99,71)"],
  });
  const startAnimation = (): void => {
    Animated.timing(animation, {
      useNativeDriver: false,
      duration: 1500,
      toValue: 1,
    }).start();
  };
  const animatedStyles = {
    backgroundColor: boxInterpolation,
  };
  const textAnimatedStyles = {
    color: colorInterpolation,
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Animated.Text style={[textAnimatedStyles]}>Hello World</Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
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
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

export default InterpolationAnimation;
