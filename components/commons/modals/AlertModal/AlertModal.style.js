import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: 250,
    height: 120,
  },
  title: {
    height: 70,
    // paddingHorizontal: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: globals.colors.GREY_LIGHT_DEF,
  },
  buttons: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  yes: {
    flex: 1 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  no: { flex: 1 / 2, justifyContent: 'center', alignItems: 'center' },
});
