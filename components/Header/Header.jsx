import React, { useState } from 'react';
import { Pressable, SafeAreaView, StatusBar, TextInput, View } from 'react-native';
import { styles } from './Header.style';
import { globals } from '@styles/globals';
import { Font } from '@components/commons';
import CloseBtn from '@assets/images/close.svg';
import BackBtn from '@assets/images/back.svg';
import SearchBtn from '@assets/images/search.svg';
import SettingBtn from '@assets/images/Settings.svg';

// left: 'logo'(default) | 'back' | string | null
// center: 'text' | null(default)
// right: 'close'(default) | 'search' | 'setting' | null
// searchable: boolean
// pressLeft, pressRight: 각각 left === 'back'인 경우와 right === 'close'인 경우,
//                        press 할 때 실행되는 함수 props로 전달
// searchable === true인 경우 searcher가 나오고 onSearch 함수를 props로 전달해서 사용

const Header = (
  { left = 'logo', center, right = 'close', pressLeft, pressRight, searchable = false, onSearch },
  { ...props },
) => {
  const [input, setInput] = useState(null);

  const handleSubmit = () => {
    onSearch(input);
  };

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
            ) : right === 'setting' ? (
              <SettingBtn />
            ) : null}
          </Pressable>
        </View>
      </View>
      {searchable && (
        <View style={styles.searcherWrap}>
          <BackBtn style={{ marginRight: 10 }} />
          <View style={styles.searchBox}>
            <SearchBtn
              width={20}
              height={20}
              fill={globals.colors.GREY_DARKER}
              style={{ marginRight: 10 }}
            />
            <TextInput
              placeholder="시/구까지 입력해 주세요"
              placeholderTextColor={globals.colors.GREY_DARKER}
              onSubmitEditing={handleSubmit}
              onEndEditing={() => setInput(null)}
              value={input}
              onChangeText={setInput}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Header;
