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
import { indexToSecureTitle, filterZeroValue } from '@hooks/utils';
import { useNavigation } from '@react-navigation/native';

const RouteDetail = ({ route }) => {
  const navigation = useNavigation();
  // GET http://${baseurl}/running-route/main/${id}
  const routeName = '한강 가로등이 지켜주는 길';
  const secondLocation = '성동구';
  const thirdLocation = '송정동';
  const distance = 5.8;
  const review =
    '성동구에서 가장 안전한 러닝 루트를 소개합니다! 나무가 많아 그늘 아래에서 달릴 수 있고, 관리도 참 잘 되어서 쾌적해요. 무엇보다도 해질 때쯤 강 너머로 보이는 석양을 보면서 달리면 가슴이 벅차오릅니다... 오후 10시 이후로는 한산한 편이지만 가로등이 다 켜져있어서 안전해요~!';
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
  const files = [
    'https://t1.daumcdn.net/cfile/tistory/9950BD365E6E47321F',
    'https://t1.daumcdn.net/cfile/blog/2342C84657ED330608',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUf6NWUCpDjy-_zDFEON6g3zikUvU5gwFgQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKy3A6HZJCpk23M9GU7yOUt1WOFuJSa-T6w&usqp=CAU',
  ];

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

        <ThumbnailCards data={files} />

        <View style={styles.review_section}>
          <View style={styles.title}>
            <Font size={24} weight={600}>
              {routeName}
            </Font>
            <BookMark />
          </View>
          <View style={styles.infos}>
            <Marker />
            <Font style={{ marginLeft: 5 }}>
              {secondLocation} {thirdLocation}
            </Font>
            <Dot />
            <Distance />
            <Font style={{ marginLeft: 5 }}>{distance}km</Font>
          </View>
          <View style={styles.review}>
            <Font lineHeight={21} size={14} weight={400}>
              {review}
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
            data={filterZeroValue(secureTagCountsPerRoute)}
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
            data={filterZeroValue(recommendedTagCountsPerRoute)}
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
