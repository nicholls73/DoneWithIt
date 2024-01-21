import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';
import AppText from '../AppText';

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions, showChevrons }) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                    onPress={onPress}
                    underlayColor={colors.light}>
                    <View style={styles.container}>
                        {IconComponent}
                        {/*vvv will ONLY render if an image is parsed*/}
                        {image && <Image style={styles.image} source={image} />}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                        </View>
                        {showChevrons && <MaterialCommunityIcons name='chevron-right' size={25} color={colors.grey} />}
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '500',
    },
    subTitle: {
        fontSize: 15,
        color: colors.grey,
    }
});

export default ListItem;