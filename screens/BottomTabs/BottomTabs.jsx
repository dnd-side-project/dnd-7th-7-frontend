import React from 'react';
import Home from '@screens/Home';
import Search from '@screens/Search';
import Recording from '@screens/Recording';
import BookMark from '@screens/BookMark';
import MyPage from '@screens/MyPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Recording" component={Recording} />
      <Tab.Screen name="BookMark" component={BookMark} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
