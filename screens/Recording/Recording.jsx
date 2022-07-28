import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Recording() {
  return (
    <View style={styles.container}>
      <Text>Recording Screen</Text>
    </View>
  );
}

export default Recording;
