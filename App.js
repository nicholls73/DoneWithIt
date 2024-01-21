import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

function App() {
    const [user, setUser] = useState();

    SplashScreen.preventAutoHideAsync();

    const restoreUser = async () => {
        const user = await authStorage.getUser();
        if (user) {
            setUser(user);
        }
    };

    useEffect(() => {
        restoreUser();
        SplashScreen.hideAsync();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <OfflineNotice />
            <NavigationContainer theme={navigationTheme}>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
