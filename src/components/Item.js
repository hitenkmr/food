import React from 'react';
import { Image, TextInput, View, Text, StyleSheet } from 'react-native';


const Item = ({ imageUrl, title, starsCount, reviewsCount }) => {

    return (

        <View style={styles.container}>
            <Image style={styles.image} source={{uri:imageUrl}} />

            <Text style={styles.title}>{title}</Text>

            <View style={styles.starReview}>
                <Text style={styles.starText}>{starsCount} stars</Text>
                <Text style={styles.reviewsText}>{reviewsCount} reviews</Text>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({

    container: {
        width: 250,
        backgroundColor:'green',
    },

    image: {
        marginLeft: 20,
        height: 120,
    },

    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 20
    },

    starReview: {
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 20
    },

    starText: {
        color: 'gray',
        fontSize: 12
    },

    reviewsText: {
        color: 'gray',
        fontSize: 12
    }

});

export default Item;