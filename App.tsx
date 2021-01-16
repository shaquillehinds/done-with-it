import React, { useState } from "react";
import { Text, TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";

// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import MessagesScreen from "./app/screens/MessagesScreen";
// import AccountScreen from "./app/screens/AccountScreen";
// import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";

export default function App(): JSX.Element {
  const [firstName, setFirstName] = useState("");

  const ListingDetailsScreenProps = {
    title: "Test",
    subTitle: "$400",
    image: "https://source.unsplash.com/random/600x400",
    ListItemTitle: "Shaquille Hinds",
    ListItemSubTitle: "3 Listings",
    ListItemImage: "https://source.unsplash.com/random/50x50",
  };
  // return <ListingDetailsScreen {...ListingDetailsScreenProps} />;
  return (
    <Screen color="white">
      <AppTextInput icon={"email"} otherProps={{ placeholder: "user" }} />
    </Screen>
  );
}
