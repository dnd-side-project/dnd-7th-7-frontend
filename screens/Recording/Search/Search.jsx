import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import { styles } from './Search.style';
import { globals } from '@styles/globals';
import { Font, BottomModal } from '@components/commons';
import SearchBar from '@components/SearchBar/SearchBar';
import TagsInModal from '@containers/Recording/TagsInModal';

const Search = ({ navigation, route }) => {
  const [searchBarInput, setSearchBarInput] = useState('');
  const [tagsModalVisible, setTagsModalVisible] = useState(false);
  // 나중에 MapView에서 마커 클릭 이벤트에 setClickedMark 삽입
  const [clickedMark, setClickedMark] = useState(1);

  const tagsModalOpen = () => {
    setTagsModalVisible(true);
  };
  const tagsModalClose = () => {
    setTagsModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={setSearchBarInput} />
      <View style={styles.map_view}>
        <Pressable style={styles.marker_example} onPress={tagsModalOpen}>
          <Font textColor={globals.colors.BLACK}>MARKER</Font>
          <Font textColor={globals.colors.BLACK}>CLICK</Font>
        </Pressable>
      </View>
      <BottomModal visible={tagsModalVisible} close={tagsModalClose} bgOpacity={0.2}>
        <TagsInModal routeId={clickedMark} />
      </BottomModal>
    </SafeAreaView>
  );
};

export default Search;
