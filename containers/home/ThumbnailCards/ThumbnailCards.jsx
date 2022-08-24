import React from 'react';
import { View, FlatList, VirtualizedList, SafeAreaView } from 'react-native';
import ThumbnailCard from './ThumbnailCard';

const ThumbnailCards = ({ data }) => {
  const numOfCards = data.length;
  return (
    <View style={{ flexDirection: 'row' }}>
      {data.map((url, index) => (
        <ThumbnailCard url={url} index={index + 1} numColumns={numOfCards} key={index} />
      ))}
    </View>
  );
};

export default ThumbnailCards;
