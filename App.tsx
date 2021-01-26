import React, { useState } from "react";

// import AppPicker from "./app/components/AppPicker";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import MessagesScreen from "./app/screens/MessagesScreen";
// import AccountScreen from "./app/screens/AccountScreen";
// import ListingsScreen from "./app/screens/ListingsScreen";
import Animations from "./app/screens/Animations";
import Screen from "./app/components/Screen";

export default function App(): JSX.Element {
  const [isNew, setIsNew] = useState(false);
  const [color, setColor] = useState("Category");

  const items = [
    { value: "", label: "Category" },
    { value: "Red", label: "Red" },
    { value: "Blue", label: "Blue" },
    { value: "Green", label: "Green" },
    { value: "Alpha", label: "Alpha" },
  ];

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
      <Animations />
    </Screen>
  );
}
