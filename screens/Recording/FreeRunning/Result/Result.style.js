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
    marginBottom: 10,
    height: 360,
    overflow: 'hidden',
  },
  image: {
    transform: [{ translateX: -400 }, { scale: 0.9 }],
  },
  tag: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
  },
});
