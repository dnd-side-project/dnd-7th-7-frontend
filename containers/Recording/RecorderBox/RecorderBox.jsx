import React, { useEffect, useMemo, useState } from 'react';
import { styles } from './RecorderBox.style';
import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { globals } from '@styles/globals.js';
import { Font } from '@components/commons';
import Pause from '@assets/images/recording/pause.svg';
import Start from '@assets/images/recording/start.svg';
import Stop from '@assets/images/recording/stop.svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import AlertModal from '@components/commons/modals/AlertModal';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { addRecord } from '@recoil/route';
import useCount from '@hooks/useCount';
import { getDistance } from '@hooks/utils';

// recoil 설치 후 전역 변수로 세팅
export const tempStartTime = '12월 31일 토요일 오후 7시 30분';
export const tempElapsedTime = '34분 21초';
export const tempDistance = '5.8km';
export const tempCurrentSecLoc = '성동구';
export const tempCurrentThirdLoc = '송정동';

const RecorderBox = ({ routeName, stopFunction, startFunction, poly }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const [isRecording, setIsRecording] = useState(true);
  const [isFinish, setIsFinish] = useState(false);
  const { sec, min, hour } = useCount(isRecording);

  const setRunningTime = useSetRecoilState(addRecord('runningTime'));
  const setArrayOfPos = useSetRecoilState(addRecord('arrayOfPos'));
  const setDistance = useSetRecoilState(addRecord('distance'));

  const distance = useMemo(() => getDistance(poly), [poly]);

  useEffect(() => {
    console.log('poly: ', poly);
  }, [poly]);

  // 나중에 record API로 보내기
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.counter_wrapper}>
          <View style={styles.time_count}>
            <Font size={34} weight={600}>
              {hour + ':' + min + ':' + sec}
            </Font>
            <Font weight={400} color={globals.colors.GREY_LIGTH_DARK}>
              시간
            </Font>
          </View>
          <View style={styles.distance_count}>
            <Font size={34} weight={600}>
              {distance}km
            </Font>
            <Font weight={400} color={globals.colors.GREY_LIGTH_DARK}>
              거리
            </Font>
          </View>
        </View>

        <View style={styles.btn_group}>
          {isRecording ? (
            <Pressable
              onPress={() => {
                setIsRecording(false);
                stopFunction();
              }}
            >
              <Pause />
            </Pressable>
          ) : (
            <View style={styles.paused}>
              <Pressable
                onPress={() => {
                  setIsRecording(true);
                  startFunction();
                }}
              >
                <Start />
              </Pressable>
              <Pressable
                onPress={() => {
                  setIsFinish(true);
                }}
              >
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
            setRunningTime(`${hour}:${min}:${sec}`);
            setArrayOfPos([...poly]);
            setDistance(`${distance}`);
            setIsFinish(false);
            !route.params
              ? navigation.navigate('FreeRunningResult')
              : navigation.navigate('RouteRunningResult', { routeName: routeName });
          }}
          onPressNo={() => setIsFinish(false)}
        />
      </View>
    </View>
  );
};

export default React.memo(RecorderBox);
