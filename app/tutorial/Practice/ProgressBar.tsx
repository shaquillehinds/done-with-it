import React, { useState } from "react";
import { View, StyleSheet, Animated, Button, Easing } from "react-native";
import colors from "../../config/colors";

const ProgressBar = () => {
  const progress = useState(new Animated.Value(0))[0];
  const handlePress = (): void => {
    Animated.timing(progress, {
      useNativeDriver: false,
      toValue: 1,
      duration: 1500,
      easing: Easing.in(Easing.ease),
    }).start(() => {
      Animated.timing(progress, {
        useNativeDriver: false,
        toValue: 0,
        duration: 500,
        delay: 500,
      }).start();
    });
  };
  const widthInterpolate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", `100%`],
  });

  const colorInterpolate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255, 87, 51)", `rgb(51, 255, 87)`],
  });

  const progressStyle = { width: widthInterpolate, backgroundColor: colorInterpolate };

  return (
    <View style={styles.container}>
      <View style={styles.outerBar}>
        <Animated.View style={[styles.innerBar, progressStyle]}></Animated.View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"Load"} onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  outerBar: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderColor: colors.medium,
    borderWidth: 3,
    justifyContent: "center",
    paddingLeft: 3,
    paddingRight: 3,
    overflow: "hidden",
  },
  innerBar: {
    borderRadius: 7,
    height: 40,
    backgroundColor: colors.secondary,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
});

export default ProgressBar;
