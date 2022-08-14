import React from 'react';
import { Image, View } from 'react-native';
import { Font, Tag } from '../commons';
import { styles } from './RouteBox.style';
import { globals } from '@styles/globals';
import Marker from '../../assets/images/mini_marker.svg';

const RouteBox = () => {
  const distance = 3;
  const count_safeTags = 3;
  const count_suggestionTags = 3;

  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <Marker />
        <Font size={16}>성동구 송정동</Font>
      </View>

      <View style={styles.thumbnail}>
        <Font style={styles.info}>{distance}km</Font>
        <Image
          style={styles.img}
          source={require('@assets/images/route_thumbnail_example.png')}
          resizeMode="cover"
        />
      </View>

      <View style={styles.theme}>
        <Font weight={600}>한강 가로등이 지켜주는 길</Font>
      </View>

      <View style={styles.tags}>
        <Tag
          theme={'angled'}
          bgColor={'black'}
          textColor={'white'}
          textSize={13}
          style={{ paddingHorizontal: 7, paddingVertical: 5, borderRadius: 6.5, marginRight: 5 }}
        >
          {`안심태그 ${count_safeTags}개`}
        </Tag>
        <Tag
          theme={'angled'}
          bgColor={globals.colors.PRIMARY_DARK}
          textColor={'white'}
          textSize={13}
          style={{ paddingHorizontal: 7, paddingVertical: 5, borderRadius: 6.5 }}
        >
          {`추천태그 ${count_suggestionTags}개`}
        </Tag>
      </View>
    </View>
  );
};

export default RouteBox;
