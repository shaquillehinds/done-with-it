import React, { useState } from "react";
import { View, StyleSheet, Animated, TouchableWithoutFeedback, Dimensions, LayoutChangeEvent } from "react-native";

const UnMountingAnimations = () => {
  const [state, setState] = useState({ animation: new Animated.ValueXY(), layoutWidth: 0, layoutHeight: 0 });
  const saveDimensions = (e: LayoutChangeEvent) => {
    const layoutWidth = e.nativeEvent.layout.width;
    const layoutHeight = e.nativeEvent.layout.height;
    setState((prev) => ({ ...prev, layoutHeight, layoutWidth }));
  };
  const startAnimation = (): void => {
    const { width, height } = Dimensions.get("window");
    const bottomLeft = Animated.spring(state.animation.y, {
      useNativeDriver: false,
      toValue: height - state.layoutHeight,
    });
    const topRight = Animated.spring(state.animation.y, {
      useNativeDriver: false,
      toValue: 0,
    });
    const bottomRight = Animated.spring(state.animation.x, {
      useNativeDriver: false,
      toValue: width - state.layoutWidth,
    });
    const topLeft = Animated.spring(state.animation.x, {
      useNativeDriver: false,
      toValue: 0,
    });
    Animated.sequence([bottomLeft, bottomRight, topRight, topLeft]).start();
  };

  const animatedStyles: any = {
    transform: state.animation.getTranslateTransform(),
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation} onLayout={saveDimensions}>
        <Animated.View style={[styles.box, animatedStyles]}></Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
    borderRadius: 15,
    elevation: 15,
    top: 0,
    left: 0,
  },
});

export default UnMountingAnimations;
