import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: globals.colors.BACKGROUND,
    flex: 1,
  },
  map_view: {
    backgroundColor: globals.colors.GREY_LIGHT,
    flex: 1,
  },
  guide: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
    height: 56,
    marginHorizontal: globals.layout.SCREEN_PADDING_HORIZ,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  start_btn: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
});
