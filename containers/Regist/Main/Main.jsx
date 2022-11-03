import React from 'react';
import { Image, Pressable, SafeAreaView, View } from 'react-native';
import { styles } from './Main.style';
import { Input } from '@containers/MyPage/CheckPassword/CheckPassword.style';
import { Font, Tag } from '@components/commons';
import { globals } from '@styles/globals.js';
import { StatusBar } from 'expo-status-bar';

const Main = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate('RegistSignUp');
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <Input
          placeholder="이메일"
          placeholderTextColor={globals.colors.GREY_DEF_LIGHT}
          style={{
            borderBottomColor: globals.colors.GREY_DEF_LIGHT,
            borderBottomWidth: 1,
            marginBottom: 40,
          }}
        />
        <Input
          placeholder="비밀번호"
          placeholderTextColor={globals.colors.GREY_DEF_LIGHT}
          style={{ borderBottomColor: globals.colors.GREY_DEF_LIGHT, borderBottomWidth: 1 }}
        />
      </View>

      <Tag
        theme={'angled'}
        textColor={globals.colors.GREY_DARK}
        textWeight={400}
        bgColor={globals.colors.GREY_LIGHT_DEF}
        style={styles.loginBtn}
        onPress={() => console.log('로그인')}
      >
        로그인
      </Tag>

      <Pressable onPress={handleSignUp}>
        <Font style={{ marginBottom: 15 }}>회원가입</Font>
      </Pressable>
      <View style={styles.division}>
        <View style={styles.line}>
          <View style={{ width: 50 }} />
        </View>
        <Font style={{ marginHorizontal: 9 }}>또는</Font>
        <View style={styles.line}>
          <View style={{ width: 50 }} />
        </View>
      </View>
      <View style={styles.signUpBtns}>
        <Pressable onPress={handleSignUp}>
          <View style={[styles.circle, { backgroundColor: 'yellow', marginRight: 18 }]}>
            <Image
              style={{ width: 48, height: 48, borderRadius: 12 }}
              source={require('@assets/images/kakao.png')}
            />
          </View>
        </Pressable>

        <View style={[styles.circle, { backgroundColor: 'black' }]}>
          <Pressable onPress={handleSignUp}>
            <Image
              style={{ width: 48, height: 48, borderRadius: 12 }}
              source={require('@assets/images/apple.png')}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.termsOfService}>
        <Font
          color={globals.colors.GREY_DEF_LIGHT}
          weight={300}
          size={12}
          style={{ marginBottom: 5 }}
        >
          로그인함으로써 Runningmap의 정책 및 약관에 동의합니다.
        </Font>
        <View style={styles.links}>
          <View style={styles.link}>
            <Font color={globals.colors.GREY_DEF_LIGHT} weight={300} size={12}>
              서비스 이용약관
            </Font>
          </View>
          <View style={styles.link}>
            <Font color={globals.colors.GREY_DEF_LIGHT} weight={300} size={12}>
              개인정보 처리방침
            </Font>
          </View>
          <View style={styles.link}>
            <Font color={globals.colors.GREY_DEF_LIGHT} weight={300} size={12}>
              위치정보 이용약관
            </Font>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Main;
