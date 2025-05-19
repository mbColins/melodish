
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import FormInput from '../../../components/TextInput';
import { useForm } from 'react-hook-form';
import { Eye, EyeClosed, Facebook, KeyRound } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import AuthHeader from '../../../components/AuthHeader';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/Button';
import TextBtn from '../../../components/TextBtn';
import Titles from '../../../components/Titles';
import { useAuthUserMutation } from '../../../redux/apis/authenticationApi';
import ModalComponent from '../../../components/ModalComponent';

const LoginScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [authUser, { data = [], isLoading, isError, error }] = useAuthUserMutation();


  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [showPassWord, SetShowPassWord] = useState(false);


  const onSubmit = async (formData) => {
    // setModalVisible(true);
    // try {
    //   const result = await authUser(formData).unwrap();
    //   console.log('Login successful');
    //   setModalVisible(false);
      navigation.navigate('home');
    // } catch (err) {
    //   Alert.alert('Error', 'yes');
    // } finally {
    //   setModalVisible(false);
    // }
  };




  return (
    <ScrollView style={styles.container}>
      <AuthHeader />
      <View>
        <Titles text={t('welcomeScreen.Login')} textStyle={styles.titleText}/>
      </View>
      <View style={styles.formContainer}>
        <View>
          <FormInput
            control={control}
            name="userName"
            placeholder={t('authentication.user_name')}
            rules={{ required: true }}
            errors={errors}
            inputMode={'text'}
          />
          <View style={styles.optionBtn}>
            <KeyRound color={'green'} />
          </View>
        </View>
        <View>
          <FormInput
            control={control}
            name="password"
            placeholder={t('authentication.password')}
            rules={{ required: true }}
            errors={errors}
            secureTextEntry={showPassWord}
            otherStyle={styles.inputStyle}
          />
          <TouchableOpacity onPress={() => SetShowPassWord(!showPassWord)} style={styles.optionBtn}>
            {showPassWord ? <EyeClosed color={'green'} /> : <Eye color={'green'} />}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button text={t('welcomeScreen.Login')} onPress={handleSubmit(onSubmit)} />
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
      <ModalComponent modalText={t('authentication.modalText')} isLoading={isLoading} modalVisible={modalVisible} login={true} />
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
  container: { flex: 1 },
  optionBtn: { paddingTop: 20, position: 'absolute', right: 20 },
  inputAndIcon: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 },
  titleText:{textAlign:'center'}
});
