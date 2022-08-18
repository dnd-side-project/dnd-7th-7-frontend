import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './TagSelectSection.style';
import Tag from '@components/commons/Tag/Tag';
import { RECOMMENDED_TAGS_DATA, SECURE_TAGS_DATA } from '@hooks/utils';

const TagSelectSection = ({ category, data, tagProps, onPressTag, selectedData, pressedProps }) => {
  return (
    <View style={styles.container}>
      {data.map((tag, index) => {
        const handlePress = () => {
          onPressTag(tag.title);
        };

        return (
          <Tag
            onPress={handlePress}
            pressedStyle={pressedProps.style}
            pressedBgColor={pressedProps.bgColor}
            pressedTextColor={pressedProps.textColor}
            pressedTextSize={pressedProps.textSize}
            pressedTheme={pressedProps.theme}
            style={tagProps.style}
            bgColor={tagProps.bgColor}
            textColor={tagProps.textColor}
            textSize={tagProps.textSize}
            theme={tagProps.theme}
            key={index}
          >
            {tag.title}
          </Tag>
        );
      })}
    </View>
  );
};

export default TagSelectSection;
