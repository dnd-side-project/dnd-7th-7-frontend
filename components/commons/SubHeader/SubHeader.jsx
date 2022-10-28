import { Text, TouchableOpacity } from 'react-native';
import Font from '../Font';
import { AddTagBox, Box } from './SubHeader.style';
import Tag from '@components/commons/Tag/Tag';

const SubHeader = ({ onPress }) => {
  return false ? (
    <TouchableOpacity onPress={onPresse}>
      <Box>
        <AddTagBox>
          <Font size={14} weight={400}>
            + 맞춤태그
          </Font>
        </AddTagBox>
      </Box>
    </TouchableOpacity>
  ) : (
    <Box>
      <Tag theme="angled" style={{ marginRight: 10 }} bgColor="#EBF5ED">
        + 맞춤태그
      </Tag>

      <Tag theme="angled" style={{ marginRight: 10 }} bgColor="#C9EFD2">
        안심등이 있어요
      </Tag>
      <Tag theme="angled" linearGradient={['#C9EFD2', '#FCDCBE']} style={{ marginRight: 10 }}>
        +9
      </Tag>
    </Box>
  );
};

export default SubHeader;
