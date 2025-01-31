import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import Card from "../components/Card";
import routes from "../navigation/routes";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
    const getListingsApi = useApi(listingsApi.getListings);

    useEffect(() => {
        getListingsApi.request();
    }, []);

    return (
        <>
            <ActivityIndicator visible={getListingsApi.loading} />
            <Screen style={styles.screen}>
                {getListingsApi.error && (
                    <>
                        <AppText>Couldn't retrieve the listings.</AppText>
                        <AppButton title='Retry' onPress={loadListings} />
                    </>
                )}
                <FlatList
                    data={getListingsApi.data}
                    keyExtractor={(listings) => listings.id.toString()}
                    renderItem={({ item }) => (
                        <Card
                            title={item.title}
                            subTitle={"$" + item.price}
                            imageUrl={item.images[0].url}
                            onPress={() =>
                                navigation.navigate(
                                    routes.LISTING_DETAILS,
                                    item
                                )
                            }
                            thumbnailUrl={item.images[0].thumbnailUrl}
                        />
                    )}
                />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.light,
    },
});

export default ListingsScreen;
