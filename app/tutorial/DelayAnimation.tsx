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
    const animateColor2 = Animated.timing(state.colorAnimation, {
      useNativeDriver: false,
      duration: 500,
      toValue: 0,
    });
    const animateScale2 = Animated.timing(state.scaleAnimation, {
      useNativeDriver: false,
      duration: 300,
      toValue: 1,
    });
    const parallelAnimation = Animated.parallel([animateColor2, animateScale2]);
    //The Animated.delay method creates a delay between a sequence or chain of animations
    const sequenceAnimation = Animated.sequence([animateColor, animateScale, Animated.delay(500), parallelAnimation]);
    sequenceAnimation.start();
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
          <Text style={styles.text}>Hello Delay</Text>
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
    borderRadius: 10,
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
