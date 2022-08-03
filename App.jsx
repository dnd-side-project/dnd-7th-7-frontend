import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Onboarding from '@screens/Onboarding';
import MyPage from '@screens/MyPage';
import HomeStacks from '@screens/navigators/HomeStacks';
import SearchStacks from '@screens/navigators/SearchStacks';
import BookMarkStacks from '@screens/navigators/BookMarkStacks';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Suspense fallback={<Onboarding />}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="HomeStacks" component={HomeStacks} />
          <Tab.Screen name="SearchStacks" component={SearchStacks} />
          <Tab.Screen name="BookMarkStacks" component={BookMarkStacks} />
          <Tab.Screen name="MyPage" component={MyPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </Suspense>
  );
};

export default App;
