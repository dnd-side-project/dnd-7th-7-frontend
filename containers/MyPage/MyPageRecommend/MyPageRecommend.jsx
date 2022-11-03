import { ScrollView, TouchableOpacity, View } from 'react-native';
import {
  ThumbnailBody,
  ThumbnailBodyDescription,
  ThumbnailBodyImage,
  ThumbnailBodyInformation,
  ThumbnailBox,
  ThumbnailHeader,
} from '@containers/Recommend/Main/Main.style';
import * as S from './MyPageRecommend.style';
import GrayDot from '@assets/images/graydot.svg';

import { Tag, Font } from '@components/commons';

const recommendData = [
  {
    title: '몰랐지? 힙지로 카페 거리 러닝',
    date: [12, 31, '토', '오후', '6~9시'],
    time: 500,
    distance: 100,
    map: '../../../assets/images/runMap1.png',
    description:
      '어쩌구 저쩌구 블라블라~구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악',
    tags: ['안심등이 있어요', '강을 보며 달려요', '+3'],
  },
  {
    title: '난 퇴근하고 강남에서 러닝해',
    date: [11, 19, '금', '오전', '3시~6시'],
    time: 480,
    distance: 120,
    map: '../../../assets/images/runMap2.png',
    description:
      '300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 되는지 확인하',
    tags: ['안심등이 있어요', '강을 보며 달려요', '+3'],
  },
  {
    title: '언덕 올라가는거 좋아하는 사람??',
    date: [1, 3, '월', '오전', '9시~12시'],
    time: 900,
    distance: 999,
    map: '../../../assets/images/runMap3.png',
    description:
      '300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 되는지 확인하',
    tags: ['안심등이 있어요', '강을 보며 달려요', '+3'],
  },
];
const MyPageRecommend = ({ route: { params } }) => {
  return params.data === 3 ? (
    <S.EmptyResultBox>
      <S.EmptyResult>
        <S.EmtpyResultImage />
        <Font
          size={12}
          weight={400}
          color="#555555"
          style={{ textAlign: 'center' }}
          lineHeight={12 * 1.5}
        >
          등록된 추천 경로가 없네요.{'\n'}나만의 러닝 경로를 추천해볼까요?
        </Font>
      </S.EmptyResult>
    </S.EmptyResultBox>
  ) : (
    <ScrollView
      style={{ backgroundColor: '#FFFFFF' }}
      contentContainerStyle={{ paddingVertical: 30 }}
    >
      {recommendData.map((item, index) => (
        <ThumbnailBox key={index} style={{ borderBottomWidth: 10, borderBottomColor: '#F6F6F6' }}>
          <ThumbnailHeader>
            <Font size={18} weight={600} color="#3D3D3D" lineHeight={18 * 1.5}>
              {item.title}
            </Font>
            <TouchableOpacity>
              <Font size={12} weight={400} color="#8B8B8B">
                작성글로 이동
              </Font>
            </TouchableOpacity>
          </ThumbnailHeader>
          <ThumbnailBody>
            <ThumbnailBodyInformation>
              <Font
                size={12}
                weight={400}
                color="#8B8B8B"
              >{`${item.date[0]}월 ${item.date[1]}일 ${item.date[2]}요일 ${item.date[3]} ${item.date[4]}`}</Font>
              <GrayDot />
              <Font size={12} weight={400} color="#8B8B8B">
                {item.time}분
              </Font>
              <GrayDot />
              <Font size={12} weight={400} color="#8B8B8B">
                {item.distance}km
              </Font>
            </ThumbnailBodyInformation>
            <ThumbnailBodyImage source={require('../../../assets/images/runMap1.png')} />
            <ThumbnailBodyDescription>
              <Font size={14} weight={400} color="#3D3D3D" lineHeight={14 * 1.5}>
                {item.description.slice(0, 36)}
              </Font>
              <Font size={14} weight={400} color="#3D3D3D" lineHeight={14 * 1.5}>
                {item.description.length - 36 < 36
                  ? `${item.description.slice(36, item.description.length)}...`
                  : `${item.description.slice(36, 62)}...`}
              </Font>
            </ThumbnailBodyDescription>
          </ThumbnailBody>
          <View
            style={{
              width: 'auto',
              flexDirection: 'row',
            }}
          >
            {item.tags.map((text, index) => (
              <Tag theme="angled" style={{ marginRight: 10 }} key={index} bgColor="#C9EFD2">
                <Font size={14} weight={400}>
                  {text}
                </Font>
              </Tag>
            ))}
          </View>
        </ThumbnailBox>
      ))}
    </ScrollView>
  );
};

export default MyPageRecommend;
