import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '@components/Header';
import SelectTags from './SelectTags';
import SignUp from './SignUp';
import Main from './Main';

const Stack = createNativeStackNavigator();

const OnBoarding = () => {
  return (
    <Stack.Navigator initialRouteName={'Main'}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          header: ({ navigation, route, options }) => (
            <Header
              navigation={navigation}
              route={route}
              options={options}
              left={'logo'}
              pressRight={() => navigation.navigate('afterOnboarding')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          header: ({ navigation, route, options }) => (
            <Header
              navigation={navigation}
              route={route}
              options={options}
              left={'back'}
              center={'회원가입'}
              right={null}
              pressLeft={() => navigation.goBack()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="SelectTags"
        component={SelectTags}
        options={{
          header: ({ navigation, route, options }) => (
            <Header
              navigation={navigation}
              route={route}
              options={options}
              left={'back'}
              center={'회원가입'}
              right={null}
              pressLeft={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default OnBoarding;
