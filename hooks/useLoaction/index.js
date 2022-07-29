import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

const useLocation = () => {
  const [stat, setStat] = useState(null);
  const [loc, setLoc] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('useLocation permission error');
        return;
      }
      setStat(status);

      const location = await Location.getCurrentPositionAsync({});
      setLoc(location);
    })();
  }, []);

  return {
    status: stat,
    location: loc,
  };
};
export default useLocation;
