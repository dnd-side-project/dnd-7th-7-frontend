import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';
import * as S from './Search.style';

const Search = ({ navigation }) => {
  const navi = useNavigation();
  return (
    <S.Wrapper>
      <S.Text>Search Screen</S.Text>
      <Button
        title={'경로 기록하기'}
        onPress={() => {
          navigation.navigate('Recording');
        }}
      />
    </S.Wrapper>
  );
};

export default Search;
