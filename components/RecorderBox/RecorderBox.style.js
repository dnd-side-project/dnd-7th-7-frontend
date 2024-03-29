import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals.js';

export const styles = StyleSheet.create({
  container: { width: '100%', position: 'absolute', margin: 0, bottom: 0 },
  wrapper: {
    backgroundColor: '#ffffff',
    paddingTop: 31,
    paddingBottom: 55,
    paddingHorizontal: 46,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 260,
  },
  btn_group: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paused: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  counter_wrapper: {
    marginBottom: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time_count: { alignItems: 'center' },
  distance_count: {
    alignItems: 'center',
  },
});
