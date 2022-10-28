import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';

import { styles } from './Search.style';
import { globals } from '@styles/globals';

import TagsInModal from '@containers/Recording/TagsInModal';
import { Font, BottomModal } from '@components/commons';
import GoogleSearchBar from '@components/GoogleSearchBar';
import SubHeader from '@components/commons/SubHeader';
import MapForSearch from '@components/MapForSearch';

import locationAtom from '@recoil/location';
import { useRecoilValue } from 'recoil';

const Search = ({ navigation, route }) => {
  const [searchBarInput, setSearchBarInput] = useState('');
  const [tagsModalVisible, setTagsModalVisible] = useState(false);
  // 나중에 MapView에서 마커 클릭 이벤트에 setClickedMark 삽입
  const [clickedMark, setClickedMark] = useState(1);
  const currentLoc = useRecoilValue(locationAtom);

  const tagsModalClose = () => {
    setTagsModalVisible(false);
  };

  const tagsModalOpen = () => {
    setTagsModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoogleSearchBar />
      <SubHeader onPress={tagsModalOpen} />
      <MapForSearch currentLocation={currentLoc} />

      <BottomModal visible={tagsModalVisible} close={tagsModalClose} bgOpacity={0.2}>
        <TagsInModal routeId={clickedMark} />
      </BottomModal>
    </SafeAreaView>
  );
};

export default Search;
