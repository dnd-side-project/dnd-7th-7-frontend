import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStore = () => {
  const fd = new FormData();
  /**
   * AsyncStorage에 key와 value 쌍으로 저장
   * @param {string} key
   * @param {any} value
   */
  const setStore = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
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

  const submitForm = async () => {
    try {
      const item = await AsyncStorage.getItem(runningRecords);

      console.log(item);

      // await AsyncStorage.clear();
    } catch (error) {
      console.log('submit', error);
    }
  };

  return { setStore, getStore, submitForm };
};

export default useStore;
