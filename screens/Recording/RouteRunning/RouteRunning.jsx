import React from 'react';
import Header from '@components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Result from '@containers/Recording/RouteRunning/Result';
import Review from '@containers/Recording/RouteRunning/Review';
import Recording from '@containers/Recording/RouteRunning/Recording';

const Stack = createNativeStackNavigator();

const RouteRunning = () => {
  return (
    <Stack.Navigator initialRouteName="RouteRunningRecording">
      <Stack.Screen
        name="RouteRunningRecording"
        component={Recording}
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
        component={Result}
        options={{
          header: ({ navigation, route, options }) => (
            <Header
              navigation={navigation}
              route={route}
              options={options}
              left={null}
              center={'러닝 내역'}
              right={'close'}
              pressRight={() => navigation.navigate('BottomTabs')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="RouteRunningReview"
        component={Review}
        options={{
          header: ({ navigation, route, options }) => (
            <Header
              navigation={navigation}
              route={route}
              options={options}
              left={null}
              center={'리뷰 등록'}
              right={'close'}
              pressRight={() => navigation.navigate('BottomTabs')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default RouteRunning;
