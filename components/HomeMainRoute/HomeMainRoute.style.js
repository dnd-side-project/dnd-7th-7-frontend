import styled from 'styled-components/native';
import { globals } from '@styles/globals';

export const Container = styled.View`
  width: 100%;
  height: 280px;
  border-radius: 20px;
  background-color: grey;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  border-radius: 20;
`;

export const Header = styled.View`
  width: 100%;
  height: 64px;
  padding: 10px 20px;

  border-radius: 20px
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  background-color: #000000;
  opacity: 0.7;
`;

export const Title = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
`;

export const Distance = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Location = styled.View`
  width: 158px;
  height: 30px;
  padding: 6px;

  background-color: #484848;
  opacity: 0.7;

  position: absolute;
  left: 0;
  bottom: 0;
  margin: 13px 10px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 10px;
`;
