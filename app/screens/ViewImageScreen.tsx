import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image resizeMode={"contain"} style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.icconsContainer}>
        <View style={[styles.icons]}>
          <MaterialCommunityIcons name="close" size={33} color={colors.white} />
        </View>
        <View style={[styles.icons]}>
          <MaterialCommunityIcons name="trash-can-outline" size={27} color={colors.white} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icons: { width: 50, height: 50, justifyContent: "center", alignItems: "center" },
  icconsContainer: {
    zIndex: 1,
    position: "absolute",
    top: 5,
    left: 0,
    justifyContent: "space-between",
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    padding: 10,
  },
  container: { flex: 1, backgroundColor: colors.black },
  image: { width: "100%", height: "100%" },
});

export default ViewImageScreen;
