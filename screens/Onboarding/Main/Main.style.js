import { StyleSheet } from 'react-native';
import { globals } from '@styles/globals';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 241,
    // justifyContent: 'center',
    paddingHorizontal: 16,
  },
  inputs: { width: '100%', paddingHorizontal: 21 },
  loginBtn: { paddingVertical: 19, width: '100%', marginBottom: 15, marginTop: 10 },
  division: { flexDirection: 'row', height: 20 },
  line: {
    transform: [{ translateY: -10 }],
    borderBottomColor: globals.colors.GREY_DEF_LIGHT,
    borderBottomWidth: 0.5,
  },
  signUpBtns: { flexDirection: 'row', marginTop: 14 },
  circle: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsOfService: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 44,
  },
  links: { flexDirection: 'row', justifyContent: 'space-between' },
  link: { borderBottomColor: globals.colors.GREY_DEF_LIGHT, borderBottomWidth: 1 },
});
