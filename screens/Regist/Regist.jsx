import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '@components/Header';
import SelectTags from '@containers/Regist/SelectTags';
import SignUp from '@containers/Regist/SignUp';
import Main from '@containers/Regist/Main';

const Stack = createNativeStackNavigator();

const Regist = () => {
  return (
    <Stack.Navigator initialRouteName={'RegistMain'}>
      <Stack.Screen
        name="RegistMain"
        component={Main}
        options={{
          header: ({ navigation, route, options }) => (
            <Header
              navigation={navigation}
              route={route}
              options={options}
              left={'logo'}
              pressRight={() => navigation.navigate('BottomTabs')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="RegistSignUp"
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
        name="RegistSelectTags"
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

export default Regist;
