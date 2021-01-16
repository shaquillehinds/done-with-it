import React from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import ListItemIcon from "./ListItemIcon";

const ListItem = ({ ListItemImage, ItemIcon, ListItemTitle, ListItemSubTitle, onPress, renderRightActions }: ListItemProps): JSX.Element => {
  if (typeof ItemIcon === "object") var { name, size, color, backgroundColor } = ItemIcon;
  console.log(name);
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {ListItemImage ? (
            <Image style={styles.image} source={{ uri: ListItemImage }} />
          ) : (
            <ListItemIcon name={name} backgroundColor={backgroundColor} color={color} size={size} />
          )}
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{ListItemTitle}</Text>
            {ListItemSubTitle && <Text style={styles.subTitle}>{ListItemSubTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 18,
    backgroundColor: "white",
  },
  image: { borderRadius: 35, height: 70, width: 70 },
  detailsContainer: { marginLeft: 10, justifyContent: "center" },
  title: { fontSize: 15, fontWeight: "700" },
  subTitle: { color: colors.medium },
});

export default ListItem;
