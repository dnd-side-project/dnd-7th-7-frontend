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

function BookMarks() {
  return (
    <View style={styles.container}>
      <Text>Bookmarks Screens</Text>
    </View>
  );
}

export default BookMarks;
