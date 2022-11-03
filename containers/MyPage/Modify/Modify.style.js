import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const TitleBox = styled.View`
  width: 100%;
  height: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  margin-bottom: 20px;
`;

export const Title = styled.View`
  width: 100%;
  height: 30px;
`;
export const StartRunning = styled.View`
  height: 70px;
  width: 100%;
  margin-bottom: 30px;
`;

export const TagBox = styled.View`
  width: 100%;
  height: 110px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const styles = StyleSheet.create({
  selects: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  select: {
    width: 160,
    paddingBottom: 6,
    marginBottom: 35,
    borderBottomColor: globals.colors.GREY_LIGTH_DARK,
    borderBottomWidth: 1,
    borderWidth: 0,
  },
  button: {
    marginBottom: 23,
    flex: 1,
    justifyContent: 'flex-end',
  },
});
