import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button } from 'react-native';

import * as S from './Recording.style';

const Recording = () => {
  const [count, setCount] = useState(0);
  const navi = useNavigation();
  return (
    <S.Wrapper>
      <Button title="press" onPress={() => setCount(count + 1)} />
      <S.Text>{count}</S.Text>
      <Button title="go home" onPress={() => navi.navigate('Home')} />
    </S.Wrapper>
  );
};

export default Recording;
