import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import colors from "../config/colors";

const ParallelAnimation = () => {
  const [state, setState] = useState({ colorAnimation: new Animated.Value(0), scaleAnimation: new Animated.Value(1) });

  const handlePress = (): void => {
    const animateColor = Animated.timing(state.colorAnimation, {
      useNativeDriver: false,
      toValue: 1,
      duration: 500,
    });
    const animateScale = Animated.timing(state.scaleAnimation, {
      useNativeDriver: false,
      toValue: 2,
      duration: 300,
    });
    Animated.parallel([animateColor, animateScale]).start();
  };

  const backgroundColorInterpolate = state.colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"],
  });

  const boxStyle = {
    backgroundColor: backgroundColorInterpolate,
    transform: [{ scale: state.scaleAnimation }],
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View style={[styles.box, boxStyle]}>
          <Text style={styles.text}>Hello Parallel</Text>
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
    backgroundColor: colors.danger,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
});

export default ParallelAnimation;
