import React, { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { styles } from './SearchBar.style';
import { globals } from '@styles/globals';
import { Font } from '@components/commons';
import CloseBtn from '@assets/images/close.svg';
import SearchBtn from '@assets/images/search.svg';
import { useNavigation } from '@react-navigation/native';

const SearchBar = (
  { left = 'logo', center, right = 'close', pressLeft, pressRight, onSearch },
  { ...props },
) => {
  const [input, setInput] = useState(null);
  const navigation = useNavigation();
  const handleSubmit = () => {
    onSearch(input);
  };

  return (
    <View style={styles.searcherWrap}>
      <View style={styles.searchBox}>
        <SearchBtn
          width={20}
          height={20}
          fill={globals.colors.GREY_DEF_DARK}
          style={{ marginRight: 10 }}
        />
        <TextInput
          placeholder="시/구까지 입력해 주세요"
          placeholderTextColor={globals.colors.GREY_DEF_DARK}
          onSubmitEditing={handleSubmit}
          onEndEditing={() => setInput(null)}
          value={input}
          onChangeText={setInput}
        />
      </View>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <CloseBtn style={{ marginLeft: 10 }} />
      </Pressable>
    </View>
  );
};

export default SearchBar;
