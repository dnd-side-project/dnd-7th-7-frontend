import React from 'react';
import { Image, View } from 'react-native';
import { Font, Tag } from '../commons';
import { styles } from './RouteBox.style';
import { globals } from '@styles/globals';
import Marker from '../../assets/images/mini_marker.svg';

const RouteBox = ({
  routeName,
  distance,
  secondLocation,
  thirdLocation,
  routeImage,
  recommendedTags,
  secureTags,
}) => {
  const count_secureTags = secureTags.length;
  const count_recommendedTags = recommendedTags.length;

  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <Marker />
        <Font size={16}>
          {secondLocation} {thirdLocation}
        </Font>
      </View>

      <View style={styles.thumbnail}>
        <Font style={styles.info}>{distance}km</Font>
        <Image style={styles.img} source={{ uri: routeImage }} resizeMode="cover" />
      </View>

      <View style={styles.theme}>
        <Font weight={600}>{routeName}</Font>
      </View>

      <View style={styles.tags}>
        <Tag
          theme={'angled'}
          bgColor={'black'}
          textColor={'white'}
          textSize={13}
          style={{ paddingHorizontal: 7, paddingVertical: 5, borderRadius: 6.5, marginRight: 5 }}
        >
          {`안심태그 ${1}개`}
        </Tag>
        <Tag
          theme={'angled'}
          bgColor={globals.colors.PRIMARY_DARK}
          textColor={'white'}
          textSize={13}
          style={{ paddingHorizontal: 7, paddingVertical: 5, borderRadius: 6.5 }}
        >
          {`추천태그 ${2}개`}
        </Tag>
      </View>
    </View>
  );
};

export default RouteBox;
