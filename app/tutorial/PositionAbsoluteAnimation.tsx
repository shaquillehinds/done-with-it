import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import colors from "../config/colors";

const FadeAnimation = () => {
  const [animation, setAnimation] = useState(new Animated.Value(125));
  const startAnimation = (): void => {
    Animated.timing(animation, {
      useNativeDriver: false,
      toValue: 0,
      duration: 1500,
    }).start((): void => {
      Animated.spring(animation, {
        useNativeDriver: false,
        toValue: 125,
        speed: 0,
        bounciness: 10,
        velocity: 0,
      }).start();
    });
  };
  const animatedStyles = {
    left: animation,
    right: animation,
    top: 0,
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
    height: 150,
    position: "absolute",
    backgroundColor: colors.danger,
  },
});

export default FadeAnimation;
