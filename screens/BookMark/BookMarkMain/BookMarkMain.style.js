import styled from 'styled-components/native';

export const List = styled.View`
  padding: 15px 16px;
  padding-top: 0;
  width: 100%;
  height: 150px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Map = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 10px;
`;

export const InformationBox = styled.View`
  height: 120px;
  width: 210px;
  background-color: white;
`;

export const InformationTextBox = styled.View`
  height: 100%;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;
export const InformationTitle = styled.View`
  margin-bottom: -10px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const InformationBody = styled.View`
  height: 50px;
  justify-content: space-between;
`;
export const InformationLocation = styled.View`
  margin-bottom: 5;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const InformationDetail = styled.View`
  margin-bottom: 5;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
