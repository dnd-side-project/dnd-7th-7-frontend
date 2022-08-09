import React from 'react';
import Button from '@components/Button';
import * as S from './OnBoarding.style.js';

const OnBoarding = ({ navigation }) => {
  return (
    <S.Wrapper>
      <S.Text>Onboarding Screen</S.Text>
      <Button title={'Home으로 이동'} onPress={() => navigation.navigate('afterOnboarding')} />
    </S.Wrapper>
  );
};

export default OnBoarding;
