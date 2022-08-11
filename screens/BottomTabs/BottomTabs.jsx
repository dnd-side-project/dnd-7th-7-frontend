import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import Search from '@screens/Search';
import Recording from '@screens/Recording';
import BookMark from '@screens/BookMark';
import MyPage from '@screens/MyPage';

const Tab = createBottomTabNavigator();
const screenCommonStyle = { backgroundColor: '#ffffff', flex: 1, alignItems: 'center' };

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} sceneContainerStyle={screenCommonStyle}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Recording" component={Recording} />
      <Tab.Screen name="BookMark" component={BookMark} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
