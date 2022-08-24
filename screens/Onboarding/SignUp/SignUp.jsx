import React, { useState } from 'react';
import { styles } from './SignUp.style';
import { Button, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DropdownBtn from '@assets/images/dropdown_button.svg';
import { globals } from '@styles/globals';
import { Font, Tag } from '@components/commons';
import { Input } from '@screens/MyPage/CheckPassword/CheckPassword.style';
import { getYearList } from '@hooks/utils';

const SignUp = ({ navigation }) => {
  const [nickname, setNickname] = useState(null);
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  const [sex, setSex] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState('');
  const yearList = getYearList(true);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Font weight={600} size={24}>
          러닝맵과 함께
        </Font>
        <Font weight={600} size={24}>
          안전한 러닝을 즐겨보세요!
        </Font>
      </View>

      <View style={styles.inputs}>
        <TextInput
          placeholder="닉네임*"
          placeholderTextColor={globals.colors.GREY_LIGTH_DARK}
          style={styles.input}
          value={nickname}
          onChangeText={setNickname}
        />
        <Font style={styles.alert_text} size={12} weight={400} color={globals.colors.ALERT}>
          {!nickname && '*중복된 닉네임입니다.'}
        </Font>
        <TextInput
          placeholder="이메일*"
          placeholderTextColor={globals.colors.GREY_LIGTH_DARK}
          style={styles.input}
          value={userId}
          onChangeText={setUserId}
        />
        <Font style={styles.alert_text} size={12} weight={400} color={globals.colors.ALERT}>
          {!userId && '*이미 가입된 이메일 주소입니다.'}
        </Font>
        <TextInput
          placeholder="비밀번호 (영문+숫자+특수문자 10자 이상)*"
          placeholderTextColor={globals.colors.GREY_LIGTH_DARK}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <Font style={styles.alert_text} size={12} weight={400} color={globals.colors.ALERT}>
          {!password && '*영문, 숫자, 특수문자 조합으로 10자 이상 입력해주세요.'}
        </Font>
        <View style={styles.selects}>
          <View style={[styles.select, { marginRight: 25 }]}>
            <RNPickerSelect
              placeholder={{ label: '출생년도' }}
              onValueChange={(value) => setYearOfBirth(value)}
              items={yearList}
              Icon={() => <DropdownBtn />}
            />
          </View>
          <View style={styles.select}>
            <RNPickerSelect
              placeholder={{ label: '성별' }}
              onValueChange={(value) => setSex(value)}
              items={[
                { label: '남', value: 'male' },
                { label: '여', value: 'female' },
              ]}
              Icon={() => <DropdownBtn />}
            />
          </View>
        </View>
      </View>

      <View style={styles.button}>
        <Tag
          theme={'angled'}
          bgColor={globals.colors.PRIMARY_DARK}
          textColor={globals.colors.WHITE}
          textWeight={600}
          style={{ paddingVertical: 16 }}
          onPress={() => navigation.navigate('SelectTags')}
        >
          다음
        </Tag>
      </View>
    </View>
  );
};

export default SignUp;
