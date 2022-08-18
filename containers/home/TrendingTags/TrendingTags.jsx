import React from 'react';
import { FlatList, View } from 'react-native';
import { Font, Tag } from '@components/commons';
import { globals } from '@styles/globals.js';
import { styles } from './TrendingTags.style';
import useTagCount from '@hooks/useTagCount';
import { SECURE_TAGS_DATA } from '@hooks/utils';

const TrendingTags = () => {
  const [tags, onPressTag] = useTagCount();

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
        data={SECURE_TAGS_DATA}
        keyExtractor={(tag, index) => tag + index}
        renderItem={renderTag}
        horizontal={true}
      />
    </View>
  );
};

export default TrendingTags;
