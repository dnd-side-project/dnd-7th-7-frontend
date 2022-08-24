import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: globals.colors.BACKGROUND,
    flex: 1,
  },
  map_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  guide_wrapper: {
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  guide: {
    width: '100%',
    position: 'absolute',
    top: 15,
    alignSelf: 'center',
    paddingVertical: 16,
  },
  start_btn: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
});
