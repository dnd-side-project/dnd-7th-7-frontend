import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '@components/Header';
import SelectTags from './SelectTags';
import SignUp from './SignUp';
import Main from './Main';

const Stack = createNativeStackNavigator();

const OnBoarding = () => {
  return (
    <Stack.Navigator initialRouteName={'main'}>
      <Stack.Screen
        name="main"
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
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="selectTags" component={SelectTags} />
    </Stack.Navigator>
  );
};

export default OnBoarding;
