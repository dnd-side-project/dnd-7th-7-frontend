import React from 'react';
import MypageMain from './MypageMain';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckPassword from './CheckPassword';
import Header from '../../components/Header';
import Modify from './Modify';
import Recommend from './Recommend';
import RecordHistory from './RecordHistory';
import Review from './Review';

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
              left="마이페이지"
              right="setting" // left, center, right props Header.jsx 파일에 정리해놨습니다.
              pressRight={() => navigation.navigate('CheckPassword')}
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
              right="close" // left, center, right props Header.jsx 파일에 정리해놨습니다.
              center="회원정보 수정"
              pressRight={() => navigation.goBack()}
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
              right="close" // left, center, right props Header.jsx 파일에 정리해놨습니다.
              center="회원정보 수정"
              pressRight={() => navigation.navigate('MypageMain')}
            />
          ),
        }}
        component={Modify}
        name="Modify"
      />
      <MypageStack.Screen
        options={{
          header: (
            { navigation, route, options }, // 기본 navigation props도 사용 가능합니다
          ) => (
            <Header
              left={'back'}
              center="추천 경로 등록 내역 3"
              right={null} // left, center, right props Header.jsx 파일에 정리해놨습니다.
            />
          ),
        }}
        component={Recommend}
        name="Recommend"
      />
      <MypageStack.Screen
        options={{
          header: (
            { navigation, route, options }, // 기본 navigation props도 사용 가능합니다
          ) => (
            <Header
              left={'back'}
              center="러닝 기록 내역 3"
              right={null} // left, center, right props Header.jsx 파일에 정리해놨습니다.
            />
          ),
        }}
        component={RecordHistory}
        name="RecordHistory"
      />
      <MypageStack.Screen
        options={{
          header: (
            { navigation, route, options }, // 기본 navigation props도 사용 가능합니다
          ) => (
            <Header
              left={'back'}
              center="나의 리뷰"
              right={null} // left, center, right props Header.jsx 파일에 정리해놨습니다.
            />
          ),
        }}
        component={Review}
        name="Review"
      />
    </MypageStack.Navigator>
  );
};

export default MyPage;
