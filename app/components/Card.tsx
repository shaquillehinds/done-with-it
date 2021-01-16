import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

const Card = ({ listItemImage, listItemTitle, listItemSubTitle }: ListItemProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" style={styles.image} source={{ uri: listItemImage }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listItemTitle}</Text>
        <Text style={styles.subTitle}>{listItemSubTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    shadowColor: "grey",
    shadowOffset: { width: 20, height: 20 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 15,
    borderRadius: 20,
    height: 300,
    marginVertical: 10,
  },
  image: { flex: 3 },
  detailsContainer: { flex: 1, backgroundColor: colors.white, justifyContent: "space-between", padding: 18 },
  title: { fontSize: 20, fontWeight: "700" },
  subTitle: { fontSize: 18, fontWeight: "700", color: colors.secondary },
});

export default Card;
