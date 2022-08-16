import React from 'react';
import { styles } from './SignUp.style';
import { Button, View } from 'react-native';
import { Font } from '@components/commons';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Font>회원가입</Font>
      <Button title="skip" onPress={() => navigation.navigate('afterOnboarding')} />
    </View>
  );
};

export default SignUp;
