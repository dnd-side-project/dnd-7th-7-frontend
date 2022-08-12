import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import TrendingTags from '@containers/home/TrendingTags';
import RecommendedRoutes from '@containers/home/RecommendedRoutes';
import RecommendedRoutesNearBy from '@containers/home/RecommendedRoutesNearBy';
import { globals } from '@styles/globals';

const Home = ({ navigation }) => {
  return (
    <View style={style.container}>
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
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: globals.layout.SCREEN_PADDING_HORIZ,
  },
});

export default Home;
