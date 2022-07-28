import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Home() {
  const navi = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to Recording Screen" onPress={() => navi.navigate('Recording')} />
    </View>
  );
}

export default Home;
