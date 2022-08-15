import React from 'react';
import { FlatList, View } from 'react-native';
import { Font, Tag } from '@components/commons';
import { globals } from '@styles/globals.js';
import { styles } from './TrendingTags.style';
import useTagCount from '@hooks/useTagCount';

const TrendingTags = () => {
  const TAGS_DATA = [
    { index: 12, title: '안심 귀갓길이 있었어요' },
    { index: 13, title: '가로등이 10개 이상이라 밝았어요' },
    { index: 14, title: '동물이 없는 길이에요' },
    { index: 15, title: '저녁에도 사람들이 많았어요' },
    { index: 16, title: '안심 귀갓길이 있었어요' },
  ];

  const { tags, onPressTag } = useTagCount();

  console.log(tags);

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
        onPress={() => onPressTag(item.title)}
      >
        {item.title}
      </Tag>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Font size={20} weight={600}>
          실시간 인기 있는 안심 태그에요
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
