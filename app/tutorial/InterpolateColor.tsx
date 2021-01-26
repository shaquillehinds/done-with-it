import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import colors from "../config/colors";

const InterpolateColor = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const startAnimation = (): void => {
    Animated.timing(animation, {
      useNativeDriver: false,
      toValue: 2,
      duration: 1500,
    }).start((): void => {
      animation.setValue(0);
    });
  };
  const colorInterpolate = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ["rgb(71,255,99)", "rgb(255,99,71)", "rgb(99,71,255)"],
  });

  const bgStyle = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 2],
      outputRange: ["rgba(255,99,71,1)", "rgba(255,99,71,0)"],
    }),
  };

  const animatedStyles = {
    backgroundColor: colorInterpolate,
  };
  return (
    <Animated.View style={[styles.container, bgStyle]}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}></Animated.View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    borderRadius: 10,
    elevation: 10,
    width: 150,
    height: 150,
  },
});

export default InterpolateColor;
