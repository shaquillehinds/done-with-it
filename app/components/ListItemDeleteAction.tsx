import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import colors from "../config/colors";

const ListItemDeleteAction = ({ onPress }: { onPress(): void }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" color={colors.white} size={30} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default ListItemDeleteAction;
