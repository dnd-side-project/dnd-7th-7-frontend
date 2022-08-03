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
