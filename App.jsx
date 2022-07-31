import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import MyPage from './screens/MyPage';
import BookMarks from './screens/BookMarks';
import Onboarding from './screens/Onboarding';
import Search from './screens/Search';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Suspense fallback={<Onboarding />}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Bookmark" component={BookMarks} />
          <Tab.Screen name="MyPage" component={MyPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </Suspense>
  );
};

export default App;
