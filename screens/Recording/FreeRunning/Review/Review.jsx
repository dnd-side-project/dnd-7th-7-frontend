import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { styles } from './Review.style';
import { globals } from '@styles/globals';
import { Font, InputBox, Tag } from '@components/commons';
import EditIcon from '@assets/images/edit.svg';
import ResultSummary from '@containers/Recording/ResultSummary/ResultSummary';
import useTagCount from '@hooks/useTagCount';
import { SECURE_TAGS_DATA, RECOMMENDED_TAGS_DATA } from '@hooks/utils.js';
import TagSelectSection from '@containers/OnBoarding/TagSelectSection';
import ImageGridPicker from '@containers/Recording/ImageGridPicker';
import AlertModal from '@components/commons/modals/AlertModal';
import {
  tempStartTime,
  tempElapsedTime,
  tempDistance,
  tempCurrentThirdLoc,
  tempCurrentSecLoc,
} from '@containers/Recording/RecorderBox/RecorderBox';

const Review = ({ navigation }) => {
  const [selectedSecureTags, onPressSecureTag] = useTagCount();
  const [selectedRecommendedTags, onPressRecommendedTag] = useTagCount();
  const [review, setReview] = useState('');
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const registImage = (image) => {
    setImages([...images, image]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.map_view}>
          <Font>MAP</Font>
        </View>

        <Font weight={600}>러닝 경로 이름</Font>
        <View style={styles.input_section}>
          <TextInput style={styles.input} placeholder="경로 이름을 입력해주세요" />
          <EditIcon />
        </View>

        <View style={styles.route_info}>
          <Font weight={600}>경로 정보</Font>
          <ResultSummary
            startTime={tempStartTime}
            elapsedTime={tempElapsedTime}
            distance={tempDistance}
            thirdLoc={tempCurrentThirdLoc}
            secondLoc={tempCurrentSecLoc}
            style={{ marginTop: 10 }}
          />
        </View>

        <View style={styles.tag_select}>
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
        </View>

        <Font style={{ marginTop: 20, marginBottom: 10 }} size={16} weight={600}>
          경로에 대한 경험을 글로 남겨주세요
        </Font>
        <View style={{ marginBottom: 30 }}>
          <InputBox
            onChange={setReview}
            placeholder={
              '최소 30자 이상 작성해주세요. (비방, 욕설을 포함한 관련없는 내용은 통보 없이 삭제될 수 있습니다.)'
            }
            placeholderColor={globals.colors.GREY_DEF}
            style={{
              height: 215,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: globals.colors.PRIMARY_DARK,
            }}
          />
          <Font style={styles.char_count}>{review.length} / 300</Font>
        </View>

        <View style={styles.regist_image}>
          <Font style={{ marginBottom: 10 }} size={16} weight={600}>
            경험했던 경로의 사진을 등록해주세요
          </Font>
          <ImageGridPicker registImage={registImage} data={images} />
        </View>
      </ScrollView>

      <Tag
        theme={'angled'}
        onPress={() => setModalOpen(true)}
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
        등록
      </Tag>
      <AlertModal
        isVisible={modalOpen}
        clickOutside={setModalOpen}
        title={'리뷰를 등록하고 홈으로 이동할까요?'}
        onPressYes={() => navigation.reset({ routes: [{ name: 'Home' }] })}
        onPressNo={() => setModalOpen(false)}
      />
    </View>
  );
};

export default Review;
