import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: globals.colors.BACKGROUND,
    paddingHorizontal: globals.layout.SCREEN_PADDING_HORIZ,
    flex: 1,
  },
  char_count: {
    position: 'absolute',
    bottom: 10,
    right: 15,
  },
  regist_image: { flex: 1 },
});
