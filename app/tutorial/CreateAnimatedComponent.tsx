import React, { useState } from "react";
import { View, Button, Animated, StyleSheet } from "react-native";

const InterpolateRotate = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const startAnimation = (): void => {
    Animated.timing(animation, {
      useNativeDriver: false,
      toValue: 1,
      duration: 1500,
    }).start((): void => {
      Animated.timing(animation, {
        useNativeDriver: false,
        toValue: 0,
        duration: 300,
      }).start();
    });
  };
  const AnimatedButton = Animated.createAnimatedComponent(Button);
  const colorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"],
  });
  return (
    <View style={styles.container}>
      <AnimatedButton title="Press Me" onPress={startAnimation} color={colorInterpolation} />
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
