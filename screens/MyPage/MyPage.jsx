import React from 'react';
import useLocation from '../../hooks/useLoaction';
import * as S from './MyPage.style';

const MyPage = () => {
  const { status, location } = useLocation();
  console.log('location: ', location, 'status: ', status);
  return (
    <S.Wrapper>
      <S.Text>MyPage screen</S.Text>
    </S.Wrapper>
  );
};

export default MyPage;
