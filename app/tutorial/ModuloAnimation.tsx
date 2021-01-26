import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import colors from "../config/colors";

const ModuloAnimation = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const startAnimation = (): void => {
    Animated.parallel([
      Animated.timing(animation, {
        useNativeDriver: false,
        toValue: 12,
        duration: 3500,
      }),
    ]).start();
  };
  const randomValue = 3;
  const newAnimation = Animated.modulo(animation, randomValue);
  const interpolated = newAnimation.interpolate({
    inputRange: [0, 3],
    outputRange: ["0deg", "270deg"],
  });
  const animatedStyles = {
    transform: [{ rotate: interpolated }],
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
    width: 150,
    backgroundColor: colors.danger,
  },
});

export default ModuloAnimation;
