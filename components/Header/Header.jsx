import React, { useState } from 'react';
import { Pressable, SafeAreaView, StatusBar, TextInput, View } from 'react-native';
import { styles } from './Header.style';
import { globals } from '@styles/globals';
import { Font } from '@components/commons';
import CloseBtn from '@assets/images/close.svg';
import BackBtn from '@assets/images/back.svg';
import SearchBtn from '@assets/images/search.svg';

// left: 'logo'(default) | 'back' | string | null
// center: 'text' | null(default)
// right: 'close'(default) | 'search' | null
// pressLeft, pressRight: 각각 left === 'back'인 경우와 right === 'close'인 경우,
//                        press 할 때 실행되는 함수 props로 전달
const Header = (
  { left = 'logo', center, right = 'close', pressLeft, pressRight },
  { ...props },
) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.left}>
          {left === 'logo' ? (
            <Font weight={500}>Running map</Font>
          ) : left === 'back' ? (
            <Pressable onPress={pressLeft}>
              <BackBtn />
            </Pressable>
          ) : left !== null ? (
            <Font weight={500}>{left}</Font>
          ) : null}
        </View>

        <View style={styles.center}>
          <Font weight={500}>{center}</Font>
        </View>

        <View style={styles.right}>
          <Pressable onPress={pressRight}>
            {right === 'close' ? (
              <CloseBtn />
            ) : right === 'search' ? (
              <SearchBtn fill={'black'} />
            ) : null}
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
