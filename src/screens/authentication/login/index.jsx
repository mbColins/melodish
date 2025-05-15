import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FormInput from '../../../components/TextInput';
import { useForm } from 'react-hook-form';
import { Facebook } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import AuthHeader from '../../../components/AuthHeader';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/Button';
import TextBtn from '../../../components/TextBtn';
import Titles from '../../../components/Titles';

const LoginScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigation = useNavigation();
  const { t } = useTranslation();

  const onSubmit = (data) => { console.log(data); };
  return (
    <ScrollView>
      <AuthHeader />
      <View>
             <Titles text={t('welcomeScreen.Login')}/>
      </View>
      <View style={styles.formContainer}>
        <FormInput
          control={control}
          name="username"
          placeholder={t('authentication.user_name')}
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
        <Button text={t('welcomeScreen.Login')} onPress={() => navigation.navigate('home')} />
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
        <TextBtn text={t('welcomeScreen.Sign_up')} onPress={() => navigation.navigate('registration')} />
      </View>
      <View style={styles.forgotPass}>
        <Text>{t('welcomeScreen.forgotPass')}</Text>
        <TextBtn text={t('welcomeScreen.fogotPassText')} onPress={() => navigation.navigate('forgotpass')} />
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
  btnText: { color: '#fff' },
  footerBtn: { display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center' },
  forgotPass: { display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center', marginTop: 20 },
  signUpBtn: { color: 'blue' },
  formContainer: { marginTop: 20 },
});
