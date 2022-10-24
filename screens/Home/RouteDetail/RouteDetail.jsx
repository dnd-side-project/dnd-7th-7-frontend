import React from 'react';
import { styles } from './RouteDetail.style';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { globals } from '@styles/globals';
import { Font, Tag } from '@components/commons';
import Marker from '@assets/images/mini_marker.svg';
import Dot from '@assets/images/dot.svg';
import Distance from '@assets/images/distance_icon.svg';
import BookMark from '@assets/images/bookmark.svg';
import SearchIcon from '@assets/images/navigator/SearchIcon.svg';
import TagSelectSection from '@containers/OnBoarding/TagSelectSection';
import ThumbnailCards from '@containers/home/ThumbnailCards';
import { indexToSecureTitle, filterZeroValue, convertTagsToText } from '@hooks/utils';
import { useNavigation } from '@react-navigation/native';

const RouteDetail = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;

  const recommendedTagCountsPerRoute = {
    1: 2,
    2: 4,
    3: 3,
    4: 1,
    5: 1,
  };
  const secureTagCountsPerRoute = {
    1: 12,
    2: 0,
    3: 6,
    4: 0,
    5: 3,
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.map_view}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../../assets/images/runMap2.png')}
          />
        </View>

        <ThumbnailCards data={data.files} />

        <View style={styles.review_section}>
          <View style={styles.title}>
            <Font size={24} weight={600}>
              {data.routeName}
            </Font>
            <BookMark />
          </View>
          <View style={styles.infos}>
            <Marker />
            <Font style={{ marginLeft: 5 }}>{data.firstLocation}</Font>
            <Dot />
            <Distance />
            <Font style={{ marginLeft: 5 }}>{data.distance}km</Font>
          </View>
          <View style={styles.review}>
            <Font lineHeight={21} size={14} weight={400}>
              {data.review}
            </Font>
          </View>
        </View>

        <View style={styles.info_secure}>
          <Font weight={600} style={{ marginTop: 10, marginBottom: 5 }}>
            안심태그
          </Font>
          <TagSelectSection
            tagProps={{
              textSize: 14,
              textColor: globals.colors.BLACK,
              bgColor: globals.colors.PRIMARY_DEF,
              theme: 'angled',
              style: { marginRight: 10, marginTop: 10 },
            }}
            data={convertTagsToText(data.secureTags, true)}
          />
        </View>
        <View style={styles.info_recommended}>
          <Font weight={600} style={{ marginTop: 15, marginBottom: 5 }}>
            일반태그
          </Font>
          <TagSelectSection
            tagProps={{
              textSize: 14,
              textColor: globals.colors.BLACK,
              bgColor: globals.colors.ORANGE_DEF,
              theme: 'angled',
              style: { marginRight: 10, marginTop: 10 },
            }}
            data={convertTagsToText(data.recommendedTags, false)}
          />
        </View>
      </ScrollView>
      <Tag
        onPress={() =>
          navigation.navigate('Recording', {
            screen: 'RouteRunning',
            params: {
              screen: 'RouteRunningRecording',
              params: {
                title: routeName,
              },
            },
          })
        }
        style={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: 24,
          paddingVertical: 16,
          paddingHorizontal: 42,
        }}
        bgColor={globals.colors.PRIMARY_DARK}
        textColor={globals.colors.WHITE}
        textWeight={600}
        icon={<SearchIcon style={{ marginRight: 10 }} stroke={globals.colors.WHITE} />}
      >
        경로따라가기
      </Tag>
    </View>
  );
};

export default RouteDetail;
