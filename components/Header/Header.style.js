import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: globals.colors.BACKGROUND,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    paddingVertical: 13,
    height: 44,
  },
  left: { flex: 0.75, justifyContent: 'center' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  right: { flex: 0.75, alignItems: 'flex-end', justifyContent: 'center' },
});
