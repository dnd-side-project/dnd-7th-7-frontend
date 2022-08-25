import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './Recording.style';
import { globals } from '@styles/globals';
import { Font, Tag } from '@components/commons';
import Start from '@assets/images/recording/start.svg';
import Pause from '@assets/images/recording/pause.svg';
import Stop from '@assets/images/recording/stop.svg';
import RecorderBox from '@containers/Recording/RecorderBox';
import MapView, { Marker } from 'react-native-maps';
import CustomMarker from '../../../../components/commons/CustomMarker';
import AlertModal from '@components/commons/modals/AlertModal';

const Recording = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isReady, setIsReady] = useState(true);

  const goToHome = () => {
    navigation.navigate('Home');
  };

  // 로그인 확인 처리
  useEffect(() => {
    const confirmLogin = navigation.addListener('focus', () => {
      if (!isLogin) {
        setIsLogin(true);
      }
    });

    return confirmLogin;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MapView
        scrollEnabled
        zoomEnabled
        initialRegion={{
          latitude: 37.2784,
          longitude: 127.145,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        minZoomLevel={15}
        style={styles.map_view}
      >
        <Marker coordinate={{ latitude: 37.2784, longitude: 127.145 }}>
          <CustomMarker distance={1.2} count={3} />
        </Marker>
      </MapView>

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
              처음 달려보는 경로입니다. 힘차게 달려볼까요?{'\n'}
              시작하기 위해 버튼을 3초간 꾹 눌러주세요!
            </Tag>
          </View>
          <Pressable style={styles.start_btn} onPress={() => setIsReady(false)}>
            <Start />
          </Pressable>
        </>
      ) : (
        <RecorderBox />
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
