import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import { size } from 'lodash';
import { getPokemonsFavoriteApi } from '../../api/favorite';

export default function UserData() {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonsFavoriteApi();
          setTotal(size(response));
        } catch (error) {
          setTotal(0);
        }
      })()
    }, [])
  )

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido, </Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title='Nombre' text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title='Username' text={auth.userName} />
        <ItemMenu title='Email' text={auth.email} />
        <ItemMenu title='Favorites' text={`${total} Pokemons`} />
      </View>
      <Button title='Logout' onPress={logout} style={styles.btnLogout} />
    </View>
  );
}

function ItemMenu(props) {
  const {title, text} = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text style={styles.itemMenuItem}>{text}</Text>
    </View>
  );
}

const styles =  StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
  },
  itemMenuTitle: {
    paddingRight: 10,
    width: 90,
    fontWeight: 'bold'
  },
  itemMenuItem: {
    marginLeft: 50,
  },
  btnLogout: {
    paddingTop: 20,
  },
})