import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity } from 'react-native';
import Button from '@components/Button';
import TrendingTags from '@containers/home/TrendingTags';
import RecommendedRoutes from '@containers/home/RecommendedRoutes';
import RecommendedRoutesNearBy from '@containers/home/RecommendedRoutesNearBy';

import * as S from './Home.style';

const Home = ({ navigation }) => {
  return (
    <S.Wrapper>
      {/* 
      ScrollView는 스크롤에 안 보이는 곳까지 한꺼번에 
      렌더링을 하기 때문에 데이터의 양이 적을때 사용
      -> 나중에 FlatList로 대체 고려 
      */}
      <ScrollView>
        <RecommendedRoutes />
        <TrendingTags />
        <RecommendedRoutesNearBy />
      </ScrollView>
      <Button
        title={'경로 기록하기'}
        onPress={() => {
          navigation.navigate('Recording');
        }}
      />
    </S.Wrapper>
  );
};

export default Home;
