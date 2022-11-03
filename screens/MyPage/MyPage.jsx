import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '@components/Header';
import MyPageMain from '@containers/MyPage/MyPageMain';
import CheckPassword from '@containers/MyPage/CheckPassword';
import Modify from '@containers/MyPage/Modify';
import MyPageRecommend from '@containers/MyPage/MyPageRecommend';
import RecordHistory from '@containers/MyPage/RecordHistory';
import MyPageReview from '@containers/MyPage/MyPageReview';

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
        component={MyPageMain}
        name="MyPageMain"
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
              pressRight={() => navigation.navigate('MyPageMain')}
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
              pressLeft={() => navigation.goBack()}
            />
          ),
        }}
        component={MyPageRecommend}
        name="MyPageRecommend"
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
              pressLeft={() => navigation.goBack()}
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
              pressLeft={() => navigation.goBack()}
            />
          ),
        }}
        component={MyPageReview}
        name="MyPageReview"
      />
    </MypageStack.Navigator>
  );
};

export default MyPage;
