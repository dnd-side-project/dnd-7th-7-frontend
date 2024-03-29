import Font from '../Font';
import { Bubble, BubbleArrow, BubbleBox } from './CustomMarker.style';
import MapChecker from '@assets/images/mapCheck.svg';

//
const Marker = ({ count, distance }) => {
  return (
    <BubbleBox>
      <Bubble>
        <MapChecker />
        <Font size={14} color="#C9EFD2">
          {count}
        </Font>
        <Font size={14} color="#7ADA90">
          |
        </Font>
        <Font size={14} color="#7ADA90">
          {distance}km
        </Font>
      </Bubble>
      <BubbleArrow />
    </BubbleBox>
  );
};

export default Marker;
