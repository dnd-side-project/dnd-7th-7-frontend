import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: globals.layout.SCREEN_PADDING_HORIZ,
    // flex: 1,
  },
  title: {
    marginBottom: 15,
  },
  tag_ranking: {},
  tags_wrap: {
    marginBottom: 10,
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag_wrap: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  rank: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 11,
  },
});
