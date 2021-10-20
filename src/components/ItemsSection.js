import React from 'react';
import { FlatList, Image, TextInput, View, Text, StyleSheet } from 'react-native';
import Item from './Item';

const ItemsSection = ({ headerName, items }) => {

    return (
        <View>
            <Text style={styles.header}>{headerName}</Text>
            <FlatList
                contentContainerStyle={{ paddingHorizontal:20 }}
                ItemSeparatorComponent={
                    () => <View style={{ width: 16, backgroundColor: '#F0EEEE' }} />
                }
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                data={items}
                renderItem={({ item }) => {
                    return (
                        <Item style={styles.item} imageUrl={item.image_url}
                            title={item.name}
                            starsCount={item.rating}
                            reviewsCount={item.review_count}>
                        </Item>
                    );
                }}
            />
        </View>

    );
};

const styles = StyleSheet.create({

    item: {
        width: '80%',
        backgroundColor: 'white'
    },

    header: {
        padding: 20,
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default ItemsSection;