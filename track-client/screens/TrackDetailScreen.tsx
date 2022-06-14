import { StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

import { RootStackParamList } from '../App';

type TrackDetailScreenNavigationProp = NavigationProp<RootStackParamList, 'TrackDetail'>;

const TrackDetailScreen = () => {
  const navigation = useNavigation<TrackDetailScreenNavigationProp>();

  return (
    <View>
      <Text>TrackDetailScreen</Text>
    </View>
  );
}

export default TrackDetailScreen;

const styles = StyleSheet.create({});
