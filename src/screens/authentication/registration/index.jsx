import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AuthHeader from '../../../components/AuthHeader';
import FormInput from '../../../components/TextInput';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button';
import TextBtn from '../../../components/TextBtn';
import Titles from '../../../components/Titles';

const RegistrationScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigation = useNavigation();
  const { t } = useTranslation();

  const onSubmit = (data) => { console.log(data); };

  return (
    <ScrollView>
      <AuthHeader />
     <Titles text={t('welcomeScreen.registration_')}/>
      <View style={styles.formContainer}>
        <FormInput
          control={control}
          name="username"
          placeholder={t('authentication.user_name')}
          rules={{ required: true }}
          errors={errors}
           inputMode={'text'}
        />
        <FormInput
          control={control}
          name="firstName"
          placeholder={t('authentication.firstName')}
          rules={{ required: true }}
          errors={errors}
          inputMode={'text'}
        />
        <FormInput
          control={control}
          name="email"
          placeholder={t('authentication.email')}
          rules={{ required: true }}
          errors={errors}
          inputMode={'email'}
        />
        <FormInput
          control={control}
          name="phoneNumber"
          placeholder={t('authentication.phone_number')}
          rules={{ required: true }}
          errors={errors}
           inputMode={'tel'}
        />
        <FormInput
          control={control}
          name="password"
          placeholder={t('authentication.password')}
          rules={{ required: true }}
          errors={errors}
        />
      </View>
      <View style={styles.btnConatiner}>
        <Button text={t('authentication.register')} onPress={() => navigation.navigate('login')}/>
        <View style={styles.footerBtn}>
          <Text> {t('welcomeScreen.have_account')} </Text>
          <TextBtn text={t('welcomeScreen.sign_in')} onPress={() => navigation.navigate('login')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  title: { textAlign: 'center', fontWeight: '500', fontSize: 20, marginVertical: 20 },
  formContainer: {},
  btnConatiner: { alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 10,marginTop:30 },
  registeBtn: { backgroundColor: 'green', width: 200, alignItems: 'center', height: 25, justifyContent: 'center', borderRadius: 10, marginVertical: 20 },
  btnText: { color: '#fff' },
  signUpTxt: { color: 'blue' },
  footerBtn: { display: 'flex', flexDirection: 'row', gap: 10 },
});
