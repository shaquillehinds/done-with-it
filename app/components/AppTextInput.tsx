import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

interface TextProps {
  icon?: icons;
  otherProps: any;
  onChangeText: (text: string) => void;
}

const AppTextInput = ({ icon, otherProps, onChangeText }: TextProps) => {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
      <TextInput style={styles.textInput} onChangeText={(text: string) => onChangeText(text)} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  textInput: defaultStyles.text,
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
