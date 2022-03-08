import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { user, userDetails } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  const [error, setError] = useState('');
  const {login} = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError('');
      const { userName, password } = formValue;

      if(userName !== user.userName || password !== user.password ) {
        setError('User name or Password invalid');
      } else {
        login(userDetails);
      }
    }
  });

  return (
    <View style={styles.content}>
      <Text style={styles.title} >Login</Text>
      <TextInput 
        placeholder="User name"
        style={styles.input}
        autoCapitalize="none"
        autoComplete="username"
        value={formik.values.userName}
        onChangeText={(text) => formik.setFieldValue('userName', text)}
      />
      <TextInput 
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        autoComplete="password"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <View style={styles.button}>
        <Button title="Go!" onPress={formik.handleSubmit}/>
      </View>
      <Text style={styles.error}>{formik.errors.userName}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

function initialValues() {
  return {
    userName: '',
    password: ''
  }
}

function validationSchema() {
  return {
    userName: Yup.string().required('You need a User name'),
    password: Yup.string().required('You need a Password'),
  }
}

const styles =  StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: 300
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 800,
    paddingHorizontal: 10
  },
  button: {
    marginTop: 20,
    width: 100
  }
})