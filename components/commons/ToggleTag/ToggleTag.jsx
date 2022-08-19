import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Font from '../Font';
import { globals } from '@styles/globals.js';

// theme: 'angled' || 'rounded' (default: 'rounded')
// bgColor, textColor (default: globals.colors.GREY_DARKER), borderColor: string
// textSize, textWeight: number
// borderWidth: null || number (default: 0.5)
// style: StyleSheet
// opPress: () => {}

const ToggleTag = ({
  theme = 'rounded',
  textColor = globals.colors.GREY_DARKER,
  onPress,
  ...props
}) => {
  const [changable, setChangable] = useState(false);
  const handlePress = () => {
    onPress();
    props.pressedStyle && setChangable(!changable);
  };
  const styles = StyleSheet.create({
    button: {
      paddingHorizontal: 12,
      paddingVertical: 6.5,
      backgroundColor: props.bgColor ? props.bgColor : globals.colors.GREY_LIGHT,
      borderRadius: theme === 'rounded' ? 30 : 10,
      borderWidth: !props.borderWidth ? 0 : props.borderWidth ? props.borderWidth : 0.5,
      borderColor: props.borderColor && props.borderColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    changedButton: {
      backgroundColor: props.pressedBgColor,
    },
  });

  return (
    <Pressable
      style={
        !changable
          ? [styles.button, props.style]
          : [styles.button, props.pressedStyle, styles.changedButton]
      }
      onPress={handlePress}
    >
      <Font
        color={props.pressedBgColor && changable ? props.pressedTextColor : textColor}
        size={props.textSize}
        weight={props.textWeight}
      >
        {props.children}
      </Font>
    </Pressable>
  );
};

export default ToggleTag;
