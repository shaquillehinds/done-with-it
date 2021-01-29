import React, { useState } from "react";
import { View, StyleSheet, Animated, TouchableWithoutFeedback } from "react-native";

const UnMountingAnimations = () => {
  const [state, setState] = useState({ animation: new Animated.Value(1), visible: true });
  const startAnimation = (): void => {
    Animated.timing(state.animation, {
      duration: 1500,
      useNativeDriver: true,
      toValue: 0,
    }).start(({ finished }): void => {
      setTimeout(() => {
        if (finished) setState((prev) => ({ ...prev, visible: false }));
        else Animated.spring(state.animation, { friction: 5, useNativeDriver: true, toValue: 1 }).start();
      }, 0);
      console.log(finished);
    });
  };

  const translateYInterpolate = state.animation.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });
  const animatedStyles = {
    opacity: state.animation,
    transform: [{ translateY: translateYInterpolate }],
  };
  return (
    <View style={styles.container}>
      {state.visible && (
        <TouchableWithoutFeedback onPress={startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}></Animated.View>
        </TouchableWithoutFeedback>
      )}
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
    width: 150,
    height: 150,
    backgroundColor: "tomato",
    borderRadius: 15,
    elevation: 15,
  },
});

export default UnMountingAnimations;
