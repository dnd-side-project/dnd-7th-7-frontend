import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Font from '../../../components/commons/Font';
import Tag from '../../../components/commons/Tag/Tag';
import { Button, ButtonBox, Input, InputBox, Title } from '../CheckPassword/CheckPassword.style';
import { StartRunning, TagBox } from './Modify.style';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

const Modify = () => {
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
    <ScrollView style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <Title style={{ marginBottom: 25 }}>
        <Font lineHeight={1.5} size={24} weight={600}>
          회원정보수정
        </Font>
        <Font color="#8B8B8B" size={12} weight={400}>
          *아이디는 수정할 수 없습니다
        </Font>
      </Title>
      <View style={{ width: 100, paddingLeft: 16, marginBottom: 20 }}>
        <Tag theme="angled" textColor="#000000" borderWidth={0} bgColor="#ECECEC" textSize={14}>
          필수 정보
        </Tag>
      </View>
      <InputBox style={{ marginBottom: 35 }}>
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
      <InputBox style={{ marginBottom: 35 }}>
        <Input
          placeholder="비밀번호 (영문+숫자+특수문자 10자 이상)*"
          placeholderTextColor="#C8C8C8"
          style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1 }}
        />
        <Input
          placeholder="1999"
          placeholderTextColor="#C8C8C8"
          style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1 }}
        />
      </InputBox>
      <ButtonBox style={{ marginBottom: 50 }}>
        <TouchableOpacity>
          <Button
            style={{
              backgroundColor: 'white',
              borderColor: '#689744',
              borderWidth: 1,
            }}
          >
            <Text style={{ color: '#689744' }}>남성</Text>
          </Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button>
            <Text>여성</Text>
          </Button>
        </TouchableOpacity>
      </ButtonBox>
      <View style={{ width: 100, paddingLeft: 16, marginBottom: 20 }}>
        <Tag theme="angled" textColor="#000000" borderWidth={0} bgColor="#ECECEC" textSize={14}>
          추천 정보
        </Tag>
      </View>
      <StartRunning>
        <Font size={14} weight={400} color="#535353">
          러닝 시작 지점을 선택해주세요
        </Font>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 16,
            justifyContent: 'space-between',
            width: Dimensions.get('window').width / 2,
          }}
        >
          <DropDownPicker
            open={itemOpen}
            value={itemValue}
            items={items}
            setOpen={setItemOpen}
            setValue={setItemValue}
            setItems={setItems}
            style={{ width: 167 }}
          />
          <DropDownPicker
            open={nextOpen}
            value={nextValue}
            items={nextItems}
            setOpen={setNextOpen}
            setValue={setNextValue}
            setItems={setItems}
            style={{ width: 167 }}
          />
        </View>
      </StartRunning>
      <View style={{ width: '100%', paddingLeft: 16, marginBottom: 20 }}>
        <Font size={14} weight={400} color="#535353">
          내가 선호하는 태그를 선택해주세요
        </Font>
      </View>
      <View style={{ width: '100%', paddingHorizontal: 16, marginBottom: 40 }}>
        <Font size={14} weight={500} color="#535353" style={{ marginBottom: 10 }}>
          안심태그
        </Font>
        <TagBox>
          <View style={{ width: 115, marginBottom: 10, marginRight: 10 }}>
            <Tag
              theme="angled"
              textColor="#CFCFCF"
              borderWidth={0.5}
              borderColor="#CFCFCF"
              bgColor="#FFFFFF"
              textSize={14}
            >
              안심등이 있어요
            </Tag>
          </View>
          <View style={{ width: 182, marginBottom: 10, marginRight: 10 }}>
            <Tag
              theme="angled"
              textColor="#CFCFCF"
              borderWidth={0.5}
              borderColor="#CFCFCF"
              bgColor="#FFFFFF"
              textSize={14}
            >
              늦은 시간까지 사람이 많아요
            </Tag>
          </View>
          <View style={{ width: 102, marginBottom: 10, marginRight: 10 }}>
            <Tag
              theme="angled"
              textColor="#CFCFCF"
              borderWidth={0.5}
              borderColor="#CFCFCF"
              bgColor="#FFFFFF"
              textSize={14}
            >
              강따라 달려요
            </Tag>
          </View>
          <View style={{ width: 142, marginBottom: 10, marginRight: 10 }}>
            <Tag
              theme="angled"
              textColor="#CFCFCF"
              borderWidth={0.5}
              borderColor="#CFCFCF"
              bgColor="#FFFFFF"
              textSize={14}
            >
              가파른 구간이 없어요
            </Tag>
          </View>
          <View style={{ width: 170, marginBottom: 10, marginRight: 10 }}>
            <Tag
              theme="angled"
              textColor="#000000"
              borderWidth={0.5}
              borderColor="#000000"
              bgColor="#DEF2E4"
              textSize={14}
            >
              보행자 전용 트랙이 있어요
            </Tag>
          </View>
          <View style={{ width: 110, marginBottom: 10, marginRight: 10 }}>
            <Tag
              theme="angled"
              textColor="#000000"
              borderWidth={0.5}
              borderColor="#000000"
              bgColor="#DEF2E4"
              textSize={14}
            >
              울창한 나무숲
            </Tag>
          </View>
        </TagBox>
      </View>
      <View style={{ width: '100%', paddingHorizontal: 16, marginBottom: 40 }}>
        <Font size={14} weight={500} color="#535353" style={{ marginBottom: 10 }}>
          추천태그
        </Font>
        <TagBox>
          <View style={{ width: 115, marginBottom: 10, marginRight: 10 }}>
            <Tag
              theme="angled"
              textColor="#CFCFCF"
              borderWidth={0.5}
              borderColor="#CFCFCF"
              bgColor="#FFFFFF"
              textSize={14}
            >
              안심등이 있어요
            </Tag>
          </View>
          <View style={{ width: 182, marginBottom: 10, marginRight: 10 }}>
            <Tag
              theme="angled"
              textColor="#000000"
              borderWidth={0.5}
              borderColor="#000000"
              bgColor="#DEF2E4"
              textSize={14}
            >
              늦은 시간까지 사람이 많아요
            </Tag>
          </View>
          <View style={{ width: 102, marginBottom: 10, marginRight: 10 }}>
            <Tag
              theme="angled"
              textColor="#CFCFCF"
              borderWidth={0.5}
              borderColor="#CFCFCF"
              bgColor="#FFFFFF"
              textSize={14}
            >
              강따라 달려요
            </Tag>
          </View>
          <View style={{ width: 142, marginBottom: 10, marginRight: 10 }}>
            <Tag
              theme="angled"
              textColor="#CFCFCF"
              borderWidth={0.5}
              borderColor="#CFCFCF"
              bgColor="#FFFFFF"
              textSize={14}
            >
              가파른 구간이 없어요
            </Tag>
          </View>
          <View style={{ width: 170, marginBottom: 10, marginRight: 10 }}>
            <Tag
              theme="angled"
              textColor="#000000"
              borderWidth={0.5}
              borderColor="#000000"
              bgColor="#DEF2E4"
              textSize={14}
            >
              보행자 전용 트랙이 있어요
            </Tag>
          </View>
          <View style={{ width: 110, marginBottom: 10, marginRight: 10 }}>
            <Tag
              theme="angled"
              textColor="#CFCFCF"
              borderWidth={0.5}
              borderColor="#CFCFCF"
              bgColor="#FFFFFF"
              textSize={14}
            >
              울창한 나무숲
            </Tag>
          </View>
        </TagBox>
      </View>
      <ButtonBox style={{ paddingBottom: 100 }}>
        <TouchableOpacity>
          <Button
            style={{
              backgroundColor: '#EEEEEE',
            }}
          >
            <Text style={{ color: '#C8C8C8' }}>취소</Text>
          </Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button style={{ backgroundColor: '#6ACD86' }}>
            <Font color="#000000" weight={600}>
              저장
            </Font>
          </Button>
        </TouchableOpacity>
      </ButtonBox>
    </ScrollView>
  );
};

export default Modify;
