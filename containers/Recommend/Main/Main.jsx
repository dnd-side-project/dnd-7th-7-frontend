import { ScrollView, TouchableOpacity, ImageBackground, View, Image } from 'react-native';
import { Font, Tag } from '../../../components/commons';
import {
  Head,
  Img,
  Photo,
  PhotoList,
  Question,
  QuestionBox,
  QuestionMark,
  SubTitle,
  SubTitleImage,
  ThumbnailBody,
  ThumbnailBodyDescription,
  ThumbnailBodyImage,
  ThumbnailBodyInformation,
  ThumbnailBox,
  ThumbnailHeader,
} from './Main.style';
import RightChevron from '../../../assets/images/Vector53.svg';
import { Entypo } from '@expo/vector-icons';
import GrayDot from '@assets/images/graydot.svg';

const data = [
  {
    backgroundImg: '../../../assets/images/mountain.png',
    title: '한강 잠실 러닝길',
    description: '300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나',
    tags: ['어린이 보호구역이 있어요', '+2'],
  },
  {
    backgroundImg: '../../../assets/images/mountain.png',
    title: '한강 러닝길 잠실',
    description: '100자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나',
    tags: ['노인 보호구역이 있어요', '+3'],
  },
  {
    backgroundImg: '../../../assets/images/mountain.png',
    title: '러닝길 한강 잠실',
    description: '200자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나',
    tags: ['사람 보호구역이 있어요', '+1'],
  },
];

const recommendData = [
  {
    title: '몰랐지? 힙지로 카페 거리 러닝',
    date: [12, 31, '토', '오후', '6~9시'],
    time: 500,
    distance: 100,
    map: '../../../assets/images/runMap1.png',
    description:
      '어쩌구 저쩌구 블라블라~구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악구와아악',
    tags: ['안심등이 있어요', '강을 보며 달려요', '+3'],
  },
  {
    title: '난 퇴근하고 강남에서 러닝해',
    date: [11, 19, '금', '오전', '3시~6시'],
    time: 480,
    distance: 120,
    map: '../../../assets/images/runMap2.png',
    description:
      '300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 되는지 확인하',
    tags: ['안심등이 있어요', '강을 보며 달려요', '+3'],
  },
  {
    title: '언덕 올라가는거 좋아하는 사람??',
    date: [1, 3, '월', '오전', '9시~12시'],
    time: 900,
    distance: 999,
    map: '../../../assets/images/runMap3.png',
    description:
      '300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 되는지 확인하',
    tags: ['안심등이 있어요', '강을 보며 달려요', '+3'],
  },
];

