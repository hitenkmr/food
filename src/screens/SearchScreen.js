
import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import SearchBar from '../components/SearchBar';
import ItemsSection from '../components/ItemsSection';
import yelp from "../api/yelp";

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrormessage] = useState('');
  const [searchApiCalling, setSearchApiCalling] = useState(false);

  const searchApi = async (searchTerm) => {
    setSearchApiCalling(true)
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
      setSearchApiCalling(false)
    } catch (e) {
      console.log(e)
      setErrormessage('Error while fetching')
      setSearchApiCalling(false)
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

  return (
    <View style={styles.container}>
      {
        searchApiCalling ? <ActivityIndicator animating={true} size={30} />

          : (errorMessage == '') 
          
          ? <ScrollView style={styles.scrollView} >
                <SearchBar
                  term={term}
                  onTermChange={newTerm => setTerm(newTerm)}
                  onTermSubmit={ () => searchApi(term)}
                />
                <ItemsSection items={sections[0].items} style={styles.section} headerName={sections[0].name}></ItemsSection>
                <ItemsSection items={sections[1].items} style={styles.section} headerName={sections[1].name}></ItemsSection>
                <ItemsSection items={sections[2].items} style={styles.section} headerName={sections[2].name}></ItemsSection>
              </ScrollView>

              : <Text> {errorMessage} </Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: 'white'
  },

  container: {
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