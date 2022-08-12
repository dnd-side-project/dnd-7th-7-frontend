import React from 'react';
import { FlatList, SectionList, Text } from 'react-native';
import { Font, RouteBox } from '@components';

import * as S from './RecommendedRoutes.style';

const RecommendedRoutes = () => {
  const user = '우영우';
  return (
    <S.Wrapper>
      <Font size={24} weight={700}>
        밤에는 밝은 경로로 달려보는건 어떨까요?
      </Font>
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
