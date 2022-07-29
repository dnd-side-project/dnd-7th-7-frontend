import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Onboarding() {
  return (
    <View style={styles.container}>
      <Text>Onboarding...</Text>
    </View>
  );
}

export default Onboarding;
