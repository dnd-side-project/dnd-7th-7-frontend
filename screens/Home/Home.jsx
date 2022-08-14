import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import TrendingTags from '@containers/home/TrendingTags';
import RecommendedRoutes from '@containers/home/RecommendedRoutes';
import RecommendedRoutesNearBy from '@containers/home/RecommendedRoutesNearBy';
import { globals } from '@styles/globals';

const Home = ({ navigation }) => {
  return (
    <View style={style.container}>
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
    paddingLeft: globals.layout.SCREEN_PADDING_HORIZ,
  },
});

export default Home;
