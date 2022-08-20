import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  wrapper: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  scroller: {
    height: 311,
  },
  handle: {
    height: 0,
    width: 32,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 1.5,
    borderWidth: 3,
    borderColor: '#DBDBDB',
  },
});
