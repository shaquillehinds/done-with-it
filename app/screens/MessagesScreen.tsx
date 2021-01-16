import React, { useState } from "react";
import { FlatList, StyleSheet, ListRenderItemInfo } from "react-native";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import Separator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const msgs: Message[] = [
  { id: 1, title: "T1", description: "D1", image: "https://source.unsplash.com/random/50x50" },
  { id: 2, title: "T2", description: "D2", image: "https://source.unsplash.com/random/50x50" },
  { id: 3, title: "T3", description: "D3", image: "https://source.unsplash.com/random/50x50" },
  { id: 4, title: "T4", description: "D4", image: "https://source.unsplash.com/random/50x50" },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(msgs);
  const [refreshing, setRefreshing] = useState(false);

  const keyExtractor = (message: Message): string => message.id.toString();

  const handleMessagePress = (message: string): void => {
    console.log(message);
  };

  const handleDeletePress = (message: Message): void => {
    const newMessages = messages.filter((msg: Message): boolean => msg.id !== message.id);
    setMessages(newMessages);
  };

  const handleRefresh = (): void => {
    setMessages(msgs);
  };

  const renderItem = ({ item }: ListRenderItemInfo<Message>): JSX.Element => (
    <ListItem
      onPress={() => handleMessagePress(item.description)}
      renderRightActions={() => <ListItemDeleteAction onPress={() => handleDeletePress(item)} />}
      listItemImage={item.image}
      listItemSubTitle={item.description}
      listItemTitle={item.title}
    />
  );

  return (
    <Screen color="white">
      <FlatList
        data={messages}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
