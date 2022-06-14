import { StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

import { RootStackParamList } from '../App';

type TrackCreateScreenNavigationProp = NavigationProp<RootStackParamList, 'TrackCreate'>;

const TrackCreateScreen = () => {
  const navigation = useNavigation<TrackCreateScreenNavigationProp>();

  return (
    <View>
      <Text>TrackCreateScreen</Text>
    </View>
  );
}

export default TrackCreateScreen;

const styles = StyleSheet.create({});
