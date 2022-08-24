import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './Recording.style';
import { globals } from '@styles/globals';
import { Font, Tag } from '@components/commons';
import Start from '@assets/images/recording/start.svg';
import Pause from '@assets/images/recording/pause.svg';
import Stop from '@assets/images/recording/stop.svg';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import RecorderBox from '@containers/Recording/RecorderBox';
import AlertModal from '@components/commons/modals/AlertModal';

// 맵에서 보여주는건 Recording에서 API로 데이터 받아와서 보여주고
// 기록 관련해서는 RecorderBox에서 recoil로 저장하여 result 및 review 등록 페이지로 넘기기
const Recording = ({ navigation, route }) => {
  const [isReady, setIsReady] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const goToHome = () => {
    navigation.navigate('Home');
  };

  // // 로그인 확인 처리
  // useEffect(() => {
  //   const confirmLogin = navigation.addListener('focus', () => {
  //     if (!isLogin) {
  //       setIsLogin(true);
  //     }
  //   });

  //   return confirmLogin;
  // }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.map_view}>
        <Font>MAP</Font>
      </View>

      {/* 스타트버튼 눌렀을 떄 */}
      {isReady ? (
        <>
          <View style={styles.guide_wrapper}>
            <Tag
              theme={'angled'}
              style={styles.guide}
              bgColor={'rgba(0,0,0,0.5)'}
              textColor={globals.colors.WHITE}
              textWeight={400}
            >
              다녀온 적이 있는 경로입니다. 또 한 번 달려볼까요?{'\n'}시작하기 위해 버튼을 3초간 꾹
              눌러주세요!
            </Tag>
          </View>
          <Pressable style={styles.start_btn} onPress={() => setIsReady(false)}>
            <Start />
          </Pressable>
        </>
      ) : (
        <RecorderBox routeName={route.params.title} />
      )}
      <AlertModal
        isVisible={isLogin}
        clickOutside={() => {
          setIsLogin(false);
          goToHome();
        }}
        title={'로그인 후 이용하시겠어요?'}
        onPressYes={() => {
          setIsLogin(false);
          navigation.navigate('onboarding');
        }}
        onPressNo={() => {
          setIsLogin(false);
          goToHome();
        }}
      />
    </View>
  );
};

export default Recording;
