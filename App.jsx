import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View, Button } from 'react-native';
import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import useLocation from './hooks/useLoaction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const { getLocation } = useLocation();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location.coords);
    console.log(text);
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Button onPress={() => getLocation()} title="HI" />
    </View>
  );
}
