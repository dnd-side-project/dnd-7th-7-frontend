import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 29,
    marginBottom: 43,
  },
  current_loc: {
    flexDirection: 'row',
    paddingLeft: globals.layout.SCREEN_PADDING_HORIZ,
    marginBottom: 10,
  },
  guide: {
    paddingLeft: globals.layout.SCREEN_PADDING_HORIZ,
    marginBottom: 18,
  },
  card: {
    marginHorizontal: globals.layout.SCREEN_PADDING_HORIZ,
  },
});
