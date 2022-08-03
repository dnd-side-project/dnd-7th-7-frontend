import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookMark from '@screens/BookMark';
import Recording from '@screens/Recording';

const Stack = createNativeStackNavigator();

const BookMarkStacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BookMark" component={BookMark} />
      <Stack.Screen name="Recording" component={Recording} />
    </Stack.Navigator>
  );
};

export default BookMarkStacks;
