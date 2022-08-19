import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './TagSelectSection.style';
import { RECOMMENDED_TAGS_DATA, SECURE_TAGS_DATA } from '@hooks/utils';
import { ToggleTag, Tag } from '@components/commons';

const TagSelectSection = ({
  selectable = false,
  category,
  data,
  tagProps,
  onPressTag,
  selectedData,
  pressedProps = null,
}) => {
  return (
    <View style={styles.container}>
      {data.map((tag, index) => {
        const handlePress = () => {
          onPressTag(tag.title);
        };

        return selectable ? (
          <ToggleTag
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
          </ToggleTag>
        ) : (
          <Tag
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
