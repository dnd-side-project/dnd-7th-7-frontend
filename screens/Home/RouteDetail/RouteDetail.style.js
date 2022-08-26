import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globals.colors.BACKGROUND,
    paddingHorizontal: globals.layout.SCREEN_PADDING_HORIZ,
  },
  map_view: {
    marginTop: 10,
    marginBottom: 13,
    height: 263,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globals.colors.ORANGE_LIGHT,
    overflow: 'hidden',
  },
  thumbnails: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'pink',
  },
  title: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  info_recommended: { marginBottom: 100 },
  review_section: { marginTop: 10 },
  infos: { flexDirection: 'row', marginTop: 7 },
  review: { marginTop: 10 },
  info_secure: { marginTop: 5 },
});
