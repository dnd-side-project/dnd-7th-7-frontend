import ThumbnailCards from '@containers/home/ThumbnailCards';
import { ScrollView } from 'react-native';
import { Font, Tag } from '../../../components/commons';
import { ReviewBox, ThumbnailBodyInformation } from './MyPageReview.style';
import GrayDot from '@assets/images/graydot.svg';
import { View } from 'react-native';

const files = [
  'https://running-map.s3.ap-northeast-2.amazonaws.com/1660743080736dd.png',
  'https://running-map.s3.ap-northeast-2.amazonaws.com/1660743080747dd.png',
  'https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png',
  'https://running-map.s3.ap-northeast-2.amazonaws.com/1660743080747dd.png',
];

// const data = [
//     {
//         title: "한강 잠실 러닝길",
//         date: [12, 31, "토", "오후", [3, 4],],
//         time:
//     }
// ]

const MyPageReview = () => {
  return (
    <ScrollView
      style={{ backgroundColor: '#FFFFFF' }}
      contentContainerStyle={{ paddingVertical: 20 }}
    >
      <ReviewBox style={{ borderBottomWidth: 10, borderBottomColor: '#F6F6F6' }}>
        <View style={{ height: 40, borderBottomColor: '#DFDFDF', borderBottomWidth: 1 }}>
          <Font size={18} weight={600}>
            한강 잠실 러닝길
          </Font>
        </View>

        <ThumbnailBodyInformation>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Font
              size={12}
              weight={400}
              lineHeight={12 * 1.5}
              color="#8B8B8B"
            >{`${12}월 ${31}일 토요일 `}</Font>
            <GrayDot />
            <Font size={12} weight={400} lineHeight={12 * 1.5} color="#8B8B8B">
              {300}분
            </Font>
            <GrayDot />
            <Font size={12} weight={400} lineHeight={12 * 1.5} color="#8B8B8B">
              {500}km
            </Font>
          </View>
          <Font size={12} weight={400} lineHeight={12 * 1.5} color="#8B8B8B">
            자세히 보기
          </Font>
        </ThumbnailBodyInformation>

        <ThumbnailCards data={files} />
        <View style={{ height: 10 }}></View>
        <Font size={14} weight={400} lineHeight={14 * 1.5}>
          300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 되는지 확인하려고 쓰는 글 300자가
          얼마나 되는지 확인하...
        </Font>
        <View style={{ height: 10 }}></View>
        <View style={{ width: 'auto', flexDirection: 'row' }}>
          <Tag
            theme="angled"
            style={{ paddingHorizontal: 12, paddingVertical: 6, marginRight: 5 }}
            bgColor="#C9EFD2"
          >
            <Font size={14} weight={400}>
              안심등이 있어요
            </Font>
          </Tag>
          <Tag
            theme="angled"
            style={{ paddingHorizontal: 12, paddingVertical: 6, marginRight: 5 }}
            bgColor="#C9EFD2"
          >
            <Font size={14} weight={400}>
              강을 보며 달려요
            </Font>
          </Tag>
          <Tag
            theme="angled"
            style={{ paddingHorizontal: 12, paddingVertical: 6, marginRight: 5 }}
            bgColor="#C9EFD2"
          >
            <Font size={14} weight={400}>
              +3
            </Font>
          </Tag>
        </View>
      </ReviewBox>
      <ReviewBox style={{ borderBottomWidth: 10, borderBottomColor: '#F6F6F6' }}>
        <View style={{ height: 40, borderBottomColor: '#DFDFDF', borderBottomWidth: 1 }}>
          <Font size={18} weight={600}>
            한강 잠실 러닝길
          </Font>
        </View>

        <ThumbnailBodyInformation>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Font
              size={12}
              weight={400}
              lineHeight={12 * 1.5}
              color="#8B8B8B"
            >{`${12}월 ${31}일 토요일 `}</Font>
            <GrayDot />
            <Font size={12} weight={400} lineHeight={12 * 1.5} color="#8B8B8B">
              {300}분
            </Font>
            <GrayDot />
            <Font size={12} weight={400} lineHeight={12 * 1.5} color="#8B8B8B">
              {500}km
            </Font>
          </View>
          <Font size={12} weight={400} lineHeight={12 * 1.5} color="#8B8B8B">
            자세히 보기
          </Font>
        </ThumbnailBodyInformation>

        <ThumbnailCards data={files} />
        <View style={{ height: 10 }}></View>
        <Font size={14} weight={400} lineHeight={14 * 1.5}>
          300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 되는지 확인하려고 쓰는 글 300자가
          얼마나 되는지 확인하...
        </Font>
        <View style={{ height: 10 }}></View>
        <View style={{ width: 'auto', flexDirection: 'row' }}>
          <Tag
            theme="angled"
            style={{ paddingHorizontal: 12, paddingVertical: 6, marginRight: 5 }}
            bgColor="#C9EFD2"
          >
            <Font size={14} weight={400}>
              안심등이 있어요
            </Font>
          </Tag>
          <Tag
            theme="angled"
            style={{ paddingHorizontal: 12, paddingVertical: 6, marginRight: 5 }}
            bgColor="#C9EFD2"
          >
            <Font size={14} weight={400}>
              강을 보며 달려요
            </Font>
          </Tag>
          <Tag
            theme="angled"
            style={{ paddingHorizontal: 12, paddingVertical: 6, marginRight: 5 }}
            bgColor="#C9EFD2"
          >
            <Font size={14} weight={400}>
              +3
            </Font>
          </Tag>
        </View>
      </ReviewBox>
      <ReviewBox style={{ borderBottomWidth: 10, borderBottomColor: '#F6F6F6' }}>
        <View style={{ height: 40, borderBottomColor: '#DFDFDF', borderBottomWidth: 1 }}>
          <Font size={18} weight={600}>
            한강 잠실 러닝길
          </Font>
        </View>

        <ThumbnailBodyInformation>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Font
              size={12}
              weight={400}
              lineHeight={12 * 1.5}
              color="#8B8B8B"
            >{`${12}월 ${31}일 토요일 `}</Font>
            <GrayDot />
            <Font size={12} weight={400} lineHeight={12 * 1.5} color="#8B8B8B">
              {300}분
            </Font>
            <GrayDot />
            <Font size={12} weight={400} lineHeight={12 * 1.5} color="#8B8B8B">
              {500}km
            </Font>
          </View>
          <Font size={12} weight={400} lineHeight={12 * 1.5} color="#8B8B8B">
            자세히 보기
          </Font>
        </ThumbnailBodyInformation>

        <ThumbnailCards data={files} />
        <View style={{ height: 10 }}></View>
        <Font size={14} weight={400} lineHeight={14 * 1.5}>
          300자가 얼마나 되는지 확인하려고 쓰는 글 300자가 얼마나 되는지 확인하려고 쓰는 글 300자가
          얼마나 되는지 확인하...
        </Font>
        <View style={{ height: 10 }}></View>
        <View style={{ width: 'auto', flexDirection: 'row' }}>
          <Tag
            theme="angled"
            style={{ paddingHorizontal: 12, paddingVertical: 6, marginRight: 5 }}
            bgColor="#C9EFD2"
          >
            <Font size={14} weight={400}>
              안심등이 있어요
            </Font>
          </Tag>
          <Tag
            theme="angled"
            style={{ paddingHorizontal: 12, paddingVertical: 6, marginRight: 5 }}
            bgColor="#C9EFD2"
          >
            <Font size={14} weight={400}>
              강을 보며 달려요
            </Font>
          </Tag>
          <Tag
            theme="angled"
            style={{ paddingHorizontal: 12, paddingVertical: 6, marginRight: 5 }}
            bgColor="#C9EFD2"
          >
            <Font size={14} weight={400}>
              +3
            </Font>
          </Tag>
        </View>
      </ReviewBox>
    </ScrollView>
  );
};

export default MyPageReview;