const Main = () => {
  return (
    <ScrollView
      style={{ backgroundColor: '#FFFFFF' }}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Head>
        <Font color="#000000" size={24} weight={600} lineHeight={24 * 1.5}>
          시원해진 날씨 따라 {'\n'}안심태그 경로로 달려볼까요?
        </Font>
        <Img source={require('../../../assets/images/Maskgroup.png')} />
      </Head>
      <QuestionBox style={{ borderBottomColor: '#DFDFDF', borderBottomWidth: 1 }}>
        <Question>
          <QuestionMark source={require('../../../assets/images/Group197.png')} />
          <Font size={14} weight={400} color="#555555">
            안심태그는 무엇인가요?
          </Font>
        </Question>
        <TouchableOpacity>
          <RightChevron />
        </TouchableOpacity>
      </QuestionBox>
      <SubTitle>
        <Font size={24} weight={600} lineHeight={24 * 1.5}>
          러너피아가 엄선한{'\n'}추천 경로예요{' '}
        </Font>
        <SubTitleImage source={require('../../../assets/images/Vector113.png')} />
      </SubTitle>
      {recommendData.map((item, index) => (
        <ThumbnailBox key={index} style={{ borderBottomColor: '#DFDFDF', borderBottomWidth: 1 }}>
          <ThumbnailHeader>
            <Font size={18} weight={600} color="#3D3D3D" lineHeight={18 * 1.5}>
              {item.title}
            </Font>
            <TouchableOpacity>
              <Font size={12} weight={400} color="#8B8B8B">
                작성글로 이동
              </Font>
            </TouchableOpacity>
          </ThumbnailHeader>
          <ThumbnailBody>
            <ThumbnailBodyInformation>
              <Font
                size={12}
                weight={400}
                color="#8B8B8B"
              >{`${item.date[0]}월 ${item.date[1]}일 ${item.date[2]}요일 ${item.date[3]} ${item.date[4]}`}</Font>
              <GrayDot />
              <Font size={12} weight={400} color="#8B8B8B">
                {item.time}분
              </Font>
              <GrayDot />
              <Font size={12} weight={400} color="#8B8B8B">
                {item.distance}km
              </Font>
            </ThumbnailBodyInformation>
            <ThumbnailBodyImage source={require('../../../assets/images/runMap1.png')} />
            <ThumbnailBodyDescription>
              <Font size={14} weight={400} color="#3D3D3D" lineHeight={14 * 1.5}>
                {item.description.slice(0, 36)}
              </Font>
              <Font size={14} weight={400} color="#3D3D3D" lineHeight={14 * 1.5}>
                {item.description.length - 36 < 36
                  ? `${item.description.slice(36, item.description.length)}...`
                  : `${item.description.slice(36, 62)}...`}
              </Font>
            </ThumbnailBodyDescription>
          </ThumbnailBody>
          <View
            style={{
              width: 'auto',
              flexDirection: 'row',
            }}
          >
            {item.tags.map((text, index) => (
              <Tag theme="angled" style={{ marginRight: 10 }} key={index} bgColor="#C9EFD2">
                <Font size={14} weight={400}>
                  {text}
                </Font>
              </Tag>
            ))}
          </View>
        </ThumbnailBox>
      ))}
      <SubTitle>
        <Font size={24} weight={600} lineHeight={24 * 1.5}>
          사진과 함께 보는 리뷰도{'\n'}유익해요!
        </Font>
        <SubTitleImage
          style={{ left: -130, bottom: -43 }}
          source={require('../../../assets/images/IC_Smile_28.png')}
        />
      </SubTitle>
      <PhotoList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Photo>
            <ImageBackground
              style={{ flex: 1 }}
              imageStyle={{ borderRadius: 10 }}
              source={require('../../../assets/images/mountain.png')}
            >
              <View
                style={{
                  paddingVertical: 20,
                  paddingHorizontal: 15,
                  height: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <Font size={18} weight={600}>
                  {item.title}
                </Font>
                <View
                  style={{
                    height: 120,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    marginHorizontal: -15,
                    marginVertical: -20,
                    paddingVertical: 20,
                    paddingHorizontal: 15,
                  }}
                >
                  <View
                    style={{
                      width: 172,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 10,
                    }}
                  >
                    <Font size={14} weight={400} color="#FFFFFF" lineHeight={14 * 1.5}>
                      {`${item.description.slice(0, 35)}...`}
                    </Font>
                    <TouchableOpacity>
                      <Entypo
                        name="chevron-thin-right"
                        size={15}
                        color="white"
                        style={{ position: 'relative', top: 3, right: -20 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    {item.tags.map((text, index) => (
                      <Tag
                        theme="angled"
                        style={{ paddingHorizontal: 12, paddingVertical: 6 }}
                        key={index}
                        bgColor="#C9EFD2"
                      >
                        <Font size={14} weight={400}>
                          {text}
                        </Font>
                      </Tag>
                    ))}
                  </View>
                </View>
              </View>
            </ImageBackground>
          </Photo>
        )}
        contentContainerStyle={{
          paddingLeft: 16,
          paddingBottom: 25,
          borderBottomColor: '#F6F6F6',
          borderBottomWidth: 10,
        }}
      />
      <SubTitle style={{ flexDirection: 'column' }}>
        <Font size={18} weight={600} color="#6F6F6F" lineHeight={18 * 1.5}>
          우리가 궁금하신가요?
        </Font>
        <View
          style={{
            width: '100%',
            paddingRight: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Font size={24} weight={600} color="#21A345" lineHeight={24 * 1.5}>
            러너피아 멤버 보러가기
          </Font>
          <TouchableOpacity>
            <Entypo name="chevron-thin-right" size={24} color="#21A345" />
          </TouchableOpacity>
        </View>
      </SubTitle>
    </ScrollView>
  );
};

export default Main;
