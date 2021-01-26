import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Easing } from "react-native";

const EasingAnimation = () => {
  const animation = useState(new Animated.Value(0))[0];

  const widthInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["20%", "50%"],
  });
  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["20%", "30%"],
  });

  const startAnimation = (): void => {
    Animated.timing(animation, {
      useNativeDriver: false,
      duration: 1500,
      toValue: 1,
      // easing: Easing.back(5),
      // easing: Easing.bounce,
      // easing: Easing.bezier(0.06, 1, 0.86, 23),
      easing: Easing.elastic(5),
    }).start((): void => {
      Animated.timing(animation, {
        useNativeDriver: false,
        duration: 500,
        toValue: 0,
        delay: 500,
      }).start();
    });
  };

  const animationStyles = {
    width: widthInterpolate,
    height: heightInterpolate,
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animationStyles]}>
          <Animated.Text style={{ color: "black" }}>Hello World</Animated.Text>
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
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
  },
});

export default EasingAnimation;
