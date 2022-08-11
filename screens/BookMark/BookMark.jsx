import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as S from './Bookmark.style';

const BookMark = () => {
  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <Text>Search</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
});

export default BookMark;
