import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Font from '../../../components/commons/Font';
import { Button, ButtonBox, Input, InputBox, Title } from './CheckPassword.style';

const CheckPassword = ({ navigation: { navigate } }) => {
  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <Title>
        <Font style={{ marginBottom: 5 }} lineHeight={24 * 1.5} size={24} weight={600}>
          비밀번호 확인
        </Font>

        <Font lineHeight={18 * 1.5} style={{ marginBottom: 5 }} size={18} weight={400}>
          러너님의 소중한 정보 보호를 위해{'\n'}비밀번호를 한번 더 입력해주세요
        </Font>
      </Title>
      <InputBox>
        <Input
          placeholder="Runningmap@naver.com"
          placeholderTextColor="#C8C8C8"
          style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1 }}
        />
        <Input
          placeholder="비밀번호"
          placeholderTextColor="#C8C8C8"
          style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1 }}
        />
      </InputBox>
      <ButtonBox>
        <TouchableOpacity>
          <Button>
            <Text>취소</Text>
          </Button>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Modify')}>
          <Button>
            <Text>확인</Text>
          </Button>
        </TouchableOpacity>
      </ButtonBox>
    </View>
  );
};

export default CheckPassword;
