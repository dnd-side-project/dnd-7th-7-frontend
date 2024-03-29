import React from 'react';
import Header from '@components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Result from '@containers/Recording/FreeRunning/Result';
import Review from '@containers/Recording/FreeRunning/Review';
import Recording from '@containers/Recording/FreeRunning/Recording';

const Stack = createNativeStackNavigator();

const FreeRunning = () => {
  return (
    <Stack.Navigator initialRouteName={'FreeRunningRecording'}>
      <Stack.Screen
        name="FreeRunningRecording"
        component={Recording}
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
        name="FreeRunningReview"
        component={Review}
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
