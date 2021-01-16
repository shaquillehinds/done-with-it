import React, { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";

const Screen = ({ children, color }: { children: ReactNode; color: Color }): JSX.Element => {
  return <SafeAreaView style={[styles.screen, { backgroundColor: colors[color] }]}>{children}</SafeAreaView>;
};
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
export default Screen;
