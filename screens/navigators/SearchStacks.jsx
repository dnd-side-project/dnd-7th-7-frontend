import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '@screens/Search';
import Recording from '@screens/Recording';

const Stack = createNativeStackNavigator();

const SearchStacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Recording" component={Recording} />
    </Stack.Navigator>
  );
};

export default SearchStacks;
