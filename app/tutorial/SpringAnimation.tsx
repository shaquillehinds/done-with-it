import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Easing } from "react-native";

const SpringAnimation = () => {
  const animation = useState(new Animated.Value(1))[0];

  const handlePress = (): void => {
    animation.addListener(({ value }): void => {
      console.log(value);
    });
    Animated.spring(animation, {
      useNativeDriver: true,
      friction: 3,
      toValue: 2,
    }).start((): void => {
      Animated.spring(animation, {
        useNativeDriver: true,
        tension: 80,
        toValue: 1,
      }).start();
    });
  };

  const animationStyles = {
    transform: [{ scale: animation }],
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View style={[styles.box, animationStyles]}></Animated.View>
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
    height: 50,
    width: 50,
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
  },
});

export default SpringAnimation;
