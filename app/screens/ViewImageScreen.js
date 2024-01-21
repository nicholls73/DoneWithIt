import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeBtn}>
                <MaterialCommunityIcons name='close' color='white' size={35} />
            </View>
            <View style={styles.deleteBtn}>
                <MaterialCommunityIcons
                    name='trash-can-outline'
                    color='white'
                    size={35}
                />
            </View>
            <Image
                style={styles.image}
                source={require("../assets/chair.jpg")}
            ></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%",
    },
    closeBtn: {
        position: "absolute",
        top: 40,
        left: 30,
    },
    deleteBtn: {
        position: "absolute",
        top: 40,
        right: 30,
    },
});

export default ViewImageScreen;
