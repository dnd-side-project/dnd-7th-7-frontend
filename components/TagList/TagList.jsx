import React from 'react';
import Tag from '../Tag';
import * as S from './TagList.style';

const TagList = () => {
  return (
    <S.Wrapper>
      {/* SectionList를 활용하여 <Tag /> 컴포넌트 렌더링  */}
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
    </S.Wrapper>
  );
};

export default TagList;
