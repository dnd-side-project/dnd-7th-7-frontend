import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStore = () => {
  /**
   * AsyncStorage에 key와 value 쌍으로 저장
   * @param {string} key
   * @param {any} value
   */
  const setStore = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('setStore error!', e);
    }
  };

  const getStore = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value == null) {
        console.log('Wrong key or No value');
      }
      return JSON.parse(value);
    } catch (e) {
      console.log('getStore error!', e);
    }
  };

  const getStoreAsFormData = async () => {
    const fd = new FormData();
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      result.forEach((el) => {
        console.log('value: ', el[1]);
        fd.append(el[0], el[1]);
      });
    } catch (error) {
      console.log('getStoreAsFormData error', error);
    }
    return fd;
  };

  const submitExampleForm = async () => {
    const fd = new FormData();
    const files = await AsyncStorage.getItem('files');

    try {
      fd.append('arrayOfPos', [
        {
          latitude: '37.33128013',
          longitude: '-122.03073774',
        },
        {
          latitude: '37.33117775',
          longitude: '-122.03072292',
        },
      ]);
      fd.append('runningTime', '01:01:01');
      fd.append('review', 'review example');
      fd.append('runningDate', '2022-01-01');
      fd.append('distance', '3.7');
      fd.append('routeImage', files[0]);
      fd.append('files', files);
      fd.append('firstLocation', '서울시');
      fd.append('secondLocation', '중랑구');
      fd.append('thirdLocation', '묵동');
      fd.append('recommendedTags', ['1', '2', '3']);
      fd.append('secureTags', ['1', '2', '3']);
      fd.append('mainRoute', 1);
    } catch (error) {
      console.log('submitExampleForm error', error);
    }
    return fd;
  };

  const removeAll = async () => {
    try {
      const savedUser = await AsyncStorage.clear();
    } catch (error) {
      console.log('removeAll error', error);
    }
  };
  return { setStore, getStore, getStoreAsFormData, submitExampleForm, removeAll };
};

export default useStore;
