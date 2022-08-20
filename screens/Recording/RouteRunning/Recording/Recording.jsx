import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './Recording.style';
import { globals } from '@styles/globals';
import { Font } from '@components/commons';
import Start from '@assets/images/recording/start.svg';
import Pause from '@assets/images/recording/pause.svg';
import Stop from '@assets/images/recording/stop.svg';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import RecorderBox from '@containers/Recording/RecorderBox';

const Recording = ({ navigation }) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.map_view}></View>
      {isReady ? (
        <>
          <View style={styles.guide}>
            <Font color={globals.colors.WHITE} size={14} weight={400} lineHeight={21}>
              다녀온 적이 있는 경로입니다. 또 한 번 달려볼까요? 시작하기 위해 버튼을 3초간 꾹
              눌러주세요!
            </Font>
          </View>
          <Pressable style={styles.start_btn}>
            <Start />
          </Pressable>
        </>
      ) : (
        <RecorderBox />
      )}
    </View>
  );
};

export default Recording;
