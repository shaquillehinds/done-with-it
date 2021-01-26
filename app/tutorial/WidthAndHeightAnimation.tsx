import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import colors from "../config/colors";

const FadeAnimation = () => {
  const [animation, setAnimation] = useState(new Animated.Value(150));
  const startAnimation = (): void => {
    Animated.timing(animation, {
      useNativeDriver: false,
      toValue: 300,
      duration: 1500,
    }).start((): void => {
      Animated.timing(animation, {
        useNativeDriver: false,
        toValue: 150,
        duration: 1500,
      }).start();
    });
  };
  const animatedStyles = {
    width: animation,
    height: animation,
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt iusto necessitatibus quos temporibus nobis voluptatem
            minima facilis cum libero perferendis, rem sequi
          </Text>
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
    // width: 150,
    // height: 150,
    backgroundColor: colors.danger,
  },
});

export default FadeAnimation;
