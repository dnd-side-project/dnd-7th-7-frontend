import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import { styles } from './Search.style';
import { globals } from '@styles/globals';
import TagsInModal from '@containers/Recording/TagsInModal';
import { Font, BottomModal } from '@components/commons';
import SearchBar from '@components/SearchBar/SearchBar';
import SubHeader from '@components/commons/SubHeader';
import MapForSearch from '@components/MapForSearch';

import locationAtom from '@recoil/location';
import { useRecoilValue } from 'recoil';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import getEnvVars from '@/environment';

const Search = ({ navigation, route }) => {
  const [searchBarInput, setSearchBarInput] = useState('');
  const [tagsModalVisible, setTagsModalVisible] = useState(false);
  // 나중에 MapView에서 마커 클릭 이벤트에 setClickedMark 삽입
  const [clickedMark, setClickedMark] = useState(1);
  const currentLoc = useRecoilValue(locationAtom);
  const { GOOGLE_MAP_API_KEY } = getEnvVars();

  const tagsModalClose = () => {
    setTagsModalVisible(false);
  };

  const tagsModalOpen = () => {
    setTagsModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="시/구까지 입력해 주세요"
        query={{ key: GOOGLE_MAP_API_KEY, language: 'ko' }}
        onPress={(data, details) => console.log(data, details)}
      />
      <SearchBar onSearch={setSearchBarInput} />
      <SubHeader onPress={tagsModalOpen} />
      <MapForSearch currentLocation={currentLoc} />

      <BottomModal visible={tagsModalVisible} close={tagsModalClose} bgOpacity={0.2}>
        <TagsInModal routeId={clickedMark} />
      </BottomModal>
    </SafeAreaView>
  );
};

export default Search;
