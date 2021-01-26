import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import colors from "../config/colors";

const InterpolateRotate = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const startAnimation = (): void => {
    Animated.timing(animation, {
      useNativeDriver: true,
      toValue: 1,
      duration: 1500,
    }).start((): void => {
      animation.setValue(0);
    });
  };
  const xInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const yInterpolate = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "0deg", "180deg"],
  });
  const animatedStyles = {
    transform: [{ rotateX: xInterpolate }, { rotateY: yInterpolate }],
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}></Animated.View>
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
    borderRadius: 10,
    elevation: 10,
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  },
});

export default InterpolateRotate;
