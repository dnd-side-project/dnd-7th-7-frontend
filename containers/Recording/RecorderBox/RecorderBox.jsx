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
import { useNavigation, useRoute } from '@react-navigation/native';
import AlertModal from '@components/commons/modals/AlertModal';

// recoil 설치 후 전역 변수로 세팅
export const tempStartTime = '12월 31일 토요일 오후 7시 30분';
export const tempElapsedTime = '34분 21초';
export const tempDistance = '5.8km';
export const tempCurrentSecLoc = '성동구';
export const tempCurrentThirdLoc = '송정동';

const RecorderBox = ({ routeName }) => {
  const [paused, setPaused] = useState(false);
  const [record, setRecord] = useState({ time: 0, distance: 0 });
  const [isFinish, setIsFinish] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

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
          // 종료 이벤트에 setRecoilState
          onPressYes={() => {
            setIsFinish(false);
            !route.params
              ? navigation.navigate('FreeRunningResult')
              : navigation.navigate('RouteRunningResult', { routeName: routeName });
          }}
          onPressNo={() => setIsFinish(false)}
        />
      </View>
    </Modal>
  );
};

export default React.memo(RecorderBox);
