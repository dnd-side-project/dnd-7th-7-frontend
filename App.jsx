import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '@screens/OnBoarding';
import BottomTabs from '@screens/BottomTabs';

const Stack = createNativeStackNavigator();

const App = () => {
  // login 데이터를 받아와 app launch가 될 때
  // 로그인 여부에 따라 초기 스크린 경로를 설정
  const [onBoarded, setOnBoarded] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={onBoarded ? 'onboarding' : 'afterOnboarding'}>
        <Stack.Screen name="onboarding" component={OnBoarding} />
        <Stack.Screen name="afterOnboarding" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
