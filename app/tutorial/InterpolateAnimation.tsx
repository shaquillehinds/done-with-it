import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import colors from "../config/colors";

const SequenceAnimation = () => {
  const [animation, setState] = useState(new Animated.Value(0));

  const startAnimation = (): void => {
    const animate1 = Animated.timing(animation, {
      useNativeDriver: true,
      duration: 1500,
      toValue: 1,
    });
    const animate2 = Animated.timing(animation, {
      useNativeDriver: true,
      duration: 300,
      toValue: 2,
    });
    Animated.sequence([animate1, animate2]).start();
  };

  const animatedInterpolate = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 300, 0],
  });

  const interpolatedInterpolate = animatedInterpolate.interpolate({
    /*the following is basically saying the output value wants to reach
    0.5 opacity when the input value reaches 150
    however the input range goes to 300 so the output value 
    will continue until the input value reaches 300 and 
    then the output value will reach opacity 0.
    This is because the extrapolate settings on interpolated values are
    automatically set to extend. To prevent extrapolation, you can set
    the extrapolate property on interpolate to 'clamp'
    This basically means that for every 150 points the input moves,
    the output will move 0.5 points. Also because the input values
    return to 0, the output value will also return to 1.*/
    // interpolation is simply mapping one range of values to another
    // if the input range goes beyond its specified range then the output range
    //will follow while continuing to use the same mapped values
    // changing your input range from your actual input values alters
    // your the mapping of your range values and should only be done
    // if you know mathematically the mapped values you will get in return
    inputRange: [0, 150],
    outputRange: [1, 0.5],
  });

  const translateXInterpolate = animatedInterpolate.interpolate({
    inputRange: [0, 50, 75, 180, 190, 225, 275, 300],
    outputRange: [0, 50, 75, 0, 25, -25, 100, 200],
  });

  const animatedStyles = {
    // backgroundColor: animatedInterpolate,
    transform: [{ translateY: animatedInterpolate }, { translateX: translateXInterpolate }],
    opacity: interpolatedInterpolate,
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
