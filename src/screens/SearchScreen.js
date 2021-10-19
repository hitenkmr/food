
import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import SearchBar from '../components/SearchBar';
import ItemsSection from '../components/ItemsSection';
import yelp from "../api/yelp";

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrormessage] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (e) {
      console.log(e)
      setErrormessage('Error while fetching')
    }
  };


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
    <View style={styles.errorContainer}>
      {
        (errorMessage == '') ?
          <ScrollView style={styles.container} >
            <SearchBar
              term={term}
              onTermChange={newTerm => setTerm(newTerm)}
              onTermSubmit={searchApi}
            />
            <ItemsSection items={filteredSections[0].items} style={styles.section} headerName={filteredSections[0].name}></ItemsSection>
            <ItemsSection items={filteredSections[1].items} style={styles.section} headerName={filteredSections[1].name}></ItemsSection>
            <ItemsSection items={filteredSections[2].items} style={styles.section} headerName={filteredSections[2].name}></ItemsSection>
          </ScrollView>
          : <Text> {errorMessage} </Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({

  errorContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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