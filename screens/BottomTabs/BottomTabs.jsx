import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '@components/Header';
import Home from '@screens/Home';
import Search from '@screens/Search';
import Recording from '@screens/Recording';
import BookMark from '@screens/BookMark';
import MyPage from '@screens/MyPage';
import { globals } from '@styles/globals';
import {
  BookMarkIcon,
  BookMarkIconActive,
  HomeIcon,
  HomeIconActive,
  MyPageIcon,
  MyPageIconActive,
  RecordingIcon,
  RecordingIconActive,
  SearchIcon,
  SearchIconActive,
} from '@assets/images/navigator';

const Tab = createBottomTabNavigator();
const screenCommonStyle = {
  backgroundColor: globals.colors.BACKGROUND,
  flex: 1,
  alignItems: 'stretch',
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      sceneContainerStyle={screenCommonStyle}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <HomeIconActive name="Home" /> : <HomeIcon name="Home" />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SearchIconActive name="Search" />
            ) : (
              <SearchIcon stroke={globals.colors.BLACK} name="Search" />
            ),
        }}
      />
      <Tab.Screen
        name="Recording"
        component={Recording}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <RecordingIconActive name="Recording" /> : <RecordingIcon name="Recording" />,
        }}
      />
      <Tab.Screen
        name="BookMark"
        component={BookMark}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <BookMarkIconActive name="BookMark" /> : <BookMarkIcon name="BookMark" />,
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <MyPageIconActive name="MyPage" /> : <MyPageIcon name="MyPage" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
