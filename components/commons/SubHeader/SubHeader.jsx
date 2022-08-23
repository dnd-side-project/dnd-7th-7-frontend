import Font from '../Font';
import { AddTagBox, Box } from './SubHeader.style';

const SubHeader = () => {
  return (
    <Box>
      <AddTagBox>
        <Font size={14} weight={400}>
          + 맞춤태그
        </Font>
      </AddTagBox>
    </Box>
  );
};

export default SubHeader;
