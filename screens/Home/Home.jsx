import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '@components/Header';
import Main from './Main';
import RouteDetail from './RouteDetail';

const Stack = createNativeStackNavigator();

const Home = () => {
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
              right={'search'}
              pressRight={() =>
                navigation.navigate('Recording', {
                  screen: 'Search',
                })
              }
            />
          ),
        }}
      />
      <Stack.Screen
        name="RouteDetail"
        component={RouteDetail}
        options={{
          header: ({ navigation, route, options }) => (
            <Header
              navigation={navigation}
              route={route}
              options={options}
              left={'back'}
              center={route.params.data.routeName}
              right={'null'}
              pressLeft={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;
