import React, { useState } from 'react';
import * as S from './Search.style';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchMain from './SearchMain';
import Header from '../../components/Header';

const SearchStack = createNativeStackNavigator();

const Search = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        options={{
          header: (
            { navigation, route, options }, // 기본 navigation props도 사용 가능합니다
          ) => <Header navigation={navigation} route={route} left={'logo'} right={'search'} />,
        }}
        component={SearchMain}
        name="SearchMain"
      ></SearchStack.Screen>
    </SearchStack.Navigator>
  );
};

export default Search;
