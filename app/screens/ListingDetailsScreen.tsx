import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = ({ image, title, subTitle, ListItemImage, ListItemTitle, ListItemSubTitle }: ListingProps) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" style={styles.image} source={{ uri: image }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <View style={styles.userContainer}>
          <ListItem ListItemImage={ListItemImage} ListItemTitle={ListItemTitle} ListItemSubTitle={ListItemSubTitle} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: { height: 200, width: "100%" },
  detailsContainer: { backgroundColor: colors.white },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 10 },
  subTitle: { fontSize: 18, fontWeight: "700", color: colors.secondary },
  userContainer: { marginVertical: 40 },
});

export default ListingDetailsScreen;
