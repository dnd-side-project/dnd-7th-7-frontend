import React, { useState } from 'react';
import BottomModal from '@components/modals/BottomModal';
import * as S from './Search.style';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

const Search = ({ navigation }) => {
  const [visible, setVisible] = useState(true);

  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  return (
    <S.Wrapper>
      <S.Text>Search Screen</S.Text>
      <Button title={'modal open'} onPress={open} />
      <BottomModal visible={visible} close={close} bgOpacity={0.5}>
        <Text style={{ height: 100 }}>Test Modal</Text>
        <Text style={{ height: 100 }}>Test Modal</Text>
        <Text style={{ height: 100 }}>Test Modal</Text>
        <Text style={{ height: 100 }}>Test Modal</Text>
        <Text style={{ height: 100 }}>Test Modal</Text>
      </BottomModal>
    </S.Wrapper>
  );
};

export default Search;
