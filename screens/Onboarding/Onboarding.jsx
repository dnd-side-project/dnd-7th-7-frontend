import React from 'react';
import { Button, View } from 'react-native';
import { styles } from './Onboarding.style';
import { Font } from '@components/commons';

const OnBoarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Font>회원가입</Font>
      <Button title="skip" onPress={() => navigation.navigate('afterOnboarding')} />
    </View>
  );
};

export default OnBoarding;
