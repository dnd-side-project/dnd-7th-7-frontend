import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { globals } from '@styles/globals';
import { Font } from '@components/commons';

const Result = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Font>route running result</Font>
      <Button
        title="go to running review regist"
        onPress={() => navigation.navigate('RouteRunningReview')}
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
