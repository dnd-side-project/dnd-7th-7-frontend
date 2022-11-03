import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Font from '../../../components/commons/Font';
import Tag from '../../../components/commons/Tag/Tag';
import { Button, ButtonBox, Input, InputBox } from '../CheckPassword/CheckPassword.style';
import { StartRunning, TagBox, TitleBox, Title } from './Modify.style';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { styles } from './Modify.style';
import DropdownBtn from '@assets/images/dropdown_button.svg';
import { getYearList } from '@hooks/utils';

const Modify = () => {
  const yearList = getYearList(true);
  const [itemOpen, setItemOpen] = useState(false);
  const [itemValue, setItemValue] = useState(null);
  const [items, setItems] = useState([
    { label: '서울특별시', value: '서울특별시' },
    { label: 'Banana', value: 'banana' },
  ]);

  const [nextOpen, setNextOpen] = useState(false);
  const [nextValue, setNextValue] = useState(null);
  const [nextItems, setNextItems] = useState([
    { label: '강동구', value: '강동구' },
    { label: 'Banana', value: 'banana' },
  ]);
  return (
    <ScrollView
      style={{ backgroundColor: '#FFFFFF', flex: 1 }}
      contentContainerStyle={{ paddingVertical: 35 }}
    >
      <TitleBox>
        <Title style={{ borderBottomColor: '#000000', borderBottomWidth: 1 }}>
          <Font size={18} lineHeight={18 * 1.5} weight={600}>
            필수 정보
          </Font>
        </Title>
      </TitleBox>
      <InputBox>
        <Input
          placeholder="달리는 다람쥐"
          placeholderTextColor="#C8C8C8"
          style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1 }}
        />
        <Input
          placeholder="Runningmap@naver.com"
          placeholderTextColor="#C8C8C8"
          style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1 }}
        />
      </InputBox>
      <InputBox>
        <Input
          placeholder="비밀번호 (영문+숫자+특수문자 10자 이상)*"
          placeholderTextColor="#C8C8C8"
          style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1 }}
        />
      </InputBox>
      <View style={styles.selects}>
        <View style={{ ...styles.select, marginRight: 25 }}>
          <RNPickerSelect
            placeholder={{ label: '출생년도' }}
            items={yearList}
            Icon={() => <DropdownBtn />}
          />
        </View>
        <View style={styles.select}>
          <RNPickerSelect
            placeholder={{ label: '성별' }}
            items={[
              { label: '남자', value: 'man' },
              { label: '여자', value: 'woman' },
            ]}
            Icon={() => <DropdownBtn />}
          />
        </View>
      </View>
      <TitleBox>
        <Title style={{ borderBottomColor: '#000000', borderBottomWidth: 1 }}>
          <Font size={18} lineHeight={18 * 1.5} weight={600}>
            선택 정보
          </Font>
        </Title>
      </TitleBox>
      <StartRunning>
        <Font size={15} weight={600} style={{ paddingLeft: 16, marginBottom: 10 }}>
          나의 러닝 시작 지점
        </Font>
        <View style={styles.selects}>
          <View style={{ ...styles.select, marginRight: 25 }}>
            <RNPickerSelect
              placeholder={{ label: '출생년도' }}
              items={yearList}
              Icon={() => <DropdownBtn />}
            />
          </View>
          <View style={styles.select}>
            <RNPickerSelect
              placeholder={{ label: '성별' }}
              items={[
                { label: '남자', value: 'man' },
                { label: '여자', value: 'woman' },
              ]}
              Icon={() => <DropdownBtn />}
            />
          </View>
        </View>
      </StartRunning>
      <View style={{ width: '100%', paddingLeft: 16, marginBottom: 20 }}>
        <Font size={15} weight={600}>
          내가 선호하는 안심태그
        </Font>
      </View>
      <View style={{ width: '100%', paddingHorizontal: 16, marginBottom: 40 }}>
        <TagBox>
          <Tag style={{ marginRight: 10, marginBottom: 10 }} bgColor="#C9EFD2" theme="angled">
            <Font size={14} weight={400}>
              안심등이 있어요
            </Font>
          </Tag>
          <Tag bgColor="#C9EFD2" theme="angled" style={{ marginRight: 10, marginBottom: 10 }}>
            <Font size={14} weight={400}>
              근처에 어린이 보호구역이 있어요
            </Font>
          </Tag>
          <Tag bgColor="#EBF5ED" theme="angled" style={{ marginRight: 10, marginBottom: 10 }}>
            <Font size={14} weight={400} color="#A5A5A5">
              가로등이 많아요
            </Font>
          </Tag>
          <Tag bgColor="#EBF5ED" theme="angled" style={{ marginRight: 10, marginBottom: 10 }}>
            <Font size={14} weight={400} color="#A5A5A5">
              밤에 사람이 많아요
            </Font>
          </Tag>
          <Tag bgColor="#EBF5ED" theme="angled" style={{ marginRight: 10, marginBottom: 10 }}>
            <Font size={14} weight={400} color="#A5A5A5">
              낮에 사람이 많아요
            </Font>
          </Tag>
        </TagBox>
      </View>
      <View style={{ width: '100%', paddingLeft: 16, marginBottom: 20 }}>
        <Font size={15} weight={600}>
          내가 선호하는 일반태그
        </Font>
      </View>
      <View style={{ width: '100%', paddingHorizontal: 16 }}>
        <TagBox>
          <Tag style={{ marginRight: 10, marginBottom: 10 }} bgColor="#FCDCBE" theme="angled">
            <Font size={14} weight={400}>
              강을 보며 달려요
            </Font>
          </Tag>
          <Tag bgColor="#FCDCBE" theme="angled" style={{ marginRight: 10, marginBottom: 10 }}>
            <Font size={14} weight={400}>
              나무가 많아요
            </Font>
          </Tag>
          <Tag bgColor="#FEF1E5" theme="angled" style={{ marginRight: 10, marginBottom: 10 }}>
            <Font size={14} weight={400} color="#A5A5A5">
              길이 깨끗해요
            </Font>
          </Tag>
          <Tag bgColor="#FEF1E5" theme="angled" style={{ marginRight: 10, marginBottom: 10 }}>
            <Font size={14} weight={400} color="#A5A5A5">
              가파른 구간이 없어요
            </Font>
          </Tag>
          <Tag bgColor="#FEF1E5" theme="angled" style={{ marginRight: 10, marginBottom: 10 }}>
            <Font size={14} weight={400} color="#A5A5A5">
              보행자 전용 트랙이 있어요
            </Font>
          </Tag>
        </TagBox>
      </View>

      <TouchableOpacity>
        <View
          style={{
            backgroundColor: '#21A345',
            height: 56,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 16,
            borderRadius: 10,
          }}
        >
          <Font color="#FFFFFF" size={16} weight={400}>
            저장
          </Font>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Modify;
