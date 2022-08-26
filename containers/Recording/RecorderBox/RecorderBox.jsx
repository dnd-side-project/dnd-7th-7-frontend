import React, { useEffect, useState } from 'react';
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
import useStore from '@hooks/useStore';

// recoil 설치 후 전역 변수로 세팅
export const tempStartTime = '12월 31일 토요일 오후 7시 30분';
export const tempElapsedTime = '34분 21초';
export const tempDistance = '5.8km';
export const tempCurrentSecLoc = '성동구';
export const tempCurrentThirdLoc = '송정동';

const RecorderBox = ({ routeName, stopFunction, startFunction, poly }) => {
  const [record, setRecord] = useState(false);

  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);

  const navigation = useNavigation();
  const route = useRoute();

  const [paused, setPaused] = useState(false);
  const [time, setTime] = useState(0);
  const [isRecording, setIsRecording] = useState(true);
  const [isFinish, setIsFinish] = useState(false);

  const { setStore } = useStore();

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isRecording) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  // 나중에 record API로 보내기
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.counter_wrapper}>
          <View style={styles.time_count}>
            <Font size={34} weight={600}>
              {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
              {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
            </Font>
            <Font weight={400} color={globals.colors.GREY_LIGTH_DARK}>
              시간
            </Font>
          </View>
          <View style={styles.distance_count}>
            <Font size={34} weight={600}>
              0.00km
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
            setStore('runningTime', `${time}`);
            setStore('arrayOfPos', JSON.stringify([...poly]));
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
