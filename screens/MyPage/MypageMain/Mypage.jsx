import * as S from './Mypage.style';
import { Share, Text, View, StyleSheet } from 'react-native';

import RightChevron from '../../../assets/images/Vector53.svg';
import ShareBtn from '../../../assets/images/Group34.svg';
import { TouchableOpacity } from 'react-native';
import Tag from '../../../components/commons/Tag/Tag';
import Font from '../../../components/commons/Font';

const MypageMain = ({ navigation: { navigate } }) => {
  const shareMedia = async () => {
    await Share.share({
      url: 'https://....',
      message: 'Message...',
      title: 'Title...',
    });
  };
  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <S.Profile>
        <S.Header></S.Header>
        <S.AvatarBox>
          <S.Avatar />
          <Tag
            theme="angled"
            textColor="#000000"
            borderColor="#D9D9D9"
            borderWidth={1}
            bgColor="#f9f9f9"
            textSize={12}
          >
            <Font size={12} weight={400}>
              뱃지 정보
            </Font>
          </Tag>
        </S.AvatarBox>
        <S.UserBox>
          <S.UserNameBox>
            <Font size={24} weight={600}>
              달리는 다람쥐
            </Font>
            <Font size={20} weight={500}>
              ak****
            </Font>
          </S.UserNameBox>

          <Tag
            theme="angled"
            textColor="#000000"
            borderColor="#D9D9D9"
            borderWidth={1}
            bgColor="#f9f9f9"
            textSize={12}
            onPress={() => navigate('CheckPassword')}
          >
            <Font size={12} weight={400}>
              회원 정보
            </Font>
          </Tag>
        </S.UserBox>
      </S.Profile>
      <S.Record>
        <S.RouteRecord style={borderStyle.border}>
          <S.RouteRecordInformation>
            <Font size={18} weight={600}>
              러닝 경로 기록
            </Font>
            <Font size={12} weight={400} color="#8A8A8A">
              총 125회의 러닝 경로 기록이 있으시네요
            </Font>
          </S.RouteRecordInformation>
          <TouchableOpacity>
            <RightChevron />
          </TouchableOpacity>
        </S.RouteRecord>
        <S.RouteRecord style={borderStyle.border}>
          <S.RouteRecordInformation>
            <Font size={18} weight={600}>
              러닝 기록
            </Font>
            <Font size={12} weight={400} color="#8A8A8A">
              총 200회의 러닝 기록이 있으시네요
            </Font>
          </S.RouteRecordInformation>
          <TouchableOpacity>
            <RightChevron />
          </TouchableOpacity>
        </S.RouteRecord>
        <S.RouteRecord
          style={{ ...borderStyle.border, borderBottomColor: 'transparent', marginBottom: 35 }}
        >
          <S.RouteRecordInformation>
            <Font size={18} weight={600}>
              작성한 리뷰
            </Font>
            <Font size={12} weight={400} color="#8A8A8A">
              총 23개의 리뷰를 작성했어요
            </Font>
          </S.RouteRecordInformation>
          <TouchableOpacity>
            <RightChevron />
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
    </View>
  );
};

const borderStyle = StyleSheet.create({
  border: {
    borderTopColor: 'transparent',
  },
});

export default MypageMain;
