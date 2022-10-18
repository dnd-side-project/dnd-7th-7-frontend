import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, Pressable, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { globals } from '@styles/globals';
import { Entypo } from '@expo/vector-icons';
import { styles } from './RecommendedRoutes.style';
import RouteBox from '@components/RouteBox/RouteBox';
import { Font, Tag } from '@components/commons';
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
          {isLoading ? 'loading...' : address.results[0].formatted_address}
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
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={routes}
        style={{ height: 320 }}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <Photo>
            <ImageBackground
              style={{ flex: 1 }}
              imageStyle={{ borderRadius: 10 }}
              source={{ uri: item.routeImage }}
            >
              <View
                style={{
                  paddingVertical: 20,
                  paddingHorizontal: 15,
                  height: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <Font size={18} weight={600}>
                  {item.routeName}
                </Font>
                <View
                  style={{
                    height: 120,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    marginHorizontal: -15,
                    marginVertical: -20,
                    paddingVertical: 20,
                    paddingHorizontal: 15,
                  }}
                >
                  <Pressable
                    onPress={() =>
                      navigation.push('RouteDetail', {
                        key: item.routeKey,
                        title: item.routeName,
                        thumbnail: item.routeImage,
                      })
                    }
                  >
                    <View
                      style={{
                        width: 172,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: 10,
                      }}
                    >
                      <Font size={14} weight={400} color="#FFFFFF" lineHeight={14 * 1.5}>
                        {`${item.review.slice(0, 32)}...`}
                      </Font>
                      <TouchableOpacity>
                        <Entypo
                          name="chevron-thin-right"
                          size={15}
                          color="white"
                          style={{ position: 'relative', top: 3, right: -20 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </Pressable>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                    }}
                  >
                    {item.secureTags
                      .filter((tag, index) => index < 1)
                      .map((tagId, index) => (
                        <Tag
                          theme="angled"
                          style={{
                            paddingHorizontal: 5,
                            paddingVertical: 6,
                          }}
                          key={index}
                          bgColor="#C9EFD2"
                          textSize={14}
                          style={{ marginRight: 5 }}
                        >
                          {indexToRecommendedTitle(`${tagId}`)}
                        </Tag>
                      ))}
                    <Tag
                      theme="angled"
                      style={{ paddingHorizontal: 12, paddingVertical: 6 }}
                      bgColor="#C9EFD2"
                      textSize={14}
                      style={{ marginRight: 5 }}
                    >
                      {`+ ${item.recommendedTags.length + item.secureTags.length}`}
                    </Tag>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </Photo>
        )}
        contentContainerStyle={{
          paddingLeft: 16,
          paddingBottom: 25,
          borderBottomColor: globals.colors.BACKGROUND,
          borderBottomWidth: 10,
        }}
      />
    </View>
  );
};

export default RecommendedRoutes;
