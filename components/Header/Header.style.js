import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    paddingVertical: 13,
    height: 44,
  },
  left: { flex: 1, justifyContent: 'center' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  right: { flex: 1, alignItems: 'flex-end', justifyContent: 'center' },
  searcherWrap: {
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
