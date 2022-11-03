import React, { useState } from 'react';
import { styles } from './ResultSummary.style';
import { Pressable, Text, View } from 'react-native';
import { globals } from '@styles/globals.js';
import { Font } from '@components/commons';
import Marker from '@assets/images/mini_marker.svg';
import Calendar from '@assets/images/result/calendar.svg';
import Clock from '@assets/images/result/clock.svg';
import Distance from '@assets/images/navigator/SearchIcon.svg';
import Arrow from '@assets/images/to_right_arrow.svg';

const ResultSummary = ({
  routeName,
  secondLoc,
  secondLoc_diff,
  thirdLoc,
  thirdLoc_diff,
  startTime,
  elapsedTime,
  distance,
  ...props
}) => {
  return (
    <View style={[styles.container, props.style]}>
      {routeName && (
        <View style={styles.title}>
          <Font size={24} weight={600}>
            {routeName}
          </Font>
          <View style={{ flexDirection: 'row' }}>
            <Font size={24} weight={600} color={globals.colors.PRIMARY_DARK}>
              러닝을 완료
            </Font>
            <Font size={24} weight={600}>
              했어요!
            </Font>
          </View>
        </View>
      )}

      <View style={styles.location_diff}>
        <View style={styles.location}>
          <Marker />
          <Font size={16}>
            {secondLoc} {thirdLoc}
          </Font>
        </View>
        {secondLoc_diff && (
          <>
            <Arrow style={{ marginHorizontal: 4 }} />
            <View style={styles.location}>
              <Marker />
              <Font size={16}>
                {secondLoc_diff} {thirdLoc_diff}
              </Font>
            </View>
          </>
        )}
      </View>

      <View style={styles.startTime}>
        <Calendar style={{ marginRight: 5 }} />
        <Font>{startTime} 시작</Font>
      </View>

      <View style={styles.elapsedTime}>
        <Clock style={{ marginRight: 5 }} />
        <Font>{elapsedTime}</Font>
      </View>

      <View style={styles.distance}>
        <Distance stroke={'black'} width={20} height={20} style={{ marginRight: 5 }} />
        <Font>{distance}</Font>
      </View>
    </View>
  );
};

export default ResultSummary;
