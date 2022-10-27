import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import getEnvVars from '@/environment';
import { Wrapper } from './GoogleSearchBar.style';
import { globals } from '@styles/globals';
import BackBtn from '@assets/images/back.svg';
import CloseBtn from '@assets/images/close.svg';
import SearchBtn from '@assets/images/search.svg';

const { GOOGLE_MAP_API_KEY } = getEnvVars();

const GoogleSearchBar = () => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <GooglePlacesAutocomplete
        placeholder="시/구까지 입력해 주세요"
        disableScroll={true}
        fetchDetails={true}
        isRowScrollable={false}
        query={{
          key: GOOGLE_MAP_API_KEY,
          language: 'ko',
          components: 'country:kor',
        }}
        onPress={(data, details) => console.log(details.geometry?.location)}
        renderLeftButton={() => (
          <SearchBtn
            width={20}
            height={20}
            fill={globals.colors.GREY_DEF_DARK}
            style={{ marginLeft: 10, alignSelf: 'center', position: 'relative', top: -2 }}
          />
        )}
        renderRightButton={() => (
          <Pressable onPress={() => this.textInput.clear()}>
            <CloseBtn
              width={15}
              height={15}
              fill={globals.colors.GREY_DEF_DARK}
              style={{ marginRight: 10, alignSelf: 'center', position: 'relative', top: 17 }}
            />
          </Pressable>
        )}
        textInputProps={{ placeholderTextColor: '#A5A5A5' }}
        styles={{
          container: {
            backgroundColor: globals.colors.GREY_LIGHT,
            borderRadius: 10,
          },
          textInputContainer: {
            borderRadius: 10,
          },
          textInput: {
            backgroundColor: globals.colors.GREY_LIGHT,
          },
          listView: {
            position: 'absolute',
            top: 50,
          },
          row: { borderBottomWidth: 1, borderColor: globals.colors.GREY_LIGHT },
          poweredContainer: {
            display: 'none',
          },
        }}
      />
      <Pressable onPress={() => navigation.navigate('Home')}>
        <BackBtn style={{ marginLeft: 10 }} />
      </Pressable>
    </Wrapper>
  );
};

export default GoogleSearchBar;
