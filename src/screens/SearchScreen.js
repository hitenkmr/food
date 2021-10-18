import React from 'react';
import { Image, TextInput, View, Text, StyleSheet } from 'react-native';

const SearchScreen = () => {

  return (
    <View style={styles.container}>

      <View style={styles.searchContainer}>
        <Image style={styles.searchIcon} source={require('../../assets/ic_search.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor='rgb(182,180,181)'
          onChangeText={(searchString) => { }}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white'
  },

  searchContainer: {
    backgroundColor: 'rgb(240,238,239)',
    height: 40,
    flexDirection: 'row',
    margin: 20
  },

  textInput: {
    paddingHorizontal: 20,
    alignSelf: 'stretch',
    marginRight: 30,
    fontSize: 16
  },

  searchIcon: {
    marginTop: 5,
    marginLeft: 5,
    width: 30,
    height: 30,
  },
});

export default SearchScreen;