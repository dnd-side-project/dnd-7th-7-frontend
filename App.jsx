import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Regist from '@screens/Regist';
import BottomTabs from '@screens/BottomTabs';
import Header from '@components/Header';
import { getFonts } from './hooks/utils';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

const Stack = createNativeStackNavigator();

const App = () => {
  let fontsLoaded = getFonts();
  if (!fontsLoaded) return null;

  return (
    <QueryClientProvider client={new QueryClient()}>
      <RecoilRoot>
        <React.Suspense
          fallback={
            <View>
              <Text>LOADING...</Text>
            </View>
          }
        >
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Regist'}>
              <Stack.Screen name="Regist" component={Regist} />
              <Stack.Screen name="BottomTabs" component={BottomTabs} />
            </Stack.Navigator>
          </NavigationContainer>
        </React.Suspense>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
