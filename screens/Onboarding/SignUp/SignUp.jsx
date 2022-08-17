import React, { useState } from 'react';
import { styles } from './SignUp.style';
import { Button, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DropdownBtn from '@assets/images/dropdown_button.svg';
import { globals } from '@styles/globals';
import { Font } from '@components/commons';
import { Input } from '@screens/MyPage/CheckPassword/CheckPassword.style';
import { getYearList } from '@hooks/utils';

const SignUp = ({ navigation }) => {
  const [sex, setSex] = useState('male');
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
        <Input
          placeholder="닉네임*"
          placeholderTextColor={globals.colors.GREY_LIGTH_DARK}
          style={styles.input}
        />
        <Input
          placeholder="이메일*"
          placeholderTextColor={globals.colors.GREY_LIGTH_DARK}
          style={styles.input}
        />
        <Input
          placeholder="비밀번호 (영문+숫자+특수문자 10자 이상)*"
          placeholderTextColor={globals.colors.GREY_LIGTH_DARK}
          style={styles.input}
        />
        <View style={styles.selects}>
          <View style={[styles.select, { marginRight: 25 }]}>
            <RNPickerSelect
              placeholder={{ label: '출생년도' }}
              onValueChange={(value) => setSex(value)}
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
                { label: '녀', value: 'female' },
              ]}
              Icon={() => <DropdownBtn />}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
