import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import TrendingTags from '@containers/home/TrendingTags';
import RecommendedRoutes from '@containers/home/RecommendedRoutes';
import RecommendedRoutesNearBy from '@containers/home/RecommendedRoutesNearBy';
import { globals } from '@styles/globals';

const Main = ({ navigation }) => {
  return (
    <View style={style.container}>
      <RecommendedRoutes navigation={navigation} />
      <TrendingTags />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globals.colors.BACKGROUND,
  },
});

export default Main;
