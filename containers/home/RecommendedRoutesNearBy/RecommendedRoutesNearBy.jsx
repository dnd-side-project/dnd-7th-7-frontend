import React from 'react';
import { View } from 'react-native';
import { Font } from '@components/commons';
import { styles } from './RecommendedRoutesNearBy.style';

const RecommendedRoutesNearBy = () => {
  return (
    <View style={styles.container}>
      <Font size={20} weight={500} style={{ marginBottom: 5 }}>
        위치를 설정해 주시면,
      </Font>
      <Font size={20} weight={500}>
        근처 경로를 추천해 드릴게요
      </Font>
      <View style={styles.routes}>
        <View style={styles.route}>
          <Font>route1</Font>
        </View>
        <View style={styles.route}>
          <Font>route2</Font>
        </View>
      </View>
    </View>
  );
};

export default RecommendedRoutesNearBy;
