import { StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

import { RootStackParamList } from '../App';

type TrackListScreenNavigationProp = NavigationProp<RootStackParamList, 'TrackList'>;

const TrackListScreen = () => {
  const navigation = useNavigation<TrackListScreenNavigationProp>();

  return (
    <View>
      <Text onPress={() => navigation.navigate('TrackDetail')}>TrackListScreen</Text>
    </View>
  );
}

export default TrackListScreen;

const styles = StyleSheet.create({});
