import React from 'react';
import { View, ScrollView } from 'react-native';
import { Font, Tag } from '@components/commons';
import { globals } from '@styles/globals.js';
import { styles } from './TrendingTags.style';
import { SECURE_TAGS_DATA } from '@hooks/utils';

const TrendingTags = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Font size={20} weight={600}>
          실시간 인기 있는 태그에요
        </Font>
      </View>
      <ScrollView horizontal={true} style={styles.tag_ranking}>
        <View style={{ marginBottom: 35, marginRight: 15 }}>
          {SECURE_TAGS_DATA.filter((tag, index) => tag.index <= 3).map((tag, index) => {
            return (
              <View style={styles.tags_wrap} key={index}>
                <View style={styles.rank}>
                  <Font size={14}>{tag.index}</Font>
                </View>
                <Tag
                  style={{ paddingHorizontal: 20, paddingVertical: 9 }}
                  theme={'rounded'}
                  textSize={14}
                  bgColor={globals.colors.PRIMARY_LIGHT}
                  textColor={globals.colors.PRIMARY_DARKER}
                  borderWidth={1}
                  borderColor={globals.colors.PRIMARY_DEF}
                >
                  {tag.title}
                </Tag>
              </View>
            );
          })}
        </View>
        <View style={{ marginBottom: 35 }}>
          {SECURE_TAGS_DATA.filter((tag, index) => tag.index > 3).map((tag, index) => {
            return (
              <View style={styles.tags_wrap} key={index}>
                <View style={styles.rank}>
                  <Font size={14}>{tag.index}</Font>
                </View>
                <Tag
                  style={{ paddingHorizontal: 20, paddingVertical: 9 }}
                  theme={'rounded'}
                  textSize={14}
                  bgColor={globals.colors.PRIMARY_LIGHT}
                  textColor={globals.colors.PRIMARY_DARKER}
                  borderWidth={1}
                  borderColor={globals.colors.PRIMARY_DEF}
                >
                  {tag.title}
                </Tag>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default TrendingTags;
