import React from 'react';
import { globals } from '@styles/globals';

import { Image, View } from 'react-native';
import { Font } from '@components/commons';

const ThumbnailCard = ({ url, numColumns, index }) => {
  return (
    <View
      style={{
        display: index > 3 && 'none',
        flex: numColumns === 3 ? 1 : numColumns === 2 ? numColumns - index / numColumns : 1,
        justifyContent: 'space-between',
        marginRight: index === numColumns || index > 2 ? 0 : 10,
        overflow: 'hidden',
        borderRadius: 10,
      }}
    >
      {numColumns > 3 && index > 2 && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 999,
          }}
        >
          <Font color={globals.colors.WHITE} size={24} weight={600}>
            +3
          </Font>
        </View>
      )}
      <Image
        resizeMode="cover"
        style={{
          height: 108,
          backgroundColor: globals.colors.GREY_DEF_LIGHT,
          transform: [{ scale: 1.5 }],
        }}
        source={{ uri: url }}
      />
    </View>
  );
};

export default ThumbnailCard;
