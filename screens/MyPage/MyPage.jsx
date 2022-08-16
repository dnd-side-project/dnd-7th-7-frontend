import React from 'react';
import MypageMain from './MypageMain';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckPassword from './CheckPassword';

const MypageStack = createNativeStackNavigator();

const MyPage = () => {
  return (
    <MypageStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MypageStack.Screen component={MypageMain} name="MypageMain" />
      <MypageStack.Screen component={CheckPassword} name="CheckPassword" />
    </MypageStack.Navigator>
  );
};

export default MyPage;
