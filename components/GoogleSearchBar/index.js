import React, { useRef, useState } from 'react';
import { Pressable } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import getEnvVars from '@/environment';
import { GooglePlacesAutocompleteStyles, IconWrapper, Wrapper } from './GoogleSearchBar.style';
import { globals } from '@styles/globals';
import BackBtn from '@assets/images/back.svg';
import CloseBtn from '@assets/images/close.svg';
import SearchBtn from '@assets/images/search.svg';
import useSearchRoutes from '../../querys/useSearchRoutes';

import { useSetRecoilState } from 'recoil';
import searchAddressLocationAtom from '@recoil/searchAddressLocation/atom';

const { GOOGLE_MAP_API_KEY } = getEnvVars();

const GoogleSearchBar = ({ goBack }) => {
  const setSearchedLocation = useSetRecoilState(searchAddressLocationAtom);
  const navigation = useNavigation();
  const ref = useRef();

  return (
    <Wrapper>
      <GooglePlacesAutocomplete
        ref={ref}
        placeholder="시/구까지 입력해 주세요"
        disableScroll={true}
        fetchDetails={true}
        isRowScrollable={false}
        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
        query={{
          key: GOOGLE_MAP_API_KEY,
          language: 'ko',
          components: 'country:kor',
        }}
        onPress={(data, details) => setSearchedLocation(details.geometry?.location)}
        renderLeftButton={() => (
          <IconWrapper>
            <SearchBtn
              width={20}
              height={20}
              fill={globals.colors.GREY_DEF_DARK}
              style={{ marginLeft: 10 }}
            />
          </IconWrapper>
        )}
        renderRightButton={() => (
          <IconWrapper>
            <Pressable>
              <CloseBtn
                width={15}
                height={15}
                fill={globals.colors.GREY_DEF_DARK}
                style={{ marginRight: 10 }}
              />
            </Pressable>
          </IconWrapper>
        )}
        textInputProps={{ placeholderTextColor: '#A5A5A5' }}
        styles={GooglePlacesAutocompleteStyles}
      />
      <Pressable onPress={() => goBack()}>
        <BackBtn style={{ marginLeft: 10 }} />
      </Pressable>
    </Wrapper>
  );
};

export default GoogleSearchBar;
