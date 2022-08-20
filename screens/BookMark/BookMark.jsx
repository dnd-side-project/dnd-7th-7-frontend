import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../../components/Header';
import BookMarkMain from './BookMarkMain/BookMarkMain';

const BookMarkStack = createNativeStackNavigator();

const BookMark = () => {
  return (
    <BookMarkStack.Navigator>
      <BookMarkStack.Screen
        options={{
          header: (
            { navigation }, // 기본 navigation props도 사용 가능합니다
          ) => <Header navigation={navigation} left="책갈피" right={null} />,
        }}
        component={BookMarkMain}
        name="BookMarkMain"
      ></BookMarkStack.Screen>
    </BookMarkStack.Navigator>
  );
};

const style = StyleSheet.create({
  container: {},
});

export default BookMark;
