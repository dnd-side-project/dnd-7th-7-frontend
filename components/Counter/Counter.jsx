import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './Counter.style';
import { globals } from '@styles/globals';
import { Font } from '@components/commons';

const Counter = ({ isPaused, onFinish }) => {
  const time = `00:00`;
  const distance = `0.00`;

  return (
    <View style={styles.container}>
      <View style={styles.time_count}>
        <Font size={34} weight={600}>
          {time}
        </Font>
        <Font weight={400} color={globals.colors.GREY_LIGTH_DARK}>
          시간
        </Font>
      </View>
      <View style={styles.distance_count}>
        <Font size={34} weight={600}>
          {time}km
        </Font>
        <Font weight={400} color={globals.colors.GREY_LIGTH_DARK}>
          거리
        </Font>
      </View>
    </View>
  );
};

export default Counter;
