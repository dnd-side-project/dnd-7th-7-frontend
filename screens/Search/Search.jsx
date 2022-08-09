import React from 'react';
import BottomModal from '@components/modals/BottomModal';
import * as S from './Search.style';

const Search = ({ navigation }) => {
  return (
    <S.Wrapper>
      <S.Text>Search Screen</S.Text>
      <BottomModal />
    </S.Wrapper>
  );
};

export default Search;
