import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';


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
        backgroundColor:'white',
    },

    image: {
        height: 120,
        borderRadius:5
    },

    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },

    starReview: {
        flexDirection: 'row',
        marginTop: 5,
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