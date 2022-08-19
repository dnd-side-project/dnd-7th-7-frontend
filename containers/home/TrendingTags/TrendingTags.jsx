import React from 'react';
import { FlatList, View } from 'react-native';
import { Font, Tag } from '@components/commons';
import { globals } from '@styles/globals.js';
import { styles } from './TrendingTags.style';
import { SECURE_TAGS_DATA } from '@hooks/utils';

const TrendingTags = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Font size={20} weight={600}>
          실시간 인기 있는 안심 태그에요
        </Font>
      </View>
      <View style={{ marginBottom: 35 }}>
        {SECURE_TAGS_DATA.filter((tag, index) => index < 3).map((tag, index) => {
          return (
            <View style={styles.tags_wrap} key={index}>
              <View style={styles.rank}>
                <Font size={14}>{index + 1}</Font>
              </View>
              <Tag
                theme={'rounded'}
                textSize={14}
                bgColor={globals.colors.PRIMARY_LIGHT}
                textColor={globals.colors.PRIMARY_DARKER}
                borderWidth={1}
                onPress={() => {}}
                borderColor={globals.colors.PRIMARY_DEF}
              >
                {tag.title}
              </Tag>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default TrendingTags;
