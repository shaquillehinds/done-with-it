import React, { useState, useEffect } from "react";
import { StyleSheet, View, Animated, Easing, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Svg, { Path, PathProps } from "react-native-svg";
import SVGPath from "art/modes/svg/path";
import { Tween } from "art/morph/path";

const startPath = "M 0 0 C 15 0 30 0 45 30 C 60 60 90 60 105 30 C 120 0 135 0 150 0 H 0 Z";
const endPath = "M 0 0 C 15 0 30 0 45 0 C 60 0 90 0 105 0 C 120 0 135 0 150 0 H 0 Z";
const width = Dimensions.get("window").width - 30;
const svgWidth = 150;
const movingDistance = (width - 60) / 4;
type iconNumber = 1 | 2 | 3 | 4;
type icon = "icon1" | "icon2" | "icon3" | "icon4";
const AnimatedIcons = Animated.createAnimatedComponent(MaterialCommunityIcons);
const SlidingBottomNav = () => {
  const animation = useState({
    curve: new Animated.Value(0),
    icon1: new Animated.Value(0),
    icon2: new Animated.Value(0),
    icon3: new Animated.Value(0),
    icon4: new Animated.Value(0),
    path: new Animated.Value(0),
  })[0];
  const [path, setPath] = useState<React.Component<PathProps, any> | null>(null);

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
      animation.path.addListener(({ value }) => {
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

  const startAnimation = (toValue: number, number: iconNumber): void => {
    for (const i in animation) {
      if (i.includes("icon")) animation[i as icon].setValue(0);
    }
    const moveWave = Animated.timing(animation.curve, {
      useNativeDriver: true,
      duration: 500,
      easing: Easing.out(Easing.ease),
      toValue,
    });
    const icon = ("icon" + number) as icon;
    const animateIcon = (): Animated.CompositeAnimation[] => [
      Animated.timing(animation[icon], {
        useNativeDriver: false,
        duration: 300,
        toValue: 50,
      }),
      Animated.timing(animation[icon], {
        useNativeDriver: false,
        duration: 0,
        toValue: -50,
      }),
      Animated.spring(animation[icon], {
        useNativeDriver: false,
        toValue: 1,
        friction: 5,
      }),
    ];
    const animatePath = (): Animated.CompositeAnimation[] => [
      Animated.timing(animation.path, {
        useNativeDriver: true,
        duration: 300,
        toValue: 1,
      }),
      Animated.spring(animation.path, {
        useNativeDriver: true,
        toValue: 0,
        friction: 5,
      }),
    ];
    Animated.sequence(animateIcon()).start(() =>
      Animated.timing(animation[icon], {
        useNativeDriver: false,
        duration: 1000,
        toValue: 1,
      })
    );
    Animated.sequence(animatePath()).start();

    moveWave.start();
  };
  const animatedStyles = {
    transform: [{ translateX: animation.curve }],
  };
  const colorInterpolate = (icon: icon, color: string) => {
    return animation[icon].interpolate({
      inputRange: [0, 1, 1.01],
      outputRange: ["rgb(136, 136, 136)", color, "rgb(136, 136, 136)"],
      extrapolate: "clamp",
    });
  };
  const activationStyles = (icon: icon) => {
    let color: string;
    switch (icon) {
      case "icon1":
        color = "rgb(0, 217, 76)";
        break;
      case "icon2":
        color = "rgb(235, 0, 0)";
        break;
      case "icon3":
        color = "rgb(235, 160, 0)";
        break;
      default:
        color = "rgb(0, 186, 219)";
    }
    return [{ color: colorInterpolate(icon, color), transform: [{ translateY: animation[icon] }] }];
  };
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Animated.View pointerEvents="none" style={[styles.svg, animatedStyles]}>
          <Svg width={150} height="55">
            <Path d={startPath} fill="white" ref={(path) => setPath(path)} />
          </Svg>
        </Animated.View>
        <TouchableWithoutFeedback style={styles.touchBox} onPress={() => startAnimation(movingDistance * 0, 1)}>
          <AnimatedIcons name={"power-on"} style={activationStyles("icon1")} size={30} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={styles.touchBox} onPress={() => startAnimation(movingDistance * 1, 2)}>
          <AnimatedIcons name={"power-off"} style={activationStyles("icon2")} size={30} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={styles.touchBox} onPress={() => startAnimation(movingDistance * 2, 3)}>
          <AnimatedIcons name={"power-standby"} style={activationStyles("icon3")} size={30} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={styles.touchBox} onPress={() => startAnimation(movingDistance * 3, 4)}>
          <AnimatedIcons name={"power-cycle"} style={activationStyles("icon4")} size={30} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default SlidingBottomNav;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    position: "absolute",
    bottom: 25,
    width,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  nav: {
    backgroundColor: "#333",
    height: 55,
    elevation: 10,
    borderRadius: 35,
    flexDirection: "row",
    overflow: "hidden",
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "space-around",
  },
  svg: { position: "absolute", top: 0, left: movingDistance / 2 + 30 - 75 },
  touchBox: {
    height: "100%",
    width: movingDistance,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "purple",
  },
});
