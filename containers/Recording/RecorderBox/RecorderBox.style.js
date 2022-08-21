import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals.js';

export const styles = StyleSheet.create({
  container: { flex: 1, margin: 0, justifyContent: 'flex-end' },
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
});
