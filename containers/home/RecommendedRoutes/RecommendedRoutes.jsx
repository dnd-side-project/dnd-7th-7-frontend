import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './RecommendedRoutes.style';
import RouteBox from '@components/RouteBox/RouteBox';
import { Font } from '@components/commons';
import { ROUTES_DATA } from '@hooks/utils';

const RecommendedRoutes = () => {
  const renderRoute = ({ item }) => {
    return (
      <RouteBox
        routeName={item.routeName}
        distance={item.distance}
        secondLocation={item.secondLocation}
        thirdLocation={item.thirdLocation}
        routeImage={item.routeImage}
        recommendedTags={item.recommendedTags}
        secureTags={item.secureTags}
        routeKey={item.routeKey}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.guide}>
        <Font size={24} weight={700} style={{ marginBottom: 4 }}>
          밤에는 밝은 경로로
        </Font>
        <Font size={24} weight={700}>
          달려보는건 어떨까요?
        </Font>
      </View>

      <FlatList
        data={ROUTES_DATA}
        renderItem={renderRoute}
        keyExtractor={(route) => route.routeKey}
        horizontal={true}
      ></FlatList>
    </View>
  );
};

export default RecommendedRoutes;
