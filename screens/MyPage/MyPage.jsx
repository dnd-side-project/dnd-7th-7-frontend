import React from 'react';
import MypageMain from './MypageMain';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckPassword from './CheckPassword';
import Header from '../../components/Header';
import Modify from './Modify';

const MypageStack = createNativeStackNavigator();

const MyPage = () => {
  return (
    <MypageStack.Navigator>
      <MypageStack.Screen
        options={{
          header: (
            { navigation, route, options }, // 기본 navigation props도 사용 가능합니다
          ) => (
            <Header
              right={null} // left, center, right props Header.jsx 파일에 정리해놨습니다.
              pressLeft={() => console.log('press left')}
              pressRight={() => navigation.navigate('afterOnboarding')}
            />
          ),
        }}
        component={MypageMain}
        name="MypageMain"
      />
      <MypageStack.Screen
        options={{
          header: (
            { navigation, route, options }, // 기본 navigation props도 사용 가능합니다
          ) => (
            <Header
              left={null}
              right={null} // left, center, right props Header.jsx 파일에 정리해놨습니다.
              pressLeft={() => console.log('press left')}
              pressRight={() => navigation.navigate('afterOnboarding')}
            />
          ),
        }}
        component={CheckPassword}
        name="CheckPassword"
      />
      <MypageStack.Screen
        options={{
          header: (
            { navigation, route, options }, // 기본 navigation props도 사용 가능합니다
          ) => (
            <Header
              left={null}
              right={null} // left, center, right props Header.jsx 파일에 정리해놨습니다.
              pressLeft={() => console.log('press left')}
              pressRight={() => navigation.navigate('afterOnboarding')}
            />
          ),
        }}
        component={Modify}
        name="Modify"
      />
    </MypageStack.Navigator>
  );
};

export default MyPage;
