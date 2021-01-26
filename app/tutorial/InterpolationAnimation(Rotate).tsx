import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";

const InterpolationAnimation = () => {
  const animation = useState(new Animated.Value(0))[0];

  const rotateInterpolate = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  const startAnimation = (): void => {
    Animated.timing(animation, {
      useNativeDriver: true,
      duration: 1500,
      toValue: 360,
    }).start();
  };

  const animationStyles = {
    transform: [
      {
        rotate: rotateInterpolate,
      },
    ],
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animationStyles]}>
          <Animated.Text style={{ color: "black" }}>Hello World</Animated.Text>
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
    backgroundColor: "tomato",
  },
});

export default InterpolationAnimation;
