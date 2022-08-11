import React from 'react';
import { Button } from 'react-native';
import * as S from './OnBoarding.style.js';

const OnBoarding = ({ navigation }) => {
  return (
    <S.Wrapper>
      <S.Text>Onboarding Screen</S.Text>
      <Button title="skip" onPress={() => navigation.navigate('afterOnboarding')} />
    </S.Wrapper>
  );
};

export default OnBoarding;
