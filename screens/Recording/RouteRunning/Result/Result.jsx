import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { styles } from './Result.style';
import useTagCount from '@hooks/useTagCount';
import { globals } from '@styles/globals';
import { Font, Tag } from '@components/commons';
import ResultSummary from '@containers/Recording/ResultSummary';
import {
  tempStartTime,
  tempElapsedTime,
  tempDistance,
  tempCurrentThirdLoc,
  tempCurrentSecLoc,
} from '@containers/Recording/RecorderBox/RecorderBox';
import TagSelectSection from '@containers/OnBoarding/TagSelectSection';
import { SECURE_TAGS_DATA, RECOMMENDED_TAGS_DATA } from '@hooks/utils.js';

const Result = ({ navigation, route }) => {
  const routeName = route.params.routeName;
  const [selectedSecureTags, onPressSecureTag] = useTagCount();
  const [selectedRecommendedTags, onPressRecommendedTag] = useTagCount();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.map_view}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../../../assets/images/runMap1.png')}
          />
        </View>
        <ResultSummary
          startTime={tempStartTime}
          elapsedTime={tempElapsedTime}
          routeName={routeName}
          distance={tempDistance}
          thirdLoc={tempCurrentThirdLoc}
          thirdLoc_diff={tempCurrentThirdLoc}
          secondLoc={tempCurrentSecLoc}
          secondLoc_diff={tempCurrentSecLoc}
          style={{
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: globals.colors.GREY_LIGTH_DARK,
          }}
        />
        <View style={styles.tag_review}>
          <Font style={{ marginTop: 17, marginBottom: 10 }} size={16} weight={600}>
            다녀오신 경로를 평가해주세요!
          </Font>
          <Font style={{ marginBottom: 10 }}>안심태그</Font>
          <TagSelectSection
            selectable={true}
            onPressTag={onPressSecureTag}
            pressedProps={{
              textSize: 14,
              textColor: globals.colors.BLACK,
              bgColor: globals.colors.PRIMARY_DEF,
              theme: 'angled',
              style: { marginRight: 10, marginBottom: 10 },
            }}
            tagProps={{
              textSize: 14,
              textColor: globals.colors.GREY_DEF_LIGHT,
              bgColor: globals.colors.PRIMARY_LIGHT,
              theme: 'angled',
              style: { marginRight: 10, marginBottom: 10 },
            }}
            data={SECURE_TAGS_DATA}
          />
          <Font style={{ marginTop: 10, marginBottom: 10 }}>일반태그</Font>
          <TagSelectSection
            selectable={true}
            onPressTag={onPressSecureTag}
            pressedProps={{
              textSize: 14,
              textColor: globals.colors.BLACK,
              bgColor: globals.colors.ORANGE_DEF,
              theme: 'angled',
              style: { marginRight: 10, marginBottom: 10 },
            }}
            tagProps={{
              textSize: 14,
              textColor: globals.colors.GREY_DEF_LIGHT,
              bgColor: globals.colors.ORANGE_LIGHT,
              theme: 'angled',
              style: { marginRight: 10, marginBottom: 10 },
            }}
            data={RECOMMENDED_TAGS_DATA}
          />
        </View>
      </ScrollView>
      <Tag
        theme={'angled'}
        onPress={() => navigation.navigate('RouteRunningReview')}
        style={{
          width: '100%',

          alignSelf: 'center',
          bottom: 10,
          marginHorizontal: 16,
          paddingVertical: 16,
          paddingHorizontal: 42,
        }}
        bgColor={globals.colors.PRIMARY_DARK}
        textColor={globals.colors.WHITE}
        textWeight={600}
      >
        리뷰 등록
      </Tag>
    </View>
  );
};

export default Result;
