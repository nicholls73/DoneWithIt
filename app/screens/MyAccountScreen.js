import React from "react";
import { View } from "react-native";

import { ListItem } from "../components/lists";
import Screen from "../components/Screen";

function MyAccountScreen(props) {
    return (
        <Screen>
            <View>
                <ListItem
                    image={require("../assets/mosh.jpg")}
                    title='Mosh Hamedani'
                    subTitle='programmingwithmosh@gmail.com'
                />
            </View>
        </Screen>
    );
}

export default MyAccountScreen;
