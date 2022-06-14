import { StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

import { RootStackParamList } from '../App';

type SigninScreenNavigationProp = NavigationProp<RootStackParamList, 'Signin'>;

const SigninScreen = () => {
  const navigation = useNavigation<SigninScreenNavigationProp>();

  return (
    <View>
      <Text>SigninScreen</Text>
    </View>
  );
}

export default SigninScreen;

const styles = StyleSheet.create({});
