import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

export const getFonts = () => {
  let [fontsLoaded] = useFonts({
    'Pretendard-ExtraBold': require('../assets/fonts/Pretendard-ExtraBold.ttf'),
    'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.ttf'),
    'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.ttf'),
    'Pretendard-Regular': require('../assets/fonts/Pretendard-Regular.ttf'),
    'Pretendard-Medium': require('../assets/fonts/Pretendard-Medium.ttf'),
    'Pretendard-Light': require('../assets/fonts/Pretendard-Light.ttf'),
  });
  return fontsLoaded;
};

export const getYearList = (reverse = false) => {
  const list = [];
  const currentYear = new Date().getFullYear();
  if (reverse) {
    for (let i = currentYear; i >= 1950; i--) {
      const obj = { label: `${i}`, value: `${i}` };
      list.push(obj);
    }
  } else {
    for (let i = 1950; i <= currentYear; i++) {
      const obj = { label: `${i}`, value: `${i}` };
      list.push(obj);
    }
  }
  return list;
};

// 태그 데이터들이 string 배열이 아니라 number 배열로 되어있는데
// 그 number 번호에 따라 맞는 태그 타이틀로 바꿔주는 함수입니다.
export const indexToSecureTitle = (index) => {
  switch (index) {
    case '1':
      return '근처에 어린이 보호구역이 있어요';
    case '2':
      return '안심등이 있어요';
    case '3':
      return '가로등이 많아요';
    case '4':
      return '밤에 사람이 많아요';
    case '5':
      return '낮에 사람이 많아요';
    default:
      break;
  }
};

export const secureTitleToIndex = (title) => {
  switch (title) {
    case '근처에 어린이 보호구역이 있어요':
      return '1';
    case '안심등이 있어요':
      return '2';
    case '가로등이 많아요':
      return '3';
    case '밤에 사람이 많아요':
      return '4';
    case '낮에 사람이 많아요':
      return '5';
    default:
      break;
  }
};

export const indexToRecommendedTitle = (index) => {
  switch (index) {
    case '1':
      return '강을 보며 달려요';
    case '2':
      return '나무가 많아요';
    case '3':
      return '가파른 구간이 없어요';
    case '4':
      return '보행자 전용 트랙이 있어요';
    case '5':
      return '길이 깨끗해요';
    default:
      break;
  }
};

export const recommendedTitleToIndex = (title) => {
  switch (title) {
    case '강을 보며 달려요':
      return '1';
    case '나무가 많아요':
      return '2';
    case '가파른 구간이 없어요':
      return '3';
    case '보행자 전용 트랙이 있어요':
      return '4';
    case '길이 깨끗해요':
      return '5';
    default:
      break;
  }
};

export const filterRecTagsTitleToIndex = (array) => {
  return array.map((item) => recommendedTitleToIndex(item));
};

export const filterSecureTagsTitleToIndex = (array) => {
  return array.map((item) => secureTitleToIndex(item));
};
// const exampleTagCountData = {
//   1: 12,
//   2: 0,
//   3: 6,
//   4: 0,
//   5: 3,
// };
// 태그 번호별로 좋아요(북마크?)갯수가 count되어있는데 그 중에
// value가 0인 값을 제외해주는 함수입니다.
export const filterZeroValue = (tagCountData) => {
  const temp = Object.entries(tagCountData)
    .filter((value) => value[1] !== 0)
    .map(([key, value]) => {
      const obj = { title: `${indexToSecureTitle(key)} ${value}` };
      return obj;
    });
  return temp;
};

export const cityList = [
  { label: '서울특별시', value: '서울특별시' },
  { label: '부산광역시', value: '부산광역시' },
  { label: '대구광역시', value: '대구광역시' },
  { label: '인천광역시', value: '인천광역시' },
  { label: '광주광역시', value: '광주광역시' },
  { label: '대전광역시', value: '대전광역시' },
  { label: '울산광역시', value: '울산광역시' },
  { label: '세종특별자치시', value: '세종특별자치시' },
  { label: '경기도', value: '경기도' },
  { label: '강원도', value: '강원도' },
  { label: '충청북도', value: '충청북도' },
  { label: '충청남도', value: '충청남도' },
  { label: '전라북도', value: '전라북도' },
  { label: '전라남도', value: '전라남도' },
  { label: '경상북도', value: '경상북도' },
  { label: '경상남도', value: '경상남도' },
  { label: '제주특별자치도', value: '제주특별자치도' },
];

export const districtList = [
  { label: '종로구', value: '종로구' },
  { label: '중구', value: '중구' },
  { label: '용산구', value: '용산구' },
];

// 나중에 index => tag title 바꾸는 로직 추가
export const SECURE_TAGS_DATA = [
  { index: 1, title: '근처에 어린이 보호구역이 있어요' },
  { index: 2, title: '안심등이 있어요' },
  { index: 3, title: '가로등이 많아요' },
  { index: 4, title: '밤에 사람이 많아요' },
  { index: 5, title: '낮에 사람이 많아요' },
];

export const RECOMMENDED_TAGS_DATA = [
  { index: 1, title: '강을 보며 달려요' },
  { index: 2, title: '나무가 많아요' },
  { index: 3, title: '가파른 구간이 없어요' },
  { index: 4, title: '보행자 전용 트랙이 있어요' },
  { index: 5, title: '길이 깨끗해요' },
];

export const ROUTES_DATA = [
  // recommendedTags => 추후 recommendedTags.length로 변경
  {
    routeKey: 1,
    routeName: '한강 가로등이 지켜주는 길',
    distance: 1.5,
    secondLocation: '성동구',
    thirdLocation: '송정동',
    routeImage: require('../assets/images/runMap1.png'),
    recommendedTags: [1, 5],
    secureTags: [3, 4],
    review:
      '300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 ',
  },
  {
    routeKey: 2,
    routeName: '저녁에도 사람들이 많은 길',
    distance: 2.5,
    secondLocation: '사랑구',
    thirdLocation: '행복동',
    routeImage: require('../assets/images/runMap2.png'),
    recommendedTags: [1, 2],
    secureTags: [2, 4],
    review:
      '300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 ',
  },
  {
    routeKey: 3,
    routeName: '가파른 구간이 없는 길',
    distance: 3.5,
    secondLocation: '안심구',
    thirdLocation: '안정동',
    routeImage: require('../assets/images/runMap3.png'),
    recommendedTags: [5, 3],
    secureTags: [5, 3],
    review:
      '300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 ',
  },
];
