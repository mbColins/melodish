import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FormInput from '../../../components/TextInput';
import { useForm } from 'react-hook-form';
import {  Facebook} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import AuthHeader from '../../../components/AuthHeader';
import { useTranslation } from 'react-i18next';

const LoginScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigation = useNavigation();
  const { t } = useTranslation();

  const onSubmit = (data) => { console.log(data); };
  return (
    <ScrollView>
      <AuthHeader />
      <View>
        <Text style={styles.title}>{t('welcomeScreen.Login')}</Text>
      </View>
      <View style={styles.formContainer}>
        <FormInput
          control={control}
          name="username"
          placeholder= {t('authentication.user_name')}
          rules={{ required: true }}
          errors={errors}
        />
        <FormInput
          control={control}
          name="password"
          placeholder={t('authentication.password')}
          rules={{ required: true }}
          errors={errors}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.btnText}>{t('welcomeScreen.Login')}</Text>
        </TouchableOpacity>
        <Text>or</Text>
        <TouchableOpacity style={styles.facebookBtn}>
          <Facebook color={'#fff'} size={20} />
          <Text style={styles.btnText}>{t('welcomeScreen.loging_with_facebook')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gooleBtn}>
          <Facebook color={'#fff'} size={20} />
          <Text style={styles.btnText}>{t('welcomeScreen.login_with_google')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerBtn}>
        <Text>{t('welcomeScreen.sign_up_description')}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('registration')}>
          <Text style={styles.signUpBtn}> {t('welcomeScreen.Sign_up')} </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.forgotPass}>
        <Text>{t('welcomeScreen.forgotPass')}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('forgotpass')}>
          <Text style={styles.signUpBtn}> {t('welcomeScreen.fogotPassText')} </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  title: { textAlign: 'center', fontSize: 25, fontWeight: '500', marginVertical: 10 },
  loginBtn: { backgroundColor: 'green', alignItems: 'center', width: 200, height: 25, borderRadius: 10, display: 'flex', justifyContent: 'center' },
  facebookBtn: { alignItems: 'center', width: 200, height: 25, borderRadius: 10, display: 'flex', justifyContent: 'center', borderColor: 'blue', flexDirection: 'row', backgroundColor: 'blue' },
  gooleBtn: { alignItems: 'center', width: 200, height: 25, borderRadius: 10, display: 'flex', justifyContent: 'center', backgroundColor: 'red', flexDirection: 'row' },
  btnContainer: { display: 'flex', alignItems: 'center', marginVertical: 10, flexDirection: 'column', gap: 10, padding: 40 },
  btnText: { color: '#fff'},
  footerBtn:{display:'flex',flexDirection:'row',gap:10,justifyContent:'center'},
  forgotPass:{display:'flex',flexDirection:'row',gap:10,justifyContent:'center',marginTop:20},
  signUpBtn:{color:'blue'},
  formContainer:{ marginTop: 20 },
});
