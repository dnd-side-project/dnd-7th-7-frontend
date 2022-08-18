import React, { useState } from 'react';
import { Button, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styles } from './SelectTags.style';
import { globals } from '@styles/globals';
import TagSelectSection from '@containers/OnBoarding/TagSelectSection';
import { Font } from '@components/commons';
import DropdownBtn from '@assets/images/dropdown_button.svg';
import useTagCount from '@hooks/useTagCount';
import { cityList, districtList, SECURE_TAGS_DATA, RECOMMENDED_TAGS_DATA } from '@hooks/utils';
import Tag from '@components/commons/Tag/Tag';

const SelectTags = ({ navigation }) => {
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [selectedSecureTags, onPressSecureTag] = useTagCount();
  const [selectedRecommendedTags, onPressRecommendedTag] = useTagCount();

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Font weight={600} size={24}>
          취향에 꼭 맞는
        </Font>
        <Font weight={600} size={24}>
          러닝 경로를 추천해 드려요!
        </Font>
      </View>

      <View style={styles.set_location}>
        <Font weight={300} size={15}>
          러닝 시작 지점을 선택해 주세요
        </Font>
        <View style={styles.selects}>
          <View style={[styles.select, { marginRight: 25 }]}>
            <RNPickerSelect
              placeholder={{ label: '시/도' }}
              onValueChange={(value) => setCity(value)}
              items={cityList}
              Icon={() => <DropdownBtn />}
            />
          </View>
          <View style={styles.select}>
            <RNPickerSelect
              placeholder={{ label: '구' }}
              onValueChange={(value) => setDistrict(value)}
              items={districtList}
              Icon={() => <DropdownBtn />}
            />
          </View>
        </View>
      </View>

      <View style={styles.tags}>
        <Font style={{ marginBottom: 10 }} weight={300} size={15}>
          선호하는 안심 태그를 선택해 주세요
        </Font>
        <TagSelectSection
          onPressTag={onPressSecureTag}
          pressedProps={{
            textSize: 14,
            textColor: globals.colors.BLACK,
            bgColor: globals.colors.PRIMARY_DEF,
            theme: 'angled',
            style: { marginRight: 10, marginBottom: 10 },
          }}
          tagProps={{
            textSize: 14,
            textColor: globals.colors.GREY_DEF_LIGHT,
            bgColor: globals.colors.PRIMARY_LIGHT,
            theme: 'angled',
            style: { marginRight: 10, marginBottom: 10 },
          }}
          category={'secure'}
          data={SECURE_TAGS_DATA}
        />
      </View>

      <View style={styles.tags}>
        <Font style={{ marginBottom: 10 }} weight={300} size={15}>
          선호하는 일반 태그를 선택해 주세요
        </Font>
        <TagSelectSection
          onPressTag={onPressRecommendedTag}
          pressedProps={{
            textSize: 14,
            textColor: globals.colors.BLACK,
            bgColor: globals.colors.ORANGE_DEF,
            theme: 'angled',
            style: { marginRight: 10, marginBottom: 10 },
          }}
          tagProps={{
            textSize: 14,
            textColor: globals.colors.GREY_DEF_LIGHT,
            bgColor: globals.colors.ORANGE_LIGHT,
            theme: 'angled',
            style: { marginRight: 10, marginBottom: 10 },
          }}
          category={'recommended'}
          data={RECOMMENDED_TAGS_DATA}
        />
      </View>
      <View style={styles.button}>
        <Tag
          theme={'angled'}
          bgColor={globals.colors.GREY_LIGHT_DEF}
          textColor={globals.colors.GREY_DEF_DARKER}
          textWeight={400}
          style={{ paddingVertical: 16 }}
          onPress={() => navigation.navigate('afterOnboarding')}
        >
          다음
        </Tag>
      </View>
    </View>
  );
};

export default SelectTags;
