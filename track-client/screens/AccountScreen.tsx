import { StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

import { RootStackParamList } from '../App';

type AccountScreenNavigationProp = NavigationProp<RootStackParamList, 'Account'>;

const AccountScreen = () => {
  const navigation = useNavigation<AccountScreenNavigationProp>();

  return (
    <View>
      <Text>AccountScreen</Text>
    </View>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({});
