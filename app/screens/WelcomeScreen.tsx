import React from "react";
import { View, Image, Text, ImageBackground, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

const WelcomeScreen = (): JSX.Element => {
  const loginButtonHandler = async (): Promise<void> => {
    console.log("Login");
  };
  const registerButtonHandler = async (): Promise<void> => {
    console.log("Register");
  };
  return (
    <ImageBackground blurRadius={5} source={require("../assets/background.jpg")} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" color={"primary"} onPress={loginButtonHandler} />
        <AppButton title="Register" color={"secondary"} onPress={registerButtonHandler} />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "flex-end" },
  buttonsContainer: { alignSelf: "center", width: "100%", justifyContent: "space-around", padding: 10 },
  logo: { height: 100, width: 100, alignSelf: "center" },
  logoContainer: { position: "absolute", top: 100, width: "100%" },
  tagline: { fontWeight: "700", fontSize: 20, alignSelf: "center", color: colors.black, paddingVertical: 15 },
});
export default WelcomeScreen;
