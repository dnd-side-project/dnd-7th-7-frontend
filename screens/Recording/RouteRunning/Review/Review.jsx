import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { globals } from '@styles/globals';
import { Font } from '@components/commons';

const Review = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Font>route running review</Font>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: globals.colors.BACKGROUND,
    paddingLeft: globals.layout.SCREEN_PADDING_HORIZ,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Review;
