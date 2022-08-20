import React from 'react';
import { styles } from './TagsInModal.style';
import { Text, View } from 'react-native';
import { globals } from '@styles/globals.js';
import { filterZeroValue } from '@hooks/utils.js';
import { Font } from '@components/commons';
import TagSelectSection from '@containers/OnBoarding/TagSelectSection';
import Marker from '@assets/images/mini_marker.svg';
import Distance from '@assets/images/distance_icon.svg';
import Dot from '@assets/images/dot.svg';

const TagsInModal = ({ routeId }) => {
  // 나중에 routeId로 API 태그 정보 불러오기
  const routeName = '백엔드 루트 이름';
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
  return (
    <View style={styles.container}>
      <View style={styles.route_infos}>
        <Font style={{ marginBottom: 7 }} size={24} weight={600}>
          {routeName}
        </Font>
        <View style={styles.location}>
          <Marker />
          <Font style={{ marginLeft: 5 }}>
            {secondLocation} {thirdLocation}
          </Font>
          <Dot />
          <Distance />
          <Font style={{ marginLeft: 5 }}>{distance}km</Font>
        </View>
      </View>

      <View style={styles.info_secure}>
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
    </View>
  );
};

export default TagsInModal;
