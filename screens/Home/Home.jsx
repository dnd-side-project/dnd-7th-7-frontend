import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import RecommendedRoutes from '../../containers/RecommendedRoutes';
import RecommendedRoutesNearBy from '../../containers/RecommendedRoutesNearBy';
import TrendingTags from '../../containers/TrendingTags';
import * as S from './Home.style';

const Home = () => {
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
