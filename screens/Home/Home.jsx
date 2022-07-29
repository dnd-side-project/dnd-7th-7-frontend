import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';
import * as S from './Home.style';

function Home() {
  const navi = useNavigation();
  return (
    <S.Wrapper>
      <S.Text>Home Screen</S.Text>
      <Button title="Go to Recording Screen" onPress={() => navi.navigate('MyPage')} />
    </S.Wrapper>
  );
}

export default Home;
