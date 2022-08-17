import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

export const getFonts = () => {
  let [fontsLoaded] = useFonts({
    'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.ttf'),
    'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.ttf'),
    'Pretendard-Regular': require('../assets/fonts/Pretendard-Regular.ttf'),
    'Pretendard-Medium': require('../assets/fonts/Pretendard-Medium.ttf'),
    'Pretendard-Light': require('../assets/fonts/Pretendard-Light.ttf'),
  });
  return fontsLoaded;
};

export const getYearList = (reverse = false) => {
  const list = [];
  const currentYear = new Date().getFullYear();
  if (reverse) {
    for (let i = currentYear; i >= 1950; i--) {
      const obj = { label: `${i}`, value: `${i}` };
      list.push(obj);
    }
  } else {
    for (let i = 1950; i <= currentYear; i++) {
      const obj = { label: `${i}`, value: `${i}` };
      list.push(obj);
    }
  }
  return list;
};
