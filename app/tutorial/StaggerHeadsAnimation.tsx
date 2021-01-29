import React, { useState } from "react";
import { View, StyleSheet, Animated, Text, Image, PanResponder, PanResponderInstance } from "react-native";

import Vjeux from "./merchive.png";

const StaggerHeadsAnimation = () => {
  const [heads, setHeads] = useState([
    {
      image: Vjeux,
      animation: new Animated.ValueXY(),
      text: "Drag Me",
    },
    {
      image: Vjeux,
      animation: new Animated.ValueXY(),
    },
    {
      image: Vjeux,
      animation: new Animated.ValueXY(),
    },
    {
      image: Vjeux,
      animation: new Animated.ValueXY(),
    },
  ]);

  const panResponder = (): PanResponderInstance =>
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, { dx, dy }) => {
        heads[0].animation.setValue({
          x: dx,
          y: dy,
        });
        heads.slice(1).map(({ animation }, index) => {
          Animated.sequence([
            Animated.delay(index * 10),
            Animated.spring(animation, {
              useNativeDriver: false,
              toValue: { x: dx, y: dy },
            }),
          ]).start();
        });
      },
      onPanResponderGrant: (evt, gestureState) => {
        heads.forEach(({ animation }) => {
          animation.extractOffset();
          animation.setValue({ x: 0, y: 0 });
        });
      },
    });

  return (
    <View style={styles.container}>
      {heads
        .slice(0)
        .reverse()
        .map((item, index, items) => {
          const pan = index === items.length - 1 ? panResponder().panHandlers : {};

          return (
            <Animated.View {...pan} key={index} style={[styles.wrap, { transform: item.animation.getTranslateTransform() as any }]}>
              <Image source={item.image} style={styles.head} />
              <Text>{item.text}</Text>
            </Animated.View>
          );
        })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrap: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
  },
  head: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
});

export default StaggerHeadsAnimation;
