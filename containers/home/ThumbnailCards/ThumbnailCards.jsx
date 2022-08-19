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

    // <FlatList
    //   scrollEnabled={false}
    //   horizontal={false}
    //   numColumns={numOfCards}
    //   data={data}
    //   renderItem={({ item, index }) => (
    //     // 일단 3장까지만 보여주기
    //     <ThumbnailCard url={item.url} index={index + 1} numColumns={numOfCards} />
    //   )}
    //   keyExtractor={(item, index) => index}
    // />
  );
};

export default ThumbnailCards;
