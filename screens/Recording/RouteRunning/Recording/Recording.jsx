import React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import { globals } from '@styles/globals';
import { Font } from '@components/commons';

const Recording = ({ navigation, route }) => {
  return (
    <View style={style.container}>
      <Font>{route.params.title} running Recording</Font>
      <Button
        title="goto route running Result"
        onPress={() => navigation.navigate('RouteRunningResult')}
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

export default Recording;
