import React from 'react';
import { FlatList, SectionList, Text } from 'react-native';
import RouteBox from '@components/RouteBox';
import * as S from './RecommendedRoutes.style';

const RecommendedRoutes = () => {
  const user = '우영우';
  return (
    <S.Wrapper>
      <S.Message>
        <Text style={{ fontFamily: 'Pretendard-Light' }}>{`${user}님, 주말엔 이런 곳에서
        달려보면 어때요?`}</Text>
      </S.Message>

      <S.Routes>
        {/* 
        1. SectionList를 활용하여 <RouteBox /> 컴포넌트 렌더링 
        2. ScrollView or FlatList를 이용하여 horizon scroll 구현 
        */}
        <RouteBox />
        <RouteBox />
        <RouteBox />
        <RouteBox />
        <RouteBox />
      </S.Routes>
    </S.Wrapper>
  );
};

export default RecommendedRoutes;
