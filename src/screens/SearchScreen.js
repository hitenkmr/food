import React from 'react';
import { ScrollView, Image, TextInput, View, Text, StyleSheet } from 'react-native';
import { Feather } from "@expo/vector-icons";

import ItemsSection from '../components/ItemsSection';

const SearchScreen = () => {

  const items = [{ id: 1, title: 'Fish city', starsCount: 20, reviewsCount: 30 },
  { id: 2, title: 'Fish city', starsCount: 20, reviewsCount: 30 },
  { id: 3, title: 'Fish city', starsCount: 20, reviewsCount: 30 },
  { id: 4, title: 'Fish city', starsCount: 20, reviewsCount: 30 },
  { id: 5, title: 'Fish city', starsCount: 20, reviewsCount: 30 },
  { id: 6, title: 'Fish city', starsCount: 20, reviewsCount: 30 },
  { id: 7, title: 'Fish city', starsCount: 20, reviewsCount: 30 },
  { id: 8, title: 'Fish city', starsCount: 20, reviewsCount: 30 },
  { id: 9, title: 'Fish city', starsCount: 20, reviewsCount: 30 }]

  return (
    <ScrollView style={styles.container}>

      <View style={styles.searchContainer}>
        <Feather name='search' style={styles.searchIcon} size={25} />

        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor='rgb(182,180,181)'
          onChangeText={(searchString) => { }}
        />
      </View>

      <View style={{ alignContent: 'space-between' }}>
        <ItemsSection items={items} style={styles.section} headerName='Cost Effective'></ItemsSection>
        <ItemsSection items={items} style={styles.section} headerName='Bit Pricer'></ItemsSection>
        <ItemsSection items={items} style={styles.section} headerName='Big Spender!'></ItemsSection>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
  },

  searchContainer: {
    backgroundColor: 'rgb(240,238,239)',
    height: 40,
    flexDirection: 'row',
    margin: 20
  },

  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 20,
    fontSize: 16,
    flex: 1
  },

  searchIcon: {
    marginTop: 5,
    marginLeft: 5,
    width: 25,
    height: 25,
  },

  section: {
    marginTop: 10
  }
});

export default SearchScreen;