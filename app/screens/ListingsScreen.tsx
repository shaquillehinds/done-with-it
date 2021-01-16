import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import colors from "../config/colors";
import Card from "../components/Card";

const cards: any = [];
for (let i = 0; i < 4; i++) {
  cards.push({ id: i, listItemTitle: "Test", listItemSubTitle: "$400", listItemImage: "https://source.unsplash.com/random/600x400" });
}

const ListingsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cards.map((card: any, index: number) => (
        <Card key={index} {...card} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.light,
    paddingTop: 100,
    minHeight: "100%",
    width: "100%",
    overflow: "visible",
  },
});

export default ListingsScreen;
