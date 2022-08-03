import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import Recording from '@screens/Recording';

const Stack = createNativeStackNavigator();

const HomeStacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Recording" component={Recording} />
    </Stack.Navigator>
  );
};

export default HomeStacks;
