import React from 'react';
import { Image, View } from 'react-native';
import { Font } from '../commons';
import { styles } from './RouteBox.style';

const RouteBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <Font>성동구 송정동</Font>
      </View>
      <View style={styles.routeWrapper}>
        <Image
          style={styles.routeImage}
          source={require('@assets/images/example.png')}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default RouteBox;
