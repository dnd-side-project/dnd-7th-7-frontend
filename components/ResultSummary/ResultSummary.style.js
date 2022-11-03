import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals.js';

export const styles = StyleSheet.create({
  container: {},
  title: { marginBottom: 10 },
  location_diff: {
    marginTop: 5,
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    flexDirection: 'row',
  },
  startTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  elapsedTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  distance: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 23,
  },
});
