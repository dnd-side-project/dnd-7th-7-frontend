import React, { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View, Dimensions } from 'react-native';
import { globals } from '@styles/globals.js';
import { Font } from '@components/commons';
import Plus from '@assets/images/plus.svg';

const ImageGridPicker = ({ registImage, data }) => {
  const gridWidth = (Dimensions.get('screen').width - globals.layout.SCREEN_PADDING_HORIZ * 2) / 4;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    add_btn: {
      backgroundColor: globals.colors.PRIMARY_LIGHT,
      width: gridWidth,
      height: gridWidth,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    flatList: {
      width: gridWidth * 4,
      flexDirection: 'row',
      marginHorizontal: 'auto',
      flexWrap: 'wrap',
    },
    img_wrap: {
      minWidth: gridWidth,
      maxWidth: gridWidth,
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      width: gridWidth,
      height: gridWidth,
      borderWidth: 5,
      borderColor: globals.colors.BACKGROUND,
      borderRadius: 10,
    },
  });

  const pickImage = () => {
    registImage({
      id: Math.floor(Math.random() * 100),
      uri: 'https://mblogthumb-phinf.pstatic.net/20130829_51/imck81_1377785987505pzoxN_JPEG/CKX_6294.JPG?type=w2',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.flatList}>
        <Pressable style={styles.add_btn} onPress={pickImage}>
          <Plus />
        </Pressable>
        {data.map((image, index) => (
          <View style={styles.img_wrap} key={index}>
            <Image style={styles.img} resizeMode="cover" source={{ uri: image.uri }} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default ImageGridPicker;
