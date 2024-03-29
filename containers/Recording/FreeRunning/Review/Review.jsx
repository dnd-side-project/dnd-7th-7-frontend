import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Dimensions,
} from 'react-native';
import { styles } from './Review.style';
import { globals } from '@styles/globals';
import { Font, InputBox, Tag } from '@components/commons';
import EditIcon from '@assets/images/edit.svg';
import ResultSummary from '@components/ResultSummary';
import useTagCount from '@hooks/useTagCount';
import Plus from '@assets/images/plus.svg';
import { SECURE_TAGS_DATA, RECOMMENDED_TAGS_DATA } from '@hooks/utils.js';
import TagSelectSection from '@components/TagSelectSection';
import ImageGridPicker from '@components/ImageGridPicker';
import AlertModal from '@components/commons/modals/AlertModal';
import {
  tempStartTime,
  tempElapsedTime,
  tempDistance,
  tempCurrentThirdLoc,
  tempCurrentSecLoc,
} from '@components/RecorderBox/RecorderBox';
import * as ImagePicker from 'expo-image-picker';
import routeAtom, { addRecord } from '@recoil/route';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { postReview } from '@apis';

const Review = ({ navigation }) => {
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedSecureTags, onPressSecureTag] = useTagCount();
  const [selectedRecommendedTags, onPressRecommendedTag] = useTagCount();

  const [review, setReview] = useRecoilState(addRecord('review'));
  const [routeName, setRouteName] = useRecoilState(addRecord('routeName'));
  const setFiles = useSetRecoilState(addRecord('files'));
  const setRouteImage = useSetRecoilState(addRecord('routeImage'));
  const setRecommendedTags = useSetRecoilState(addRecord('recommendedTags'));
  const setSecureTags = useSetRecoilState(addRecord('secureTags'));
  const setDistance = useSetRecoilState(addRecord('distance'));
  const reset = useResetRecoilState(routeAtom);
  const records = useRecoilValue(routeAtom);

  const handleSubmit = () => {
    setSecureTags(selectedSecureTags);
    setRecommendedTags(selectedRecommendedTags);
    setFiles(images);
    setRouteImage(images[0]);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      allowsMultipleSelection: true,
      base64: true,
    });

    if (!result.cancelled) {
      setImages((prev) => [...prev, `data:image/jpeg;base64,${result.base64}`]);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.map_view}
          resizeMode="contain"
          source={require('@assets/images/runMap1.png')}
        />

        <Font weight={600}>러닝 경로 이름</Font>
        <View style={styles.input_section}>
          <TextInput
            style={styles.input}
            onChangeText={setRouteName}
            value={routeName}
            placeholder="경로 이름을 입력해주세요"
          />
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
              onPressTag={onPressRecommendedTag}
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
            value={review}
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

          <View style={style.container}>
            <View style={style.flatList}>
              <Pressable style={style.add_btn} onPress={pickImage}>
                <Plus />
              </Pressable>
              {images.map((image, index) => (
                <View style={style.img_wrap} key={index}>
                  <Image style={style.img} resizeMode="cover" source={{ uri: image }} />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <Tag
        theme={'angled'}
        onPress={() => {
          handleSubmit();
          setModalOpen(true);
        }}
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
        onPressYes={() => {
          postReview(records);
          reset();
          navigation.reset({ routes: [{ name: 'BottomTabs' }] });
        }}
        onPressNo={() => setModalOpen(false)}
      />
    </View>
  );
};

const gridWidth = (Dimensions.get('screen').width - globals.layout.SCREEN_PADDING_HORIZ * 2) / 4;
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  add_btn: {
    backgroundColor: globals.colors.PRIMARY_LIGHT,
    width: gridWidth,
    height: gridWidth,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    width: gridWidth * 4,
    flexDirection: 'row',
    marginHorizontal: 'auto',
    flexWrap: 'wrap',
  },
  img_wrap: {
    minWidth: gridWidth,
    maxWidth: gridWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: gridWidth,
    height: gridWidth,
    borderWidth: 5,
    borderColor: globals.colors.BACKGROUND,
    borderRadius: 10,
  },
});
export default Review;
