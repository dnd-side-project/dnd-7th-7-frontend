import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '@screens/OnBoarding';
import BottomTabs from '@screens/BottomTabs';
import Header from '@components/Header';
import { useFonts } from 'expo-font';
import { getFonts } from './hooks/utils';

const Stack = createNativeStackNavigator();

const App = () => {
  let fontsLoaded = getFonts();
  if (!fontsLoaded) return null;

  const exampleOnSearch = (inputLocation) => {
    console.log('location set to: ', inputLocation);
  };
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
              onSearch={exampleOnSearch}
              pressLeft={() => console.log('press left')}
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
