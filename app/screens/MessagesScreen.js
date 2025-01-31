import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import {
    ListItem,
    ListItemDeleteAction,
    ListItemSeparator,
} from "../components/lists";
import Screen from "../components/Screen";

const initalMessages = [
    {
        id: 1,
        title: "Mosh Hamedani",
        description: "Hey! Is this item still available?",
        image: require("../assets/mosh.jpg"),
    },
    {
        id: 2,
        title: "Mosh Hamedani",
        description:
            "I'm interested in this item. When will you be able to post it?",
        image: require("../assets/mosh.jpg"),
    },
];

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initalMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        // Delete the message from messages
        // Call the server

        setMessages(messages.filter((m) => m.id !== message.id));
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(messages) => messages.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected.", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: "T2",
                            description: "D2",
                            image: require("../assets/mosh.jpg"),
                        },
                    ]);
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
