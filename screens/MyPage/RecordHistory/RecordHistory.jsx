import { FlatList, TouchableOpacity, View } from 'react-native';
import Font from '../../../components/commons/Font';
import * as S from './RecordHistory.style';
import LocationMark from '@assets/images/IC_Loca_24.svg';
import Dot from '@assets/images/dot.svg';
import Time from '@assets/images/time.svg';
import BookMarkIcon from '@assets/images/IC.svg';
import DistanceMark from '@assets/images/ICON_Km_20.svg';
import { Tag } from '../../../components/commons';
const data = [
  {
    map: '../../../assets/images/map.png',
    title: '송정뚝방길',
    location: '서울시 성동구 다람쥐동',
    distance: 8.2,
    time: 102,
    last_run: null,
    tags: ['강을 보며 달려요', '+3'],
  },
  {
    map: '../../../assets/images/map.png',
    title: '뚝방송정길',
    location: '송정구 성동동',
    distance: 10.2,
    time: 120,
    last_run: [22, 12, 31],
    tags: ['강을 보며 달려요', '+3'],
  },
  {
    map: '../../../assets/images/map.png',
    title: '뚝방뚝방길',
    location: '성동구 성동동',
    distance: 12.2,
    time: 130,
    last_run: [21, 11, 1],
    tags: ['강을 보며 달려요', '+3'],
  },
  {
    map: '../../../assets/images/map.png',
    title: '송정송정길',
    location: '송정구 뚝방동',
    distance: 9.2,
    time: 90,
    last_run: [22, 1, 3],
    tags: ['강을 보며 달려요', '+3'],
  },
  {
    map: '../../../assets/images/map.png',
    title: '성동송정길',
    location: '뚝방구 뚝방동',
    distance: 12.2,
    time: 130,
    last_run: [21, 11, 1],
    tags: ['강을 보며 달려요', '+3'],
  },
];
const RecordHistory = ({ route: { params } }) => {
  return params.data === 0 ? (
    <S.EmptyResultBox>
      <S.EmptyResult>
        <S.EmtpyResultImage />
        <Font
          size={12}
          weight={400}
          color="#555555"
          style={{ textAlign: 'center' }}
          lineHeight={12 * 1.5}
        >
          등록된 러닝 기록이 없네요.{'\n'}힘차게 러닝해볼까요?
        </Font>
      </S.EmptyResult>
    </S.EmptyResultBox>
  ) : (
    <FlatList
      style={{ backgroundColor: '#FFFFFF' }}
      vertical
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 20 }}
      data={data}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <S.List style={{ borderBottomColor: '#C0C0C0', borderBottomWidth: 0.5 }}>
          <S.Map source={require('../../../assets/images/map.png')} />
          <S.InformationBox>
            <S.InformationTextBox>
              <S.InformationTitle>
                <Font size={18} weight={500}>
                  {item.title}
                </Font>
                <TouchableOpacity>
                  <BookMarkIcon style={{ position: 'absolute', right: 0 }} />
                </TouchableOpacity>
              </S.InformationTitle>
              {
                <Font size={14} weight={400} color="#8B8B8B">
                  12월 31일 토요일 오후 6~9시
                </Font>
              }
              <S.InformationBody>
                <S.InformationLocation>
                  <LocationMark />
                  <Font size={14} weight={400} color="#555555" lineHeight={20}>
                    {item.location}
                  </Font>
                </S.InformationLocation>

                <S.InformationDetail>
                  <View
                    style={{
                      width: 'auto',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <DistanceMark style={{ marginRight: 5 }} />
                    <Font size={14} weight={400}>
                      {item.distance}km
                    </Font>
                  </View>
                  <Dot />
                  <View
                    style={{
                      width: 'auto',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginRight: 10,
                    }}
                  >
                    <Time style={{ marginRight: 5 }} />
                    <Font size={14} weight={400}>
                      {`${item.time}분`}
                    </Font>
                  </View>
                </S.InformationDetail>
              </S.InformationBody>
              <View
                style={{ width: 'auto', flexDirection: 'row', justifyContent: 'space-between' }}
              >
                {item.tags.map((text, index) => (
                  <Tag
                    theme="angled"
                    style={{ paddingHorizontal: 12, paddingVertical: 6, marginRight: 10 }}
                    key={index}
                    bgColor="#C9EFD2"
                  >
                    <Font size={14} weight={400}>
                      {text}
                    </Font>
                  </Tag>
                ))}
              </View>
            </S.InformationTextBox>
          </S.InformationBox>
        </S.List>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
    />
  );
};

export default RecordHistory;
