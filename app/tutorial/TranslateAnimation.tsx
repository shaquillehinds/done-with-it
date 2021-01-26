import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";

const FadeAnimation = () => {
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const startAnimation = (): void => {
    Animated.timing(animation, {
      useNativeDriver: true,
      toValue: 300,
      duration: 1500,
    }).start((): void => {
      Animated.timing(animation, {
        useNativeDriver: true,
        toValue: 0,
        duration: 1500,
      }).start();
    });
  };
  const animatedStyles = {
    transform: [
      {
        translateY: animation,
      },
    ],
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
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
    width: 150,
    height: 150,
    backgroundColor: colors.danger,
  },
});

export default FadeAnimation;
