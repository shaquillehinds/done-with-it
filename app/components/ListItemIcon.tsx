import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ListItemIcon = ({ name, color = "white", backgroundColor = "black", size = 40 }: ListItemIconProps) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: colors[backgroundColor],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={colors[color]} size={size * 0.5} />
    </View>
  );
};

export default ListItemIcon;
