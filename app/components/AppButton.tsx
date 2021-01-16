import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

const AppButton = ({ title, color, onPress }: AppButtonProps): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: colors[color] }]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    shadowColor: "grey",
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
    marginVertical: 10,
    width: "100%",
    borderRadius: 50,
    elevation: 10,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});

export default AppButton;
