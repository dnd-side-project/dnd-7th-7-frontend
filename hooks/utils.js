import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export const getFonts = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.ttf'),
          'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.ttf'),
          'Pretendard-Regular': require('../assets/fonts/Pretendard-Regular.ttf'),
          'Pretendard-Medium': require('../assets/fonts/Pretendard-Medium.ttf'),
          'Pretendard-Light': require('../assets/fonts/Pretendard-Light.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync();
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  return isReady;
};
