import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import colors from "../config/colors";

const FadeAnimation = () => {
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const startAnimation = (): void => {
    Animated.timing(animation, {
      useNativeDriver: true,
      toValue: -1,
      duration: 1500,
    }).start((): void => {
      Animated.timing(animation, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1500,
        delay: 500,
      }).start();
    });
  };
  const animatedStyles = {
    transform: [
      {
        scaleX: animation,
      },
    ],
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>Some Text</Text>
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
    width: 150,
    height: 150,
    backgroundColor: colors.danger,
  },
});

export default FadeAnimation;
