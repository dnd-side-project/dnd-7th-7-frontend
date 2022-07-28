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

function MyPage() {
  return (
    <View style={styles.container}>
      <Text>My Page Screen</Text>
    </View>
  );
}

export default MyPage;
