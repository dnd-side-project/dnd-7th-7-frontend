import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { styles } from './Review.style';
import { globals } from '@styles/globals';
import { Font, InputBox, Tag } from '@components/commons';
import AlertModal from '@components/commons/modals/AlertModal';
import ImageGridPicker from '@containers/Recording/ImageGridPicker';

const Review = ({ navigation }) => {
  const [review, setReview] = useState('');
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const registImage = (image) => {
    setImages([...images, image]);
  };

  return (
    <View style={styles.container}>
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

      <Tag
        theme={'angled'}
        onPress={() => setModalOpen(true)}
        style={{
          width: '100%',
          position: 'absolute',
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
        다음
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
