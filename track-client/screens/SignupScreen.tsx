import { StyleSheet, View, } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Input, Text } from 'react-native-elements';
import React, { useState } from 'react';

import { RootStackParamList } from '../App';
import Spacer from '../components/Spacer';

type SignupScreenNavigationProp = NavigationProp<RootStackParamList, 'Signup'>;

const SignupScreen = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        value={email}
        onChangeText={setEmail}
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        value={password}
        onChangeText={setPassword}
        label="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Spacer />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
}

export default SignupScreen;

SignupScreen.navigationOptions = () => {
  return {
    header: false,
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});
