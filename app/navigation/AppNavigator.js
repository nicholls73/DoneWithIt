import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";

import expoPushTokensApi from "../api/expoPushTokens";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    useEffect(() => {
        registerForPushNotifications();
    }, []);

    const registerForPushNotifications = async () => {
        try {
            Notifications.setNotificationChannelAsync();
            const permission = await Notifications.requestPermissionsAsync();
            if (!permission.granted) {
                return;
            }

            const token = (await Notifications.getExpoPushTokenAsync()).data;
            expoPushTokensApi.register(token);
        } catch (error) {
            console.log("Error getting a push token.", error);
        }
    };

    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Feed'
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name='home'
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='ListingEdit'
                component={ListingEditScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => (
                        <NewListingButton
                            onPress={() =>
                                navigation.navigate(routes.LISTING_EDIT)
                            }
                        />
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name='plus-circle'
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name='Account'
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name='account'
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default AppNavigator;
