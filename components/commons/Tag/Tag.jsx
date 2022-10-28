import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Font from '../Font';
import { globals } from '@styles/globals.js';
import { LinearGradient } from 'expo-linear-gradient';

// theme: 'angled' || 'rounded' (default: 'rounded')
// bgColor, textColor (default: globals.colors.GREY_DARKER), borderColor: string
// textSize, textWeight: number
// borderWidth: null || number (default: 0.5)
// style: StyleSheet
// opPress: () => {}
// linearGradient: ["시작 컬러", "끝 컬러"] (default: false)

const Tag = ({
  theme = 'rounded',
  textColor = globals.colors.GREY_DARKER,
  onPress,
  icon,
  linearGradient,
  ...props
}) => {
  const styles = StyleSheet.create({
    button: {
      paddingHorizontal: 12,
      paddingVertical: 6.5,
      backgroundColor: props.bgColor ? props.bgColor : globals.colors.GREY_LIGHT,
      borderRadius: theme === 'rounded' ? 30 : 10,
      borderWidth: !props.borderWidth ? 0 : props.borderWidth ? props.borderWidth : 0.5,
      borderColor: props.borderColor && props.borderColor,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return linearGradient ? (
    <LinearGradient style={{ ...styles.button, ...props.style }} colors={[...linearGradient]}>
      <Pressable style={{ backgroundColor: 'transparent' }} onPress={onPress}>
        {icon && icon}
        <Font color={textColor} size={props.textSize} weight={props.textWeight}>
          {props.children}
        </Font>
      </Pressable>
    </LinearGradient>
  ) : (
    <Pressable style={[styles.button, props.style]} onPress={onPress}>
      {icon && icon}
      <Font color={textColor} size={props.textSize} weight={props.textWeight}>
        {props.children}
      </Font>
    </Pressable>
  );
};

export default Tag;
