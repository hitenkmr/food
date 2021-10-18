
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ItemsSection from '../components/ItemsSection';

const SearchScreen = () => {

  const [term, setTerm] = useState('');

  var commonItem = { title: 'Fish city', starsCount: 20, reviewsCount: 30 };

  var sections = [{
    name: 'Cost Effective',
    items: [commonItem, commonItem, commonItem, commonItem, commonItem, commonItem]
  },
  {
    name: 'Bit Pricer',
    items: [commonItem, commonItem, commonItem, commonItem, commonItem, commonItem]
  },
  {
    name: 'Big Spender!',
    items: [commonItem, commonItem, commonItem, commonItem, commonItem, commonItem]
  }];

  var filteredSections = sections;

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('term was submitted')}
      />
      <ItemsSection items={filteredSections[0].items} style={styles.section} headerName={filteredSections[0].name}></ItemsSection>
      <ItemsSection items={filteredSections[1].items} style={styles.section} headerName={filteredSections[1].name}></ItemsSection>
      <ItemsSection items={filteredSections[2].items} style={styles.section} headerName={filteredSections[2].name}></ItemsSection>
    </View>
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
    paddingLeft: 10,
    paddingRight: 20,
    fontSize: 14,
    flex: 1
  },

  searchIcon: {
    marginLeft: 5,
    fontSize: 35,
    alignSelf: 'center'
  },

  section: {
    marginTop: 10
  }
});

export default SearchScreen;