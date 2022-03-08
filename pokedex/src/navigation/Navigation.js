import React from 'react';
import { Image } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from 'react-native-vector-icons/FontAwesome5';

import PokedexNavigation from './PokedexNavigation';
import Account from '../screens/Account';
import FavoriteNavigation from './FavoriteNavigation';

const Tap = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tap.Navigator initialRouteName='PokedexNavigation'>
      <Tap.Screen 
        name='FavoriteNavigation' 
        component={FavoriteNavigation} 
        options={{ tabBarLabel: 'Favorites', headerShown: false, tabBarIcon: ({color, size}) => (
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
        options={{ tabBarLabel: 'Account', headerShown: false, tabBarIcon: ({ color, size }) => (
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