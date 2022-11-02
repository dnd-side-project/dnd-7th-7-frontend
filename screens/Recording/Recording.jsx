import React, { useRef, useState } from 'react';
import Header from '@components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteRunning from './RouteRunning';
import FreeRunning from './FreeRunning';

const Stack = createNativeStackNavigator();

const Recording = () => {
  return (
    <Stack.Navigator initialRouteName="FreeRunning" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="FreeRunning"
        component={FreeRunning}
        listeners={({ navigation, route }) => ({
          blur: (e) => {},
        })}
      />
      <Stack.Screen name="RouteRunning" component={RouteRunning} />
    </Stack.Navigator>
  );
};

export default Recording;
