import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import OnBoarding from '@screens/OnBoarding';
import BottomTabs from '@screens/BottomTabs';
import { getFonts } from './hooks/utils';

const Stack = createNativeStackNavigator();

const App = () => {
  getFonts();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'onboarding'}>
        <Stack.Screen name="onboarding" component={OnBoarding} />
        <Stack.Screen name="afterOnboarding" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
