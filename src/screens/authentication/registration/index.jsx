import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import AuthHeader from '../../../components/AuthHeader';
import FormInput from '../../../components/TextInput';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button';
import TextBtn from '../../../components/TextBtn';
import Titles from '../../../components/Titles';
import { useRegisterUserMutation } from '../../../redux/apis/authenticationApi';
import ModalComponent from '../../../components/ModalComponent';
import { EqualApproximatelyIcon, Eye, EyeClosed, Key, KeyRound, Mail, PersonStanding, Phone, Presentation, User } from 'lucide-react-native';
// \  const [authUser, { data = [], isLoading, isError, error }] = useAuthUserMutation();

const RegistrationScreen = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const [registerUser, { data = [], isLoading, isError, error }] = useRegisterUserMutation();
  const [showPassWord, SetShowPassWord] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigation = useNavigation();
  const { t } = useTranslation();

  const onSubmit = async (formData) => {
    setModalVisible(true);
    try {
      const result = await registerUser(formData).unwrap();
      console.log('data submited');
      setModalVisible(false);
      navigation.navigate('login');
    } catch (err) {
      Alert.alert('Error', 'yes');
    } finally {
      setModalVisible(false);
    }

  };

  return (
    <ScrollView>
      <AuthHeader />
      <Titles text={t('welcomeScreen.registration_')} />
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
            name="firstName"
            placeholder={t('authentication.firstName')}
            rules={{ required: true }}
            errors={errors}
            inputMode={'text'}
          />

          <View style={styles.optionBtn}>
            <User color={'green'} />
          </View>
        </View>
        <View>
          <FormInput
            control={control}
            name="email"
            placeholder={t('authentication.email')}
            rules={{ required: true }}
            errors={errors}
            inputMode={'email'}
          />
          <View style={styles.optionBtn}>
            <Mail color={'green'} />
          </View>
        </View>
        <View>
          <FormInput
            control={control}
            name="phoneNumber"
            placeholder={t('authentication.phone_number')}
            rules={{ required: true }}
            errors={errors}
            inputMode={'tel'}
          />
          <View style={styles.optionBtn}>
            <Phone color={'green'} />
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
      <View style={styles.btnConatiner}>
        <Button text={t('authentication.register')} onPress={handleSubmit(onSubmit)} />
        <View style={styles.footerBtn}>
          <Text> {t('welcomeScreen.have_account')} </Text>
          <TextBtn text={t('welcomeScreen.sign_in')} onPress={() => navigation.navigate('login')} />
        </View>
      </View>
      <ModalComponent modalText={t('authentication.modalTextRegistration')} isLoading={isLoading} modalVisible={modalVisible} login={false} />
    </ScrollView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  title: { textAlign: 'center', fontWeight: '500', fontSize: 20, marginVertical: 20 },
  formContainer: {},
  btnConatiner: { alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 10, marginTop: 30 },
  registeBtn: { backgroundColor: 'green', width: 200, alignItems: 'center', height: 25, justifyContent: 'center', borderRadius: 10, marginVertical: 20 },
  btnText: { color: '#fff' },
  signUpTxt: { color: 'blue' },
  footerBtn: { display: 'flex', flexDirection: 'row', gap: 10 },
  optionBtn: { paddingTop: 20, position: 'absolute', right: 20 },
});
