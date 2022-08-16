import { globals } from '@styles/globals';
import styled from 'styled-components/native';

export const Title = styled.View`
  height: 94px;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px ${globals.layout.SCREEN_PADDING_HORIZ}px;
  margin-bottom: 40px;
`;

export const InputBox = styled.View`
  height: 80px;
  width: 100%;
  padding: 0 ${globals.layout.SCREEN_PADDING_HORIZ}px;
  margin-bottom: 30px;
`;
export const Input = styled.TextInput`
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  font-size: 14px;
`;
export const ButtonBox = styled.View`
  width: 100%;
  padding: 0 ${globals.layout.SCREEN_PADDING_HORIZ}px;
  height: 40px;
  justify-content: space-between;
  flex-direction: row;
`;
export const Button = styled.View`
  width: 167px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  border-radius: 5px;
  color: #c8c8c8;
`;
