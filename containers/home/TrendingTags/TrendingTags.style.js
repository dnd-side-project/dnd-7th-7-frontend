import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: globals.layout.SCREEN_PADDING_HORIZ,
  },
  title: {
    marginBottom: 10,
  },
  tags_wrap: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  rank: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 11,
  },
});
