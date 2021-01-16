import React from "react";
import { Platform, Text, StyleSheet } from "react-native";

const AppText = ({ children }: { children: string }): JSX.Element => {
  return <Text style={styles.text}>{children}</Text>;
};
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "black",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export default AppText;
