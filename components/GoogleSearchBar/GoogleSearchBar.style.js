import styled from 'styled-components/native';
import { globals } from '@styles/globals';

export const Wrapper = styled.View`
  background-color: #ffffff;

  height: 40px;
  margin: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  z-index: 999;
`;

export const IconWrapper = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GooglePlacesAutocompleteStyles = {
  container: {
    backgroundColor: globals.colors.GREY_LIGHT,
    height: 40,
    borderRadius: 10,
  },
  textInputContainer: {
    height: 40,
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: globals.colors.GREY_LIGHT,
    height: 40,
  },
  listView: {
    position: 'absolute',
    top: 50,
  },
  row: { borderBottomWidth: 1, borderColor: globals.colors.GREY_LIGHT },
  poweredContainer: {
    display: 'none',
  },
};
