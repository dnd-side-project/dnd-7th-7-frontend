import React from 'react';
import { ScrollView, Text } from 'react-native';
import TrendingTags from '@containers/home/TrendingTags';
import RecommendedRoutes from '@containers/home/RecommendedRoutes';
import RecommendedRoutesNearBy from '@containers/home/RecommendedRoutesNearBy';

import * as S from './Home.style';

const Home = ({ navigation }) => {
  return (
    <S.Wrapper>
      <ScrollView>
        <RecommendedRoutes />
        <TrendingTags />
        <RecommendedRoutesNearBy />
      </ScrollView>
    </S.Wrapper>
  );
};

export default Home;
