import React, { useState } from 'react';
import { styles } from './RecorderBox.style';
import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { globals } from '@styles/globals.js';
import { Font } from '@components/commons';
import Pause from '@assets/images/recording/pause.svg';
import Start from '@assets/images/recording/start.svg';
import Stop from '@assets/images/recording/stop.svg';
import Counter from '@components/Counter';
import { useNavigation } from '@react-navigation/native';
import AlertModal from '@components/commons/modals/AlertModal';

const RecorderBox = () => {
  const [paused, setPaused] = useState(false);
  const [record, setRecord] = useState({ time: 0, distance: 0 });
  const [isFinish, setIsFinish] = useState(false);
  const navigation = useNavigation();

  // 나중에 record API로 보내기
  return (
    <Modal style={styles.container} isVisible={true} backdropOpacity={0} coverScreen={false}>
      <View style={styles.wrapper}>
        <Counter isPaused={paused} onFinish={setRecord} />
        <View style={styles.btn_group}>
          {!paused ? (
            <Pressable onPress={() => setPaused(!paused)}>
              <Pause />
            </Pressable>
          ) : (
            <View style={styles.paused}>
              <Pressable onPress={() => setPaused(!paused)}>
                <Start />
              </Pressable>
              <Pressable onPress={() => setIsFinish(true)}>
                <Stop />
              </Pressable>
            </View>
          )}
        </View>
        <AlertModal
          isVisible={isFinish}
          clickOutside={setIsFinish}
          title={'경로 기록을 종료할까요?'}
          onPressYes={() => {
            setIsFinish(false);
            navigation.navigate('FreeRunningResult');
          }}
          onPressNo={() => setIsFinish(false)}
        />
      </View>
    </Modal>
  );
};

export default React.memo(RecorderBox);
