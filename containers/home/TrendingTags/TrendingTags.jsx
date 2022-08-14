import React from 'react';
import { FlatList, View } from 'react-native';
import { Font, Tag } from '@components/commons';
import { globals } from '@styles/globals.js';
import { styles } from './TrendingTags.style';

const TrendingTags = () => {
  const TAGS_DATA = [
    '안심 귀갓길이 있었어요',
    '안심 귀갓길이',
    '안심 귀갓길이 있었어요',
    '안심 귀갓길이 있었어요',
    '안심 귀갓길이 있었어요',
  ];

  const renderTag = ({ item }) => {
    return (
      <Tag
        theme={'rounded'}
        textSize={14}
        bgColor={globals.colors.PRIMARY_LIGHT}
        textColor={globals.colors.PRIMARY_DARKER}
        borderWidth={1}
        borderColor={globals.colors.PRIMARY_DEF}
        style={{ marginRight: 10 }}
      >
        {item}
      </Tag>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Font size={20} weight={600}>
          실시간 인기 있는 태그에요
        </Font>
      </View>

      <FlatList
        style={styles.tags}
        data={TAGS_DATA}
        keyExtractor={(tag, index) => tag + index}
        renderItem={renderTag}
        horizontal={true}
      />
      {/* 두 줄로 나누기 리스트 */}
    </View>
  );
};

export default TrendingTags;
