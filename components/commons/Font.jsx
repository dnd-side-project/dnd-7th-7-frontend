import React from 'react';
import { StyleSheet, Text } from 'react-native';
import globals from '@styles/globals.js';

const setWeight = (weight) => {
  if (weight < 400) {
    return 'Pretendard-Light';
  } else if (weight < 500) {
    return 'Pretendard-Regular';
  } else if (weight < 600) {
    return 'Pretendard-Medium';
  } else if (weight < 700) {
    return 'Pretendard-SemiBold';
  } else {
    return 'Pretendard-Bold';
  }
};

const Font = ({ children, ...props }) => {
  const styles = StyleSheet.create({
    text: {
      ...props.style,
      fontSize: props.size ? props.size : 16,
      fontFamily: props.weight ? setWeight(props.weight) : 'Pretendard-Light',
      color: props.color,
      lineHeight: props.lineHeight,
    },
  });

  return <Text style={[styles.text, props.style]}>{children}</Text>;
};

export default Font;
