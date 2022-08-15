import React from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import { styles } from './Header.style';
import { Font } from '@components/commons';
import CloseBtn from '@assets/images/close.svg';
import BackBtn from '@assets/images/back.svg';
import SearchBtn from '@assets/images/search.svg';

// left: 'logo'(default) | 'back' | null
// center: 'text' | null(default)
// right: 'close'(default) | 'search' | null
// pressLeft, pressRight: default로 실행되는 동작 말고 다른 함수를 실행하고 싶을 때 props로 전달하는 함수
const Header = (
  { left = 'logo', center, right = 'close', pressLeft, pressRight, searchable = false },
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
      {/* {searchable && (
        <View style={styles.searcher}>
          <View style={styles.box}>
            <SearchBtn />
          </View>
          <CloseBtn />
        </View>
      )} */}
    </SafeAreaView>
  );
};

export default Header;
