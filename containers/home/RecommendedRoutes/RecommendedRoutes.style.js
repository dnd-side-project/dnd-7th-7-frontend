import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    marginTop: 29,
    marginBottom: 43,
  },
  current_loc: {
    flexDirection: 'row',
    paddingLeft: globals.layout.SCREEN_PADDING_HORIZ,
    marginBottom: 7,
  },
  guide: {
    paddingLeft: globals.layout.SCREEN_PADDING_HORIZ,
    marginBottom: 18,
  },
});
