import { FlatList, TouchableOpacity, View } from 'react-native';
import {
  InformationBody,
  InformationBox,
  InformationDetail,
  InformationLocation,
  InformationTextBox,
  InformationTitle,
  List,
  Map,
} from './BookMarkMain.style';
import BookMarkIcon from '@assets/images/IC.svg';
import LocationMark from '@assets/images/IC_Loca_24.svg';
import DistanceMark from '@assets/images/ICON_Km_20.svg';
import Dot from '@assets/images/dot.svg';
import Time from '@assets/images/time.svg';
import { Font } from '../../../components/commons';

const data = [
  {
    map: '../../../assets/images/map.png',
    title: '송정뚝방길송정뚝방길송정뚝방길송정뚝방길',
    location: '성동구 송정동',
    distance: 8.2,
    time: 102,
    last_run: null,
  },
  {
    map: '../../../assets/images/map.png',
    title: '뚝방송정길',
    location: '송정구 성동동',
    distance: 10.2,
    time: 120,
    last_run: [22, 12, 31],
  },
  {
    map: '../../../assets/images/map.png',
    title: '뚝방뚝방길',
    location: '성동구 성동동',
    distance: 12.2,
    time: 130,
    last_run: [21, 11, 1],
  },
  {
    map: '../../../assets/images/map.png',
    title: '송정송정길',
    location: '송정구 뚝방동',
    distance: 9.2,
    time: 90,
    last_run: [22, 1, 3],
  },
  {
    map: '../../../assets/images/map.png',
    title: '성동송정길',
    location: '뚝방구 뚝방동',
    distance: 12.2,
    time: 130,
    last_run: [21, 11, 1],
  },
];

const BookMarkMain = () => {
  return (
    <FlatList
      style={{ backgroundColor: '#FFFFFF' }}
      vertical
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <List style={{ borderBottomColor: '#C0C0C0', borderBottomWidth: 0.5 }}>
          <Map style={{ marginRight: 10 }} source={require('../../../assets/images/map.png')} />
          <InformationBox>
            <TouchableOpacity style={{ zIndex: 1 }}>
              <BookMarkIcon style={{ position: 'absolute', right: 0, top: 0 }} />
            </TouchableOpacity>
            <InformationTextBox>
              <InformationTitle>
                <Font size={18} weight={500}>
                  {item.title.length > 9 ? item.title.slice(0, 9) + '...' : item.title}
                </Font>
              </InformationTitle>
              <InformationBody>
                <InformationLocation>
                  <LocationMark />
                  <Font size={14} weight={400} color="#555555" lineHeight={20}>
                    {item.location}
                  </Font>
                </InformationLocation>
                <InformationDetail>
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
                </InformationDetail>
              </InformationBody>

              {item.last_run ? (
                <Font size={12} weight={400} color="#8B8B8B">
                  {`${item.last_run[0]}년 ${item.last_run[1]}월 ${item.last_run[2]}일에 마지막으로 다녀왔어요`}
                </Font>
              ) : (
                <Font size={12} weight={400} color="#8B8B8B">
                  새 경로를 처음으로 달려볼까요?
                </Font>
              )}
            </InformationTextBox>
          </InformationBox>
        </List>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
    />
  );
};

export default BookMarkMain;
