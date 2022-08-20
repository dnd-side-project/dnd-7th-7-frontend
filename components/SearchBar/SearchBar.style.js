import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  searcherWrap: {
    marginTop: 14,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  searchBox: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: globals.colors.GREY_LIGHT,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
