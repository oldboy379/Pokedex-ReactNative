import React from 'react';
import { Image } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from 'react-native-vector-icons/FontAwesome5';

import PokedexNavigation from './PokedexNavigation';
import Favorite from '../screens/Favorite';
import Account from '../screens/Account';
import Pokedex from '../screens/Pokedex';

const Tap = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tap.Navigator>
      <Tap.Screen 
        name='Favorite' 
        component={Favorite} 
        options={{ tabBarLabel: 'Favoritos', headerShown: false, tabBarIcon: ({color, size}) => (
            <Icon name='heart' color={color} size={size} />
          )
        }} 
      />
      <Tap.Screen 
        name='PokedexNavigation' 
        component={PokedexNavigation} 
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: () => renderPokeball()
        }}
      />
      <Tap.Screen 
        name='Account' 
        component={Account} 
        options={{ tabBarLabel: 'Mi cuenta', headerShown: false, tabBarIcon: ({ color, size }) => (
          <Icon name='user' color={color} size={size} />
        )
      }}
      />
    </Tap.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image 
      source={require('../assets/pokeball.png')} 
      style={{ width: 65, height:65, top: -17 }}
    />
  );
}