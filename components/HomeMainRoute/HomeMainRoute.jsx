import React from 'react';
import { Container, Distance, Header, Title, Background, Location } from './HomeMainRoute.style';

import Shield from '@assets/images/shield.svg';
import RightArrow from '@assets/images/angle_right_circle.svg';
import Marker from '@assets/images/mini_marker_white.svg';

import { Photo } from '@screens/Search/SearchMain/Search.style';
import { Font, Tag } from '@components/commons';

const HomeMainRoute = ({ data }) => {
  return (
    <Container>
      <Background
        style={{ flex: 1 }}
        imageStyle={{ borderRadius: 20 }}
        // source={{ uri: data.routeImage }}
        source={{ uri: 'https://reactjs.org/logo-og.png' }}
      >
        <Header>
          <Title>
            <Font color={'white'} size={18} weight={500} style={{ marginRight: 8 }}>
              경로 제목 경로 제목
            </Font>
            <Shield />
          </Title>
          <Distance>
            <Font color={'white'} size={14} weight={500}>
              왕복 3.8km
            </Font>
            <RightArrow />
          </Distance>
        </Header>
        <Location>
          <Marker fill={'#248394'} stroke={'#248394'} />
          <Font size={14} color={'white'} style={{ marginLeft: 4 }}>
            서울시 광진구 뚝섬로
          </Font>
        </Location>
      </Background>
    </Container>
  );
};

export default HomeMainRoute;
