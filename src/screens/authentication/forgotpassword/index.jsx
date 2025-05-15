/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AuthHeader from '../../../components/AuthHeader';
import FormInput from '../../../components/TextInput';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import Titles from '../../../components/Titles';

const ForgotPasswordScreen = () => {

  const { control, handleSubmit, formState: { errors } } = useForm();
  const { t } = useTranslation();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AuthHeader />
      <View style={styles.forgotTitle}>
        <Titles text={t('authentication.forgot_title_')} />

      </View>
      <View style={styles.formConatainer}>
        <FormInput
          control={control}
          name="forgotpass"
          errors={errors}
          placeholder={t('authentication.provide_email')}
          inputMode={'email'}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('resetPass')}
            style={styles.submitBtn}>
            <Text style={{ color: '#fff' }}> {t('authentication.submit')} </Text>
          </TouchableOpacity>
          <Text>{t('authentication.forgot_pass')}</Text>
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  forgotTitle: { alignContent: 'center', alignItems: 'center', marginVertical: 20 },
  header: { fontSize: 20, fontWeight: 500 },
  formConatainer: { alignContent: 'center', justifyContent: 'center' },
  submitBtn: { backgroundColor: 'green', width: 200, alignItems: 'center', height: 30, justifyContent: 'center', borderRadius: 10, marginVertical: 50 },

});
