import React from 'react';
import Header from '@components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FreeRunningResult from './Result';
import FreeRunningReview from './Review';
import FreeRunningRecording from './Recording';

const Stack = createNativeStackNavigator();

const FreeRunning = () => {
  return (
    <Stack.Navigator initialRouteName={'FreeRunningRecording'}>
      <Stack.Screen
        name="FreeRunningRecording"
        component={FreeRunningRecording}
        options={{
          header: ({ navigation, route, options }) => (
            <Header
              navigation={navigation}
              route={route}
              options={options}
              left={'back'}
              center={'자유 러닝'}
              right={null}
              pressLeft={() => navigation.goBack()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="FreeRunningResult"
        component={FreeRunningResult}
        options={{
          header: ({ navigation, route, options }) => (
            <Header
              navigation={navigation}
              route={route}
              options={options}
              left={null}
              center={'러닝 내역'}
              right={'close'}
              pressRight={() => navigation.navigate('Home')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="FreeRunningReview"
        component={FreeRunningReview}
        options={{
          header: ({ navigation, route, options }) => (
            <Header
              navigation={navigation}
              route={route}
              options={options}
              left={'back'}
              center={'리뷰 등록'}
              right={null}
              pressLeft={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default FreeRunning;
