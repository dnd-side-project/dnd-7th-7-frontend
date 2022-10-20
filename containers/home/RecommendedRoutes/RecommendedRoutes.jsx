import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, Pressable, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { globals } from '@styles/globals';
import { Entypo } from '@expo/vector-icons';
import { styles } from './RecommendedRoutes.style';
import RouteBox from '@components/RouteBox/RouteBox';
import { Font, Tag } from '@components/commons';
import HomeMainRoute from '@components/HomeMainRoute';
import { indexToRecommendedTitle } from '@hooks/utils';
import { Photo } from '@screens/Search/SearchMain/Search.style';
import { useNavigation } from '@react-navigation/native';
import MarkerIcon from '@assets/images/mini_marker_grey.svg';
import { searchRoutes, getRoute } from '@apis';
import * as Location from 'expo-location';
import { useRecoilState, useRecoilValue } from 'recoil';
import locationAtom, { toAdress } from '@recoil/location';
import useGetAddress from '../../../querys/useGetAddress';

const RecommendedRoutes = () => {
  const navigation = useNavigation();
  const [routes, setRoutes] = useState([]);
  const [currentLoc, setCurrentLoc] = useRecoilState(locationAtom);
  const { data: address, isLoading } = useGetAddress(currentLoc);

  const fetchRoutes = async () => {
    let response = await searchRoutes(currentLoc.latitude, currentLoc.longitude);
    let data = response.data;
    data.forEach(async (el, index) => {
      const route = await getRoute(el.id, false);
      setRoutes((prev) => (index === 0 ? [route] : [...prev, route]));
    });
  };

  useEffect(() => {
    /* 현재 위치 받아오기 */
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setCurrentLoc(null);
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log('current Location: ', currentLoc);

      setCurrentLoc({ latitude: location.coords.latitude, longitude: location.coords.longitude });
    })();
    fetchRoutes();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.current_loc}>
        <MarkerIcon />
        <Font color={globals.colors.GREY_DEF_LIGHT}>
          {isLoading || !address ? '위치를 찾는 중입니다' : address?.results[0].formatted_address}
        </Font>
      </View>
      <View style={styles.guide}>
        <Font size={24} weight={700} style={{ marginBottom: 7 }}>
          밤에는 밝은 경로로
        </Font>
        <Font size={24} weight={700}>
          달려보는건 어떨까요?
        </Font>
      </View>
      <View style={styles.card}>
        <HomeMainRoute />
      </View>
    </View>
  );
};

export default RecommendedRoutes;
