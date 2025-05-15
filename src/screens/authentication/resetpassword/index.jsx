/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AuthHeader from '../../../components/AuthHeader';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import FormInput from '../../../components/TextInput';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button';
import Titles from '../../../components/Titles';

const ResetPasswordScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm();
    return (
        <View style={styles.container}>
            <AuthHeader />
           <Titles text={t('authentication.new_pass')} />
            <View style={styles.formContainer}>
                <FormInput
                    control={control}
                    name={'newPass'}
                    placeholder={t('authentication.new_pass_word')}
                    errors={errors}
                    rules={{ required: true }}
                />
                 <FormInput
                    control={control}
                    name={'confirmPass'}
                    placeholder={t('authentication.confirm_pass')}
                    errors={errors}
                    rules={{ required: true }}
                />
            </View>
            <Button text={t('submit_btn')} onPress={() => navigation.navigate('login')}/>
        </View>
    );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
    container: { flex: 1 },
    formContainer:{display:'flex',flexDirection:'column',gap:10,marginBottom:40},
});
