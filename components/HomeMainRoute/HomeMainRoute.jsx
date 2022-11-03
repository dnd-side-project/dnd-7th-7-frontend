import React from 'react';
import { Container, Distance, Header, Title, Background, Location } from './HomeMainRoute.style';

import Shield from '@assets/images/shield.svg';
import RightArrow from '@assets/images/angle_right_circle.svg';
import Marker from '@assets/images/mini_marker_white.svg';
import { Font, Tag } from '@components/commons';
import { useNavigation } from '@react-navigation/native';

const HomeMainRoute = (data) => {
  const route = data.data;
  const navigation = useNavigation();
  return (
    <Container
      onPress={() =>
        navigation.push('HomeRouteDetail', {
          data: route,
        })
      }
    >
      <Background imageStyle={{ borderRadius: 20 }} source={{ uri: route.files[0] }}>
        <Header>
          <Title>
            <Font color={'white'} size={18} weight={500} style={{ marginRight: 8 }}>
              {route.routeName}
            </Font>
            <Shield />
          </Title>
          <Distance>
            <Font color={'white'} size={14} weight={500}>
              {`왕복 ${route.distance}km`}
            </Font>
            <RightArrow />
          </Distance>
        </Header>
        <Location>
          <Marker />
          <Font size={14} color={'white'} style={{ marginLeft: 4 }}>
            {route.firstLocation}
          </Font>
        </Location>
      </Background>
    </Container>
  );
};

export default HomeMainRoute;
