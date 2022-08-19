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
} from './Search.style';
import RightChevron from '../../../assets/images/Vector53.svg';
import { Entypo } from '@expo/vector-icons';

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

const SearchMain = () => {
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
          러닝맵이 엄선한{'\n'}추천 경로예요{' '}
        </Font>
        <SubTitleImage source={require('../../../assets/images/Vector113.png')} />
      </SubTitle>
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
            러닝맵 멤버 보러가기
          </Font>
          <TouchableOpacity>
            <Entypo name="chevron-thin-right" size={22} color="#21A345" />
          </TouchableOpacity>
        </View>
      </SubTitle>
    </ScrollView>
  );
};

export default SearchMain;
