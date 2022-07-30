import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import MyPage from './screens/MyPage';
import BookMarks from './screens/BookMarks';
import Recording from './screens/Recording';
import Onboarding from './screens/Onboarding';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Suspense fallback={<Onboarding />}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="MyPage" component={MyPage} />
          <Tab.Screen name="Bookmark" component={BookMarks} />
          <Tab.Screen name="Recording" component={Recording} />
        </Tab.Navigator>
      </NavigationContainer>
    </Suspense>
  );
}

export default App;
