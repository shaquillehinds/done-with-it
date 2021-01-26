import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import colors from "../config/colors";

const OperationsAnimation = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const startAnimation = (): void => {
    Animated.timing(animation, {
      useNativeDriver: false,
      toValue: 300,
      duration: 1500,
    }).start((): void => {
      Animated.timing(animation, {
        useNativeDriver: false,
        toValue: 0,
        duration: 200,
      }).start();
    });
  };
  const randomValue = new Animated.Value(2);
  const newAnimation = Animated.add(animation, randomValue);
  // const newAnimation = Animated.divide(animation, randomValue);
  // const newAnimation = Animated.multiply(animation, randomValue);
  const animatedStyles = {
    transform: [{ translateY: newAnimation }],
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

export default OperationsAnimation;
