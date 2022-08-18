import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

export const getFonts = () => {
  let [fontsLoaded] = useFonts({
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
  { index: 12, title: '안심등이 있어요' },
  { index: 13, title: '늦은 시간까지 사람이 많아요' },
  { index: 14, title: '강 따라 달려요' },
  { index: 15, title: '가파른 구간이 없어요' },
  { index: 16, title: '울창한 나무숲' },
];

export const RECOMMENDED_TAGS_DATA = [
  { index: 12, title: '안심등이 있어요' },
  { index: 13, title: '늦은 시간까지 사람이 많아요' },
  { index: 14, title: '강 따라 달려요' },
  { index: 15, title: '가파른 구간이 없어요' },
];
