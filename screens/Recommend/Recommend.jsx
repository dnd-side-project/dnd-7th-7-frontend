import React, { useState } from 'react';
import * as S from './Recommend.style';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecommendMain from '@containers/Recommend/Main';
import Header from '@components/Header';

const SearchStack = createNativeStackNavigator();

const Recommend = () => {
  return (
    <SearchStack.Navigator initialRouteName={'RecommendMain'}>
      <SearchStack.Screen
        options={{
          header: (
            { navigation, route, options }, // 기본 navigation props도 사용 가능합니다
          ) => <Header navigation={navigation} route={route} left="추천경로" right={'search'} />,
        }}
        component={RecommendMain}
        name="RecommendMain"
      />
    </SearchStack.Navigator>
  );
};

export default Recommend;
