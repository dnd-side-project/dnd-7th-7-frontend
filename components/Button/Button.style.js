import styled from 'styled-components/native';

export const Btn = styled.TouchableOpacity`
  position: ${(props) => props.style.position};
  bottom: 15px;
  width: 120px;
  height: 50px;
  background-color: red;
  color: white;
`;
