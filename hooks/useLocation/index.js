import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

const useLocation = () => {
  const [result, setResult] = useState('Wating');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setResult('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setResult({ latitude: location.coords.latitude, longitude: location.coords.longitude });
    })();
  }, [result]);

  return result;
};
export default useLocation;
