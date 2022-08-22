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
    backgroundColor: globals.colors.GREY_LIGTH_DARK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tag: {
    width: '100%',
    position: 'absolute', //Here is the trick
    bottom: 10, //Here is the trick
  },
});
