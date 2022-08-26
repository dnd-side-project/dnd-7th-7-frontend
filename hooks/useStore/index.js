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
        console.log('value: ', typeof el[1]);
        fd.append(el[0], el[1]);
      });
    } catch (error) {
      console.log('changeToFormData error', error);
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

  return { setStore, getStore, getStoreAsFormData, removeAll };
};

export default useStore;
