import React from 'react';
import { SectionList, Text, View } from 'react-native';
import { styles } from './RecommendedRoutes.style';
import RouteBox from '@components/RouteBox/RouteBox';
import { Font } from '@components/commons';

const RecommendedRoutes = () => {
  const user = '우영우';

  return (
    <View style={styles.container}>
      <View style={styles.guide}>
        {/* RN에서는 work-break css 속성없어서 해결 방법 생각해야함 */}
        <Font size={24} weight={700} style={{ marginBottom: 4 }}>
          밤에는 밝은 경로로
        </Font>
        <Font size={24} weight={700}>
          달려보는건 어떨까요?
        </Font>
      </View>

      {/* 
        1. SectionList를 활용하여 <RouteBox /> 컴포넌트 렌더링
        2. ScrollView or FlatList를 이용하여 horizon scroll 구현 
        */}
      <RouteBox />
      <RouteBox />
    </View>
  );
};

export default RecommendedRoutes;
