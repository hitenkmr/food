import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Item from './Item';

const ItemsSection = ({ headerName, items, navigation }) => {

    function actionOnRow(item) {
        navigation.navigation.navigate('ItemsDetail');
    }

    return (
        <View>
            <Text style={styles.header}>{headerName}</Text>
            <FlatList
                contentContainerStyle={{ paddingHorizontal: 20 }}
                ItemSeparatorComponent={
                    () => <View style={{ width: 16, backgroundColor: 'white' }} />
                }
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => item.id}
                data={items}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => actionOnRow(item)}>
                            <Item style={styles.item} imageUrl={item.image_url}
                                title={item.name}
                                starsCount={item.rating}
                                reviewsCount={item.review_count}>
                            </Item>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>

    );
};

const styles = StyleSheet.create({

    item: {
        backgroundColor: 'white'
    },

    header: {
        padding: 20,
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default ItemsSection;