import React from 'react';
import { FlatList, ImageBackground, Pressable, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { globals } from '@styles/globals';
import { Entypo } from '@expo/vector-icons';
import { styles } from './RecommendedRoutes.style';
import RouteBox from '@components/RouteBox/RouteBox';
import { Font, Tag } from '@components/commons';
import { ROUTES_DATA, indexToRecommendedTitle } from '@hooks/utils';
import { Photo } from '@screens/Search/SearchMain/Search.style';
import { useNavigation } from '@react-navigation/native';
import MarkerIcon from '@assets/images/mini_marker_grey.svg';

const RecommendedRoutes = () => {
  const navigation = useNavigation();
  const PhotoList = styled.FlatList`
    height: 300px;
  `;

  return (
    <View style={styles.container}>
      <View style={styles.current_loc}>
        <MarkerIcon />
        <Font color={globals.colors.GREY_DEF_LIGHT}>내 위치를 설정해 주세요</Font>
      </View>
      <View style={styles.guide}>
        <Font size={24} weight={700} style={{ marginBottom: 4 }}>
          밤에는 밝은 경로로
        </Font>
        <Font size={24} weight={700}>
          달려보는건 어떨까요?
        </Font>
      </View>
      <PhotoList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={ROUTES_DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <Photo>
            <ImageBackground
              style={{ flex: 1 }}
              imageStyle={{ borderRadius: 10 }}
              source={require('../../../assets/images/mountain.png')}
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
                        {`${item.review.slice(0, 35)}...`}
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
                      justifyContent: 'space-between',
                      overflow: 'hidden',
                    }}
                  >
                    {item.secureTags.map((tagId, index) => (
                      <Tag
                        theme="angled"
                        style={{ paddingHorizontal: 12, paddingVertical: 6 }}
                        key={index}
                        bgColor="#C9EFD2"
                        textSize={14}
                        style={{ marginRight: 5 }}
                      >
                        {indexToRecommendedTitle(`${tagId}`)}
                      </Tag>
                    ))}
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
