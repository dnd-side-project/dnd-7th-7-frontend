import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: globals.colors.BACKGROUND,
  },
  title: { marginBottom: 10 },
  inputs: {},
  input: {
    borderBottomColor: '#C8C8C8',
    borderBottomWidth: 1,
    marginTop: 35,
  },
  selects: {
    backgroundColor: 'balck',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  select: {
    flex: 0.5,
    marginTop: 35,
    paddingBottom: 6,
    borderBottomColor: globals.colors.GREY_LIGTH_DARK,
    borderBottomWidth: 1,
    borderWidth: 0,
  },
});
