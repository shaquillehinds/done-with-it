import React, { useState, useEffect } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, NativeMethods } from "react-native";
import Svg, { Path, PathProps } from "react-native-svg";
import { interpolatePath } from "d3-interpolate-path";

const startPath = "M45,50a5,5 0 1,0 10,0a5,5 0 1,0 -10,0";
const endPath = "M20,50a30,30 0 1,0 60,0a30,30 0 1,0 -60,0";

const d3InterpolatePath = () => {
  const animation = useState(new Animated.Value(0))[0];
  const [path, setPath] = useState<React.Component<PathProps, any, any> | null>(null);

  useEffect(() => {
    console.log("mounted");
    if (path) {
      const pathInterpolate = interpolatePath(startPath, endPath);
      animation.addListener(({ value }) => {
        const d = pathInterpolate(value); //returns a new path
        path?.setNativeProps({
          d,
        });
      });
    }
  }, [path]);

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
        <Svg width={150} height={150}>
          <Path d={startPath} stroke="black" fill="black" ref={(path) => setPath(path)} />
        </Svg>
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

export default d3InterpolatePath;
