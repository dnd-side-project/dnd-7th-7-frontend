import React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import { globals } from '@styles/globals';
import { Font } from '@components/commons';

const Result = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Font>free running result</Font>
      <Button
        title="goto free running review"
        onPress={() => navigation.navigate('FreeRunningReview')}
      />
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

export default Result;
