import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import TrendingTags from '@containers/home/TrendingTags';
import RecommendedRoutes from '@containers/home/RecommendedRoutes';
import RecommendedRoutesNearBy from '@containers/home/RecommendedRoutesNearBy';
import { globals } from '@styles/globals';

const Main = ({ navigation }) => {
  return (
    <View style={style.container}>
      <ScrollView>
        <RecommendedRoutes navigation={navigation} />
        <TrendingTags />
        <RecommendedRoutesNearBy />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: globals.colors.BACKGROUND,
    paddingLeft: globals.layout.SCREEN_PADDING_HORIZ,
  },
});

export default Main;
