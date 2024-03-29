import React, { useCallback, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './Recording.style';
import { globals } from '@styles/globals';
import { Font, Tag } from '@components/commons';
import Start from '@assets/images/recording/start.svg';
import Pause from '@assets/images/recording/pause.svg';
import Stop from '@assets/images/recording/stop.svg';
import RecorderBox from '@components/RecorderBox';
import MapView, { Marker, Polyline } from 'react-native-maps';
import CustomMarker from '../../../../components/commons/CustomMarker';
import * as Location from 'expo-location';
import AlertModal from '@components/commons/modals/AlertModal';

const latitudeDelta = 0.01;
let foregroundSubscription = null;

const Recording = ({ navigation }) => {
  const { height, width } = Dimensions.get('window');
  const [isLogin, setIsLogin] = useState(false);

  const [isReady, setIsReady] = useState(true);
  const [poly, setPoly] = useState([]);
  const [loc, setLoc] = useState(null);

  const [cameraConfig, setCameraConfig] = useState(null);

  const goToHome = () => {
    navigation.navigate('BottomTabs');
  };
  useEffect(() => {
    update();
  }, [isReady]);

  // // 로그인 확인 처리
  // useEffect(() => {
  //   const confirmLogin = navigation.addListener('focus', () => {
  //     if (!isLogin) {
  //       setIsLogin(true);
  //     }
  //   });

  //   return confirmLogin;
  // }, [navigation]);

  const update = useCallback(() => {
    if (!isReady) {
      stopForegroundUpdate();
    }
    startForegroundUpdate();
  }, [isReady]);

  const startForegroundUpdate = async () => {
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      console.log('location tracking denied');
      return;
    }

    foregroundSubscription = await Location.watchPositionAsync(
      {
        // distanceInterval: 10,
        accuracy: 6,
        // 안되면 타임인터벌 10000으로 늘리기
        timeInterval: 2000,
      },
      (location) => {
        setLoc(location);
        setCameraConfig({
          center: {
            latitude: !isReady ? location.coords.latitude - 0.0005 : location.coords.latitude,
            longitude: location.coords.longitude,
          },
          pitch: 1,
          heading: 1,
          zoom: 18,
          altitude: 1,
        });

        if (!isReady) {
          setPoly(
            (prev) =>
              !(
                prev.latitude === location.coords.latitude &&
                prev.longitude === location.coords.longitude
              ) && [
                ...prev,
                {
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                },
              ],
          );
        }
      },
    );
  };

  const stopForegroundUpdate = () => {
    foregroundSubscription?.remove();
  };

  return (
    <View style={styles.container}>
      {loc && cameraConfig ? (
        <MapView
          scrollEnabled={false}
          zoomEnabled={false}
          camera={cameraConfig}
          provider={MapView.PROVIDER_GOOGLE}
          style={{ ...styles.map_view }}
        >
          <Polyline
            coordinates={poly}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={['#21A345']}
            strokeWidth={6}
          />
          <Marker
            coordinate={{
              latitude: loc.coords.latitude,
              longitude: loc.coords.longitude,
            }}
          />

          {/* <CustomMarker distance={1.2} count={3} /> */}
          {/* </Marker> */}
        </MapView>
      ) : null}

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
              시작하기 위해 버튼을 꾹 눌러주세요!
            </Tag>
          </View>
          <Pressable
            style={{ ...styles.start_btn }}
            onPress={() => {
              setIsReady(false);
            }}
          >
            <Start />
          </Pressable>
        </>
      ) : (
        <RecorderBox
          poly={poly}
          stopFunction={stopForegroundUpdate}
          startFunction={startForegroundUpdate}
        />
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
          navigation.navigate('Regist');
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
