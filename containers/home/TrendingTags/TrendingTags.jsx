import React from 'react';
import TagList from '@components/TagList';
import * as S from './TrendingTags.style';

const TrendingTags = () => {
  return (
    <S.Wrapper>
      <S.Text>지금 인기있는 태그에요</S.Text>
      <TagList />
    </S.Wrapper>
  );
};

export default TrendingTags;
