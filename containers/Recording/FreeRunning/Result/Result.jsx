import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { globals } from '@styles/globals';
import { styles } from './Result.style';
import {
  tempStartTime,
  tempElapsedTime,
  tempDistance,
  tempCurrentThirdLoc,
  tempCurrentSecLoc,
} from '@components/RecorderBox'; // Recording 스크린에서 params로 전달받기
import { Font, Tag } from '@components/commons';
import ResultSummary from '@components/ResultSummary';

const Result = ({ navigation }) => {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  return (
    <View scrollEnabled={false} style={styles.container}>
      <View style={styles.map_view}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../../../assets/images/runMap3.png')}
        />
      </View>

      <ResultSummary
        routeName={`${month + 1}월 ${day}일`}
        startTime={tempStartTime}
        elapsedTime={tempElapsedTime}
        distance={tempDistance}
        thirdLoc={tempCurrentThirdLoc}
        secondLoc={tempCurrentSecLoc}
      />

      <View style={styles.tag}>
        <Tag
          theme={'angled'}
          onPress={() => navigation.navigate('FreeRunningReview')}
          style={{
            width: '100%',
            marginHorizontal: 16,
            paddingVertical: 16,
          }}
          bgColor={globals.colors.PRIMARY_DARK}
          textColor={globals.colors.WHITE}
          textWeight={600}
        >
          추천 경로로 등록
        </Tag>
      </View>
    </View>
  );
};

export default Result;
