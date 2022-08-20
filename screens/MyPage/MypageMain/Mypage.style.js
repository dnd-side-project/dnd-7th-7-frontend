import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { globals } from '@styles/globals';

export const Wrapper = styled.View``;

export const Text = styled.Text`
  color: black;
`;

export const Header = styled.View`
  height: 30px;
`;

// 프로필 박스
export const Profile = styled.View`
  background-color: #fafafa;
  height: 250px;
  width: ${Dimensions.get('window').width};
  padding: 16px ${globals.layout.SCREEN_PADDING_HORIZ}px;
`;

export const AvatarBox = styled.View`
  width: 100%;
  height: 96px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 12px;
`;

export const Avatar = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #d9d9d9;
`;

export const UserBox = styled.View`
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const UserNameBox = styled.View`
  height: 60px;
  width: 50%;
  justify-content: space-between;
  align-items: flex-start;
`;

// 기록 메뉴들
export const Record = styled.View`
  height: 270px;
  width: 100%;
  padding: 0 16px;
`;

export const RouteRecord = styled.View`
  height: 58px;
  width: 100%;
  padding: 17px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const RouteRecordMain = styled.View`
  width: 100%;
  height: 127px;
  background-color: #21a345;
  padding: 20px 15px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const RouteRecordInformation = styled.View`
  height: 52px;
  width: 70%;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ShareLayout = styled.View`
  width: 100%;
  height: 55px;
  padding: 0 ${globals.layout.SCREEN_PADDING_HORIZ}px;
`;

export const ShareBox = styled.View`
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 18px 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ShareGraphic = styled.View`
  height: 32px;
  width: 80px;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
`;
