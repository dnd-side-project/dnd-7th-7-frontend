import styled from 'styled-components/native';
import { globals } from '@styles/globals';

export const StartRunning = styled.View`
  height: 70px;
  width: 100%;
  padding: 0 ${globals.layout.SCREEN_PADDING_HORIZ}px;
  margin-bottom: 60px;
`;

export const TagBox = styled.View`
  width: 100%;
  height: 110px;
  flex-direction: row;
  flex-wrap: wrap;
`;
