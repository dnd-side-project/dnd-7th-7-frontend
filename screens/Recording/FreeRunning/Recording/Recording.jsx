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
import MapView, { Marker } from 'react-native-maps';
import CustomMarker from '../../../../components/commons/CustomMarker';

const Recording = ({ navigation }) => {
  const [isReady, setIsReady] = useState(false);

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
      {isReady ? (
        <>
          <View style={styles.guide}>
            <Font color={globals.colors.WHITE} size={14} weight={400} lineHeight={21}>
              처음 달려보는 경로입니다. 힘차게 달려볼까요? 시작하기 위해 버튼을 3초간 꾹 눌러주세요!
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
