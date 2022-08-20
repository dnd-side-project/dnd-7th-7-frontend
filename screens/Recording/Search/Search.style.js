import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: globals.colors.BACKGROUND,
    flex: 1,
  },
  map_view: {
    backgroundColor: globals.colors.GREY_LIGTH_DARK,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker_example: {
    width: 100,
    height: 100,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
});
