import React from 'react';
import * as S from './MyPage.style';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Share, StyleSheet, Text, View } from 'react-native';
import Font from '../../components/Font/Font';
import { WithLocalSvg } from 'react-native-svg';
import rightChevron from '../../assets/images/Vector53.svg';
import share from '../../assets/images/Group34.svg';
import { TouchableOpacity } from 'react-native';

const MypageStackNavigator = createNativeStackNavigator();

const MyPage = () => {
  const shareMedia = async () => {
    await Share.share({
      url: 'https://....',
      message: 'Message...',
      title: 'Title...',
    });
  };
  return (
    <View>
      <S.Profile>
        <S.Header>
          <Text>헤더 영역</Text>
        </S.Header>
        <S.AvatarBox>
          <S.Avatar />
          <Text>태그</Text>
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
          <Text>태그</Text>
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
            <WithLocalSvg asset={rightChevron} />
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
            <WithLocalSvg asset={rightChevron} />
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
            <WithLocalSvg asset={rightChevron} />
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
              <WithLocalSvg asset={share} />
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

export default MyPage;
