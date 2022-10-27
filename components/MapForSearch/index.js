import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import CustomMarker from '@components/commons/CustomMarker';
import MyLocationImage from '@assets/images/my_location.svg';
import MapView, { Marker } from 'react-native-maps';
import { useRecoilValue } from 'recoil';
import locationAtom from '@recoil/location';

import { Wrapper, Map } from './MapForSearch.style';

const ZOOM_LEVEL = 0.01;

const MapForSearch = ({ currentLocation }) => {
  const { width, height } = Dimensions.get('window');
  const currentLoc = useRecoilValue(locationAtom);
  return (
    <Wrapper>
      <MapView
        initialRegion={{
          latitude: currentLoc.latitude,
          longitude: currentLoc.longitude,
          latitudeDelta: ZOOM_LEVEL,
          longitudeDelta: ZOOM_LEVEL * (width / height),
        }}
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
      >
        <Marker
          coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude }}
        >
          <MyLocationImage />
        </Marker>
      </MapView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapForSearch;
