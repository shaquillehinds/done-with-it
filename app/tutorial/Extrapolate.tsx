import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";

const InterpolateRotate = () => {
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const startAnimation = (): void => {
    Animated.timing(animation, {
      useNativeDriver: true,
      toValue: 3,
      duration: 1500,
    }).start((): void => {
      Animated.timing(animation, {
        useNativeDriver: true,
        toValue: 1,
        // toValue: 0,
        duration: 300,
      }).start();
    });
  };

  const scaleInterpolate = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [1, 2],
    /* clamp stops the outputRange from going the specified range
     even if the input range continues */
    // extrapolate: "clamp",
    /* Extrapolate identity animates to a specific value similar
    to clamp, however unlike clamp, if the input range goes past the
    specified range, the output range will jump to match the input
    range value after it has reaches it's specified range*/
    // extrapolate: 'identity',
    /* Prevents the outputRange values from going below the first 
    index value in the range array(first value on the left) */
    // extrapolateLeft: "clamp",
    /* Prevents the outputRange values from going below the last
     index value in the range array(last value on the right) */
    extrapolateRight: "clamp",
  });

  const animatedStyles = {
    transform: [{ scale: scaleInterpolate }],
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
