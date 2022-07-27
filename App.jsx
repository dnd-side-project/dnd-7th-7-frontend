import React, { useState, useEffect, useCallback } from 'react';
import MapView, { Polyline, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
let foregroundSubscription = null;

export default function App() {
  const [location, setLocation] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const [poly, setPoly] = useState([]);
  const [initPoly, setInitPoly] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrMsg('Permission to access location was denied');
        return;
      }

      const value = await AsyncStorage.getItem('@poly');
      setInitPoly(JSON.parse(value));
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  // 일시정지 기능
  useEffect(() => {
    let count = 0;

    if (foregroundSubscription !== null) {
      const idInterval = setInterval(() => {
        console.log(count);
        count += 1;
      }, 1000);

      const id = setTimeout(() => {
        console.log('운동 그만 하시겠어요?');
        clearInterval(idInterval);
      }, 10000);
      return () => {
        clearTimeout(id);
        clearInterval(idInterval);
      };
    } else {
      console.log('구독하세요!');
      console.log(foregroundSubscription);
    }
  }, [location]);

  const update = useCallback(() => {
    startForegroundUpdate();
  }, [poly, location]);

  const startForegroundUpdate = async () => {
    // Check if foreground permission is granted
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      console.log('location tracking denied');
      return;
    }

    // Make sure that foreground location tracking is not running
    foregroundSubscription?.remove();

    // Start watching position in real-time
    foregroundSubscription = await Location.watchPositionAsync(
      {
        // For better logs, we set the accuracy to the most sensitive option
        distanceInterval: 10,
        accuracy: 6,
        // 안되면 타임인터벌 10000으로 늘리기
        timeInterval: 1000,
      },
      (location) => {
        setLocation(location);
        setPoly((prev) => [
          ...prev,
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
        ]);
      },
    );
  };

  const stopForegroundUpdate = async () => {
    foregroundSubscription = null;
    try {
      await AsyncStorage.setItem('@poly', JSON.stringify(poly));
      console.log(poly);
    } catch (e) {
      console.log(e);
    }
    setLocation(null);
  };
  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          minZoomLevel={18}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Polyline
            coordinates={poly}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              '#7F0000',
              '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000',
            ]}
            strokeWidth={6}
          />
          {initPoly ? (
            <Polyline
              coordinates={initPoly}
              strokeColor="#000"
              strokeColors={['#7F0000', '#00000000', '#B24112', '#E5845C', '#238C23', '#7F0000']}
              strokeWidth={6}
            />
          ) : null}
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      ) : (
        <Text>Loading...</Text>
      )}
      <Button onPress={update} title="Start in foreground" />
      <Button onPress={stopForegroundUpdate} title="Stop in foreground" />
      {/* <Button onPress={pause} title="Pause tracking" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
});
