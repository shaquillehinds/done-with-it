import React, { useState, useEffect } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Svg, { Path, PathProps } from "react-native-svg";
import SVGPath from "art/modes/svg/path";
import { Tween } from "art/morph/path";

// const startPath = `M32,16.009c0-0.267-0.11-0.522-0.293-0.714  l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01  s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999  C31.894,16.534,31.997,16.274,32,16.009z`;
// const endPath = `M27.704,8.397c-0.394-0.391-1.034-0.391-1.428,0  L11.988,22.59l-6.282-6.193c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414l6.999,6.899  c0.39,0.386,1.039,0.386,1.429,0L27.704,9.811C28.099,9.421,28.099,8.787,27.704,8.397C27.31,8.006,28.099,8.787,27.704,8.397z`;

const startPath = "m 0 0 l 200 0 v 100 h -200 v -100";
const endPath = "M 0 0 l 50 0 C 66 30 86 28 100 0 H 200 v 100 h -200 v -10";
// const endPath = "m 0 0 c 66 70 143 70 200 0 v 100 h -200 v -10";

const ArtModuleAnimation = () => {
  const animation = useState(new Animated.Value(0))[0];
  const [path, setPath] = useState<React.Component<PathProps, any, any> | null>(null);

  useEffect(() => {
    if (path) {
      console.log("path");
      //creates a new input and output interpolation mapping
      //mapping [0,1] to [startPath, endPath
      //Tween returns an object with an array of 'from' and 'to' values
      const pathInterpolate = Tween(startPath, endPath);
      //new SVGPath creates a new object with path property which is an array
      // this path new Path is just blank svg template array
      const p = new SVGPath();
      animation.addListener(({ value }) => {
        // interpolates the output range array to the returned value
        pathInterpolate.tween(value);
        //applies the interpolated path array values to the newly created
        //SVGPath array property
        pathInterpolate.applyToPath(p);
        path?.setNativeProps({
          d: p.toSVG(), //turns path array values into svg string
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
