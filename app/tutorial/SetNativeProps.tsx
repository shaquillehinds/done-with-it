import React, { useState, useEffect } from "react";
import { View, ScrollView, Animated, StyleSheet, TouchableOpacity, Text } from "react-native";

//not recommended, setState is mostly recommended

const EventAnimation = () => {
  const animation = useState(new Animated.Value(0))[0];
  const [scroll, setScroll] = useState<ScrollView | null>(null);

  useEffect(() => {
    console.log("refresh");
  }, []);

  let enabled = true;

  const handleToggle = (): void => {
    let style = [styles.scroll];
    enabled ? style.push(styles.hide) : style.push(styles.show);
    enabled = !enabled;
    scroll?.setNativeProps({
      scrollEnabled: enabled,
      style,
    });
  };

  const backgroundInterpolate = animation.interpolate({
    inputRange: [0, 2265],
    outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"],
  });

  const backgroundStyle = {
    backgroundColor: backgroundInterpolate,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggle}>
        <Text>Toggle</Text>
      </TouchableOpacity>
      <ScrollView
        ref={(scroll) => setScroll(scroll)}
        scrollEventThrottle={1}
        style={styles.scroll}
        onScroll={Animated.event(
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
        )}
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
  scroll: {},
  hide: { opacity: 0 },
  show: { opacity: 1 },
});

export default EventAnimation;
