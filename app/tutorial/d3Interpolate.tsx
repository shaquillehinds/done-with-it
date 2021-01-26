import React, { useState, useEffect } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Easing } from "react-native";

import { interpolateNumber, interpolateRgb } from "d3-interpolate";

//d3 is a very popular svg library
//d3 also has a lot of interpolation helpers inside of it
//these are packaged in a separate npm module called d3-interpolate

const d3Interpolate = () => {
  const animation = useState(new Animated.Value(0))[0];
  const [aniComp, setAniComp] = useState<View | null>(null);

  const postitionInterpolate = interpolateNumber(0, 200);
  const colorInterpolate = interpolateRgb("rgb(255,99,71)", "rgb(99,71,255)");

  useEffect(() => {
    console.log("component mounted");
    if (aniComp) {
      animation.addListener(({ value }) => {
        const position = postitionInterpolate(value);
        const color = colorInterpolate(value);

        const style = [
          styles.box,
          {
            backgroundColor: color,
            transform: [{ translateY: position }],
          },
        ];

        aniComp?.setNativeProps({
          style,
        });
      });
    }
  }, [aniComp]);
  const handlePress = (): void => {
    Animated.spring(animation, {
      useNativeDriver: false,
      friction: 3,
      toValue: 1,
    }).start((): void => {
      Animated.spring(animation, {
        useNativeDriver: false,
        tension: 80,
        toValue: 0,
      }).start();
    });
  };
  //"rgb(255,99,71)", "rgb(99,71,255)"

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View
          ref={(view) => {
            setAniComp(view);
          }}
          style={styles.box}
        ></View>
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
    height: 50,
    width: 50,
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
  },
});

export default d3Interpolate;
