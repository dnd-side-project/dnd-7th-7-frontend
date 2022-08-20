import * as S from './Mypage.style';
import { Share, Text, View, StyleSheet, ScrollView } from 'react-native';
import RightChevron from '../../../assets/images/Vector53.svg';
import ShareBtn from '../../../assets/images/Group34.svg';
import { TouchableOpacity } from 'react-native';
import Font from '../../../components/commons/Font';
import MapMark from '@assets/images/MapMark.svg';
import MapMarkGreen from '@assets/images/MapMarkGreen.svg';
import { Entypo } from '@expo/vector-icons';
import ReviewMark from '@assets/images/review.svg';

const MypageMain = ({ navigation: { navigate } }) => {
  const shareMedia = async () => {
    await Share.share({
      url: 'https://....',
      message: 'Message...',
      title: 'Title...',
    });
  };
  return (
    <ScrollView
      style={{ backgroundColor: '#FAFAFA', flex: 1 }}
      contentContainerStyle={{
        paddingBottom: 100,
      }}
    >
      <S.Profile>
        <S.Header></S.Header>
        <S.AvatarBox>
          <S.Avatar />
        </S.AvatarBox>
        <S.UserBox>
          <S.UserNameBox>
            <Font size={24} weight={600} lineHeight={24 * 1.5}>
              달리는 다람쥐
            </Font>
            <Font size={14} weight={400} lineHeight={14 * 1.5} color="#3D3D3D">
              runningmap@naver.com
            </Font>
          </S.UserNameBox>
        </S.UserBox>
      </S.Profile>
      <S.Record>
        <S.RouteRecordMain>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <View
              style={{
                width: '50%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <MapMark />
              <Font size={18} color="#FFFFFF" weight={600} lineHeight={18 * 1.5}>
                추천 경로 등록 내역
              </Font>
            </View>
            <Entypo name="chevron-thin-right" size={16} color="white" />
          </View>
          {/* N회 받아오기 */}
          {/* 뱃지 API 요청하기 */}
          <View style={{ paddingLeft: 27 }}>
            <Font size={14} lineHeight={14 * 1.5} weight={400} color="#ffffff">
              총 125회의 러닝 경로 기록으로 {'\n'}데일리 마라토너 뱃지를 얻었어요
            </Font>
          </View>
        </S.RouteRecordMain>
        <S.RouteRecord
          style={{
            shadowOpacity: 0.1,
            shadowRadius: 5,
            shadowColor: '#000',
            shadowOffset: { height: 0, width: 0 },
          }}
        >
          <View
            style={{
              width: 'auto',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <MapMarkGreen style={{ marginRight: 7 }} />
            <Font size={18} color="black" weight={400}>
              러닝 기록 내역
            </Font>
          </View>
          <TouchableOpacity>
            <Entypo name="chevron-thin-right" size={16} color="#555555" />
          </TouchableOpacity>
        </S.RouteRecord>
        <S.RouteRecord
          style={{
            shadowOpacity: 0.1,
            shadowRadius: 5,
            shadowColor: '#000',
            shadowOffset: { height: 0, width: 0 },
          }}
        >
          <View
            style={{
              width: 'auto',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <ReviewMark style={{ marginRight: 7 }} />
            <Font size={18} color="black" weight={400}>
              나의 리뷰
            </Font>
          </View>
          <TouchableOpacity>
            <Entypo name="chevron-thin-right" size={16} color="#555555" />
          </TouchableOpacity>
        </S.RouteRecord>
        <S.ShareLayout>
          <S.ShareBox>
            <Font weight={400} size={14}>
              친구와 경로 공유를 해보세요
            </Font>
            <S.ShareGraphic>
              <Font>그래픽</Font>
            </S.ShareGraphic>
            <TouchableOpacity onPress={shareMedia}>
              <ShareBtn />
            </TouchableOpacity>
          </S.ShareBox>
        </S.ShareLayout>
      </S.Record>
    </ScrollView>
  );
};

export default MypageMain;
