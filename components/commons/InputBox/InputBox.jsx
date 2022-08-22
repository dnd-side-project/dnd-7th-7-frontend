import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { globals } from '@styles/globals.js';

const InputBox = ({ onChange, placeholderColor, placeholder, ...props }) => {
  return (
    <TextInput
      style={[styles.container, props.style]}
      placeholderTextColor={placeholderColor}
      placeholder={placeholder}
      onChangeText={onChange}
      multiline
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    lineHeight: 21,
  },
});

export default InputBox;
