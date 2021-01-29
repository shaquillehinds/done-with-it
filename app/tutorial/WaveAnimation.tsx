import React, { useEffect } from "react";
import { View, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import MaskedView from "@react-native-community/masked-view";
import { mix } from "react-native-redash";

const SIZE = Dimensions.get("window").width - 64;
const AnimatedPath = Animated.createAnimatedComponent(Path);

const WaveAnimation = () => {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) }), -1, true);
  }, [progress]);
  const f1 = (num: number) => {
    "worklet";
    const m = mix.bind(null, num - progress.value);
    return {
      from: {
        x: m(-0.1, -1),
        y: m(0.2, 0.5),
      },
      c1: { x: m(0, 0.5), y: m(0.7, 1) },
      c2: { x: m(1, 0.5), y: m(0.3, 0) },
      to: { x: m(1.1, 2), y: m(0.8, 0.5) },
    };
  };
  const f2 = (path: any) => {
    const { from, c1, c2, to } = path.value;
    return {
      d: `M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 Z`,
    };
  };
  // const data1 = useDerivedValue(()=>f1(0));
  // const data2 = useDerivedValue(()=>f1(1));
  // const path1 = useAnimatedProps(()=>f2(data1));
  // const path2 = useAnimatedProps(() =>f2(data2));
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <MaskedView
        maskElement={
          <View
            style={{
              backgroundColor: "black",
              width: SIZE,
              height: SIZE,
              borderRadius: SIZE / 2,
            }}
          />
        }
      >
        <Svg width={SIZE} height={SIZE} style={{ backgroundColor: "#242424" }} viewBox="0 0 1 1">
          {/* <AnimatedPath fill="#86b4ff" animatedProps={path2} />
          <AnimatedPath fill={"steelblue"} animatedProps={path1} /> */}
        </Svg>
      </MaskedView>
    </View>
  );
};

export default WaveAnimation;
