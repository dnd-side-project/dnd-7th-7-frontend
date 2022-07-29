import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useLocation from '../../hooks/useLoaction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function MyPage() {
  const { status, location } = useLocation();
  console.log('location: ', location, 'status: ', status);
  return (
    <View style={styles.container}>
      <Text>MyPage screen</Text>
    </View>
  );
}

export default MyPage;
