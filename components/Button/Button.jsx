import React from 'react';
import { Text } from 'react-native';
import * as S from './Button.style';

// 추후 비슷한 버튼 디자인이 반복적으로 쓰일 예정이라면
// 여러 theme으로 제작해놓겠습니다.
const Button = ({ title, onPress, style, theme, size }) => {
  return (
    <S.Btn onPress={onPress} theme={theme} size={size} style={style}>
      <Text>{title}</Text>
    </S.Btn>
  );
};

export default Button;
