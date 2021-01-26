import React, { useState } from "react";
import { View, ScrollView, Animated, StyleSheet } from "react-native";

const EventAnimation = () => {
  const animation = useState(new Animated.Value(1))[0];

  const backgroundInterpolate = animation.interpolate({
    inputRange: [0, 2265],
    outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"],
  });

  const backgroundStyle = {
    backgroundColor: backgroundInterpolate,
  };

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={1}
        onScroll={
          // ({ nativeEvent }) => {
          //   console.log(nativeEvent.contentOffset.y);
          // }
          Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: animation,
                  },
                },
              },
            ],
            { useNativeDriver: false }
          )
        }
      >
        <Animated.View style={[styles.content, backgroundStyle]}></Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: { height: 3000 },
});

export default EventAnimation;
