import React from 'react';
import { Image, View } from 'react-native';
import { Font } from '../commons';
import { styles } from './RouteBox.style';
import Marker from '../../assets/images/mini_marker.svg';
import Tag from '../Tag';

const RouteBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <Marker />
        <Font size={16}>성동구 송정동</Font>
      </View>
      <View>
        <Font>정보 덧대어</Font>
      </View>
      <Image
        style={styles.thumbnail}
        source={require('@assets/images/route_thumbnail_example.png')}
        resizeMode="cover"
      />
      <View style={styles.theme}>
        <Font weight={600}>한강 가로등이 지켜주는 길</Font>
      </View>
      <View style={styles.tags}>
        <Tag />
        <Tag />
      </View>
    </View>
  );
};

export default RouteBox;
