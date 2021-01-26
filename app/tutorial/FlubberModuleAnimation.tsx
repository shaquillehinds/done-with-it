import React, { useState, useEffect } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Svg, { Path, PathProps } from "react-native-svg";
import { interpolate } from "flubber";

// const startPath = `M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z`;
// const endPath = `M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z`;

const startPath = "m 0 0 l 200 0 v 100 h -200 v -100";
// const endPath = "M 0 0 l 50 0 C 66 30 86 28 100 0 H 200 v 100 h -200 v -10";
const endPath = "m 0 0 c 66 70 143 70 200 0 v 100 h -200 v -10";

const ArtModuleAnimation = () => {
  const animation = useState(new Animated.Value(0))[0];
  const [path, setPath] = useState<React.Component<PathProps, any, any> | null>(null);

  useEffect(() => {
    if (path) {
      console.log("path");
      const pathInterpolate = interpolate(startPath, endPath, {
        maxSegmentLength: 1,
      });

      animation.addListener(({ value }) => {
        const d = pathInterpolate(value);
        path?.setNativeProps({
          d,
        });
      });
    }
  }, [path]);

  const handlePress = (): void => {
    Animated.spring(animation, {
      useNativeDriver: true,
      friction: 5,
      toValue: 1,
    }).start((): void => {
      Animated.spring(animation, {
        useNativeDriver: true,
        tension: 150,
        toValue: 0,
      }).start();
    });
  };
  //"rgb(255,99,71)", "rgb(99,71,255)"

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Svg width={300} height={150}>
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

export default ArtModuleAnimation;
