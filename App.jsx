import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import MyPage from './screens/MyPage';
import BookMarks from './screens/BookMarks';
import Recording from './screens/Recording';
import Onboarding from './screens/Onboarding';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Suspense fallback={<Onboarding />}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MyPage" component={MyPage} />
          <Stack.Screen name="Bookmark" component={BookMarks} />
          <Stack.Screen name="Recording" component={Recording} />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>
  );
}

export default App;
