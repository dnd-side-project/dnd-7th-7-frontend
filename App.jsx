import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '@screens/Onboarding';
import BottomTabs from '@screens/BottomTabs';
import Header from '@components/Header';
import { useFonts } from 'expo-font';
import { getFonts } from './hooks/utils';
import MypageMain from './screens/MyPage/MypageMain';

const Stack = createNativeStackNavigator();

const App = () => {
  let fontsLoaded = getFonts();
  if (!fontsLoaded) return null;

  const exampleOnSearch = (inputLocation) => {
    console.log('location set to: ', inputLocation);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'onboarding'}>
        <Stack.Screen name="onboarding" component={OnBoarding} />
        <Stack.Screen name="afterOnboarding" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
