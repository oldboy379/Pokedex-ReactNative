import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

export default function NoLogged() {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>Login require for show</Text>
      <Button title='Go to Login' onPress={() => navigation.navigate('Account')} />
    </View>
  )
}
const styles = StyleSheet.create({
  content: {
    display: 'flex',
    height: 700,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  text: {
    textAlign: 'center',
    marginBottom: 50,
    fontWeight: 'bold'
  }
});