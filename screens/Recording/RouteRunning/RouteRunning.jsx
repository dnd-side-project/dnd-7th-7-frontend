import React from 'react';
import Header from '@components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteRunningResult from './Result';
import RouteRunningReview from './Review';
import RouteRunningRecording from './Recording';

const Stack = createNativeStackNavigator();

const RouteRunning = () => {
  return (
    <Stack.Navigator initialRouteName={'RouteRunningRecording'}>
      <Stack.Screen
        name="RouteRunningRecording"
        component={RouteRunningRecording}
        options={{
          header: ({ navigation, route, options }) => (
            <Header
              navigation={navigation}
              route={route}
              options={options}
              left={'back'}
              center={route.params.title}
              right={null}
              pressLeft={() => navigation.goBack()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="RouteRunningResult"
        component={RouteRunningResult}
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
        name="RouteRunningReview"
        component={RouteRunningReview}
        options={{
          header: ({ navigation, route, options }) => (
            <Header
              navigation={navigation}
              route={route}
              options={options}
              left={null}
              center={'리뷰 등록'}
              right={'close'}
              pressRight={() => navigation.navigate('Home')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default RouteRunning;
