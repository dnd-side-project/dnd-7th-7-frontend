import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '@screens/OnBoarding';
import BottomTabs from '@screens/BottomTabs';
import Header from '@components/Header';
import { getFonts } from './hooks/utils';
import MypageMain from './screens/MyPage/MypageMain';
import { RecoilRoot } from 'recoil';

const Stack = createNativeStackNavigator();

const App = () => {
  let fontsLoaded = getFonts();
  if (!fontsLoaded) return null;

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={'afterOnboarding'}
        >
          <Stack.Screen name="onboarding" component={OnBoarding} />
          <Stack.Screen name="afterOnboarding" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
