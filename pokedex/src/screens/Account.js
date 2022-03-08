import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import UserData from '../components/Auth/UserData';
import LoginForm from "../components/Auth/LoginForm";

import useAuth from '../hooks/useAuth';

export default function Account() {

  const {auth} = useAuth();

  return (
    <SafeAreaView>
      {auth ? <UserData /> : <LoginForm />}
    </SafeAreaView>
  );
}