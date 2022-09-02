import { atom } from 'recoil';

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();

const routeAtom = atom({
  key: 'routeAtom',
  default: {
    arrayOfPos: [],
    runningTime: '',
    review: '',
    runningDate: year + '-' + month + '-' + day,
    distance: '', // km 단위
    routeImage: {}, // image file 1개
    files: [{}], // 사용자가 첨부한 파일
    firstLocation: '행복시',
    secondLocation: '행복구',
    thirdLocation: '행복동',
    recommendedTags: [''],
    secureTags: [''],
    // mainRoute: 1, // 추천 경로 등록일 때에는 빼고 보내주시면 됩니다
  },
});

export default routeAtom;
