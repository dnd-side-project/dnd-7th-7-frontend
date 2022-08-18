import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: globals.colors.BACKGROUND,
  },
  title: { marginTop: 25 },
  set_location: {
    marginTop: 45,
  },
  selects: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  select: {
    flex: 0.5,
    marginTop: 10,
    paddingBottom: 6,
    borderBottomColor: globals.colors.GREY_LIGTH_DARK,
    borderBottomWidth: 1,
    borderWidth: 0,
  },
  tags: {
    marginTop: 30,
  },
  button: {
    marginBottom: 23,
    flex: 1,
    justifyContent: 'flex-end',
  },
});
