import React from 'react';
import RecommendedRoutes from '../../containers/RecommendedRoutes';
import RecommendedRoutesNearBy from '../../containers/RecommendedRoutesNearBy';
import TrendingTags from '../../containers/TrendingTags';
import * as S from './Home.style';

const Home = () => {
  return (
    <S.Wrapper>
      <RecommendedRoutes />
      <TrendingTags />
      <RecommendedRoutesNearBy />
    </S.Wrapper>
  );
};

export default Home;
