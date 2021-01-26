import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import colors from "../config/colors";

const SequenceAnimation = () => {
  const [state, setState] = useState({ colorAnimation: new Animated.Value(0), scaleAnimation: new Animated.Value(1) });

  const handlePress = (): void => {
    const animateColor = Animated.timing(state.colorAnimation, {
      useNativeDriver: false,
      duration: 500,
      toValue: 1,
    });
    const animateScale = Animated.timing(state.scaleAnimation, {
      useNativeDriver: false,
      duration: 300,
      toValue: 2,
    });
    //causes a delay before the next animation starts
    Animated.stagger(500, [animateColor, animateScale]).start();
  };

  const interpolateColor = state.colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255,91,77)", "rgb(77,91,255)"],
  });

  const boxStyle = {
    backgroundColor: interpolateColor,
    transform: [{ scale: state.scaleAnimation }],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View style={[styles.box, boxStyle]}>
          <Text style={styles.text}>Hello Stagger</Text>
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
    elevation: 15,
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

export default SequenceAnimation;
