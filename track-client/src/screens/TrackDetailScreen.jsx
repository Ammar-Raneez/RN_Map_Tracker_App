import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';

import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = () => {
  const { state } = useContext(TrackContext);
  const { params: { _id } } = useRoute();

  const track = state.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        initialCamera={{
          pitch: 0,
          heading: 0,
          altitude: 1000,
          zoom: 18,
          center: {
            latitude: initialCoords.latitude,
            longitude: initialCoords.longitude,
          },
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default TrackDetailScreen;
