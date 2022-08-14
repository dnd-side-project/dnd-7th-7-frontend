import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Font from '../Font';
import { globals } from '@styles/globals.js';

// theme: 'angled' || 'rounded'
// bgColor, textColor, borderColor: string
// textSize: number
// borderWidth: null || number
// style: StyleSheet
const Tag = ({ theme = 'rounded', textColor = globals.colors.GREY_DARKER, children, ...props }) => {
  const styles = StyleSheet.create({
    button: {
      paddingHorizontal: 12,
      paddingVertical: 6.5,
      backgroundColor: props.bgColor ? props.bgColor : globals.colors.GREY_LIGHT,
      borderRadius: props.theme === 'rounded' ? 30 : 10,
      borderWidth: !props.borderWidth ? 0 : props.borderWidth ? props.borderWidth : 0.5,
      borderColor: props.borderColor && props.borderColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <Pressable style={[styles.button, props.style]}>
      <Font color={textColor} size={props.textSize}>
        {children}
      </Font>
    </Pressable>
  );
};

export default Tag;
