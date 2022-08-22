import styled from 'styled-components/native';

export const BubbleBox = styled.View`
  height: auto;
`;
export const Bubble = styled.View`
  position: relative;
  background: #21a345;
  border-radius: 8px;
  width: 96px;
  height: 25px;
  padding: 4px 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BubbleArrow = styled.View`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 16px;
  border: 8px solid transparent;
  border-top-color: #21a345;
  margin-left: -10px;
  margin-bottom: -16px;
`;
