import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '@screens/OnBoarding';
import BottomTabs from '@screens/BottomTabs';
import Header from '@components/Header';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { getFonts } from './hooks/utils';

const Stack = createNativeStackNavigator();

const App = () => {
  let fontsLoaded = getFonts();
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'onboarding'}
        screenOptions={{
          header: ({ navigation, route, options }) => (
            <Header
              navigation={navigation}
              route={route}
              options={options}
              searchable={true}
              pressRight={() => navigation.navigate('afterOnboarding')}
            />
          ),
        }}
      >
        <Stack.Screen name="onboarding" component={OnBoarding} />
        <Stack.Screen name="afterOnboarding" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
