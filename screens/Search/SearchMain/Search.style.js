import styled from 'styled-components/native';

export const Head = styled.View`
  width: 100%;
  height: 244px;
  padding-left: 16px;
  padding-top: 10px;
  background-color: #e9ffe5;
`;

export const Img = styled.Image`
  width: 248px;
  height: 204px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const QuestionBox = styled.View`
  width: 100%;
  height: 50px;
  padding: 15px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Question = styled.View`
  width: 162px;
  height: 21px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionMark = styled.Image`
  width: 20px;
  height: 21px;
`;

export const SubTitle = styled.View`
  height: 102px;
  width: 100%;
  padding-top: 30px;
  padding-left: 16px;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const SubTitleImage = styled.Image`
  width: 24px;
  height: 22px;
  position: relative;
  bottom: -40px;
  left: -15px;
`;

export const PhotoList = styled.FlatList`
  height: 350px;
`;

export const Photo = styled.View`
  height: 320px;
  width: 240px;
  margin-right: 16px;
`;

export const ThumbnailBox = styled.View`
  width: 100%;
  height: 272px;
  padding: 0 16px;
  margin-bottom: 20px;
`;

export const ThumbnailHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ThumbnailBody = styled.View`
  width: 100%;
  height: 188px;
`;

export const ThumbnailBodyInformation = styled.View`
  width: 100%;
  height: 28px;
  flex-direction: row;
  align-items: center;
`;
export const ThumbnailBodyImage = styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 10px;
`;
export const ThumbnailBodyDescription = styled.View`
  width: 100%;
  height: 40px;
  padding: 10px 0;
`;
