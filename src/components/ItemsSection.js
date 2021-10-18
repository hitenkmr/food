import React from 'react';
import { FlatList, Image, TextInput, View, Text, StyleSheet } from 'react-native';
import Item from './Item';

const ItemsSection = ({ headerName, items }) => {

    return (
        <View>
            <Text style={styles.header}>{headerName}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                data={items}
                renderItem={({ item }) => {
                    return (
                        <Item title={item.title}
                            starsCount={item.starsCount}
                            reviewsCount={item.reviewsCount}>
                        </Item>
                    );
                }}
            />
        </View>

    );
};

const styles = StyleSheet.create({

    item: {
        width: '80%'
    },

    header: {
        padding: 20,
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default ItemsSection;