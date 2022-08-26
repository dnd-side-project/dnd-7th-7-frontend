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
    marginBottom: 12,
    height: 180,
    backgroundColor: globals.colors.GREY_LIGTH_DARK,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: -500 }],
  },
  input_section: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 7,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: globals.colors.PRIMARY_DARK,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 18,
  },
  route_info: {
    borderBottomWidth: 1,
    borderBottomColor: globals.colors.GREY_LIGTH_DARK,
  },
  tag_select: {
    borderBottomWidth: 1,
    borderBottomColor: globals.colors.GREY_LIGTH_DARK,
    paddingBottom: 10,
  },
  char_count: {
    position: 'absolute',
    bottom: 10,
    right: 15,
  },
  regist_image: { flex: 1, marginBottom: 30 },
});
