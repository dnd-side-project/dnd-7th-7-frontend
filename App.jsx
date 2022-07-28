import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import MyPage from './screens/MyPage';
import BookMarks from './screens/BookMarks';
import Recording from './screens/Recording';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mypage" component={MyPage} />
        <Stack.Screen name="Bookmark" component={BookMarks} />
        <Stack.Screen name="Recording" component={Recording} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
