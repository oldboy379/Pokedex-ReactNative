import { FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'

import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;
  
  const loadMore = () => {
    loadPokemons();
  }

  return (
   <FlatList 
    data={pokemons}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    keyExtractor={(pokemon) => String(pokemon.id)}
    renderItem={({ item }) => <PokemonCard pokemon={ item }/>}
    contentContainerStyle={styles.flatListContentContainer}
    onEndReached={isNext && loadMore}
    onEndReachedThreshold={0.1}
    ListFooterComponent={
      isNext && (
        <ActivityIndicator 
          size="large"
          color="#26B7ED"
          style={styles.spinner}
        />
      )
    }
   />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    paddingBottom: Platform.OS === 'android' ? 5 : 0,
    paddingHorizontal: 5
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  }
})