import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ItemsDetailScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.text}>{result.name}</Text>
            <FlatList
                ItemSeparatorComponent={
                    () => <View style={{ height: 16, backgroundColor: 'white' }} />
                }
                style={{ marginTop: 20 }}
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    text: {
        fontSize:20,
        fontWeight:'bold',
        marginLeft: 20,
        marginTop: 20
    },

    image: {
        height: 200,
        width: 300,
        marginLeft: 20
    }
});

export default ItemsDetailScreen;