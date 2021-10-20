
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import SearchBar from '../components/SearchBar';
import ItemsSection from '../components/ItemsSection';
import yelp from "../api/yelp";
import useSearchResults from '../hooks/useSearchResults';

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [loading, results, errorMessage, searchApi] = useSearchResults();

  console.log(loading)
  console.log(loading, errorMessage)
  console.log(results)

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price == price;
    });
  };

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {
        loading ? <ActivityIndicator animating={true} size={30} /> : errorMessage ? <View style={styles.errorContainer}>
          <Text style={{ textAlign: 'center', flex:1, backgroundColor:'red' }}> {errorMessage} </Text>
        </View> : <ScrollView style={styles.scrollView} >

          <ItemsSection items={filterResultsByPrice('$')} style={styles.section} headerName='Cost Effective'></ItemsSection>
          <ItemsSection items={filterResultsByPrice('$$')} style={styles.section} headerName='Bit Pricer'></ItemsSection>
          <ItemsSection items={filterResultsByPrice('$$$')} style={styles.section} headerName='Big Spender'></ItemsSection>
        </ScrollView>
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
  },

  errorContainer: {
    height:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'white'
  }
});

export default SearchScreen;