import React from "react";
import { FlatList, View, StyleSheet, ListRenderItemInfo } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Separator from "../components/ListItemSeparator";

const menuItems: ListItemProps[] = [
  {
    ListItemTitle: "My Listings",
    ItemIcon: {
      name: "format-list-bulleted",
      backgroundColor: "primary",
    },
  },
  {
    ListItemTitle: "My Messages",
    ItemIcon: {
      name: "email",
      backgroundColor: "secondary",
    },
  },
];

const logoutIcon: ListItemIconProps = {
  name: "logout",
  backgroundColor: "yellow",
};

const AccountScreen = () => {
  const renderItem = ({ item }: ListRenderItemInfo<ListItemProps>): JSX.Element => {
    return <ListItem ListItemTitle={item.ListItemTitle} ItemIcon={item.ItemIcon} />;
  };

  return (
    <Screen color="light">
      <View style={styles.container}>
        <ListItem
          ListItemTitle="Shaquille Hinds"
          ListItemSubTitle="shaqdulove@hotmail.com"
          ListItemImage="https://source.unsplash.com/random/50x50"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem): string => menuItem.ListItemTitle}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
        />
      </View>

      <ListItem ListItemTitle="Log Out" ItemIcon={logoutIcon} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default AccountScreen;
