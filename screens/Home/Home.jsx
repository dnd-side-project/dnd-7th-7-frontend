import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '@components/Header';
import Search from '@containers/home/Search/Search';
import Main from '@containers/home/Main';
import RouteDetail from '@containers/home/RouteDetail';

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
              pressRight={() => navigation.navigate('Search')}
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
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default Home;
