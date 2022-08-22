import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: globals.colors.BACKGROUND,
    paddingHorizontal: globals.layout.SCREEN_PADDING_HORIZ,
    flex: 1,
  },
  map_view: {
    marginTop: 10,
    height: 260,
    backgroundColor: globals.colors.GREY_LIGTH_DARK,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
