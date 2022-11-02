import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';

import { styles } from './Search.style';
import { globals } from '@styles/globals';

import TagsInModal from '@containers/Recording/TagsInModal';
import { Font, BottomModal } from '@components/commons';
import GoogleSearchBar from '@components/GoogleSearchBar';
import SubHeader from '@components/commons/SubHeader';
import MapForSearch from '@components/MapForSearch';

import { useRecoilState, useRecoilValue } from 'recoil';
import locationAtom from '@recoil/location';
import searchAddressLocationAtom from '@recoil/searchAddressLocation/atom';

import { CommonActions } from '@react-navigation/native';

import useSearchRoutes from '@querys/useSearchRoutes';

const Search = ({ navigation, route }) => {
  const [tagsModalVisible, setTagsModalVisible] = useState(false);
  const [clickedMark, setClickedMark] = useState(1);
  const currentLoc = useRecoilValue(locationAtom);
  const [searchedLocation, setSearchedLocation] = useRecoilState(searchAddressLocationAtom);
  const { data, isLoading, isError } = useSearchRoutes(searchedLocation);

  const tagsModalClose = () => {
    setTagsModalVisible(false);
  };

  const tagsModalOpen = () => {
    setTagsModalVisible(true);
  };

  const goBack = () => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
    navigation.dispatch(resetAction);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      setSearchedLocation(null);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <GoogleSearchBar goBack={goBack} />
      <SubHeader onPress={tagsModalOpen} />
      <MapForSearch currentLocation={currentLoc} searchedRouteList={data} />

      <BottomModal visible={tagsModalVisible} close={tagsModalClose} bgOpacity={0.2}>
        <TagsInModal routeId={clickedMark} />
      </BottomModal>
    </SafeAreaView>
  );
};

export default Search;
