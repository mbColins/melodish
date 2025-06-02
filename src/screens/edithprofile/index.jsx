/* eslint-disable react/no-unstable-nested-components */
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Header } from '@react-navigation/elements';
import BackNavigation from '../../components/BackNavigation';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/core';
import Titles from '../../components/Titles';
import FormInput from '../../components/TextInput';
import { useForm } from 'react-hook-form';
import PressableBtn from '../../components/PressableBtn';

const EdithProfileScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const {showpassword,setShowPassword} = useState(false);

    return (
        <View>
            <Header
                title={t('profile_screen.edith_profile')}
                headerTitleAlign="center"
                headerLeft={() => <BackNavigation text={t('profile')} onPress={() => navigation.goBack()} />} 
                headerRight={() => <PressableBtn btnText={'done'} btnStyle={styles.btnStyle} textStyle={styles.btnTextStyle}/>}
                />
                
            <View style={styles.profileContainer}>
                <Titles text={t('profile_screen.public_profile').toUpperCase()} textStyle={styles.textStyle} />
                <View style={styles.editableFields}>
                    <Text style={styles.label}>user name</Text>
                    <FormInput
                        control={control}
                        name="username"
                        placeholder={t('john doe')}
                        rules={{ required: true }}
                        errors={errors}
                        otherStyle={styles.inputStyle}
                    />
                </View>
                <View style={styles.editableFields}>
                    <Text style={styles.label}>name</Text>
                    <FormInput
                        control={control}
                        name="name"
                        placeholder={t('john doe')}
                        rules={{ required: true }}
                        errors={errors}
                        otherStyle={styles.inputStyle}
                    />
                </View>

                <Titles text={t('profile_screen.private_details').toUpperCase()} textStyle={styles.textStyle} />
                 <View style={styles.editableFields}>
                    <Text style={styles.label}>email</Text>
                    <FormInput
                        control={control}
                        name="email"
                        placeholder={'joe@gmail.com'}
                        rules={{ required: true }}
                        errors={errors}
                        otherStyle={styles.inputStyle}
                    />
                </View>
                 <View style={styles.editableFields}>
                    <Text style={styles.label}>phone number</Text>
                    <FormInput
                        control={control}
                        name="phone"
                        placeholder={'+236 88767287'}
                        rules={{ required: true }}
                        errors={errors}
                        otherStyle={styles.inputStyle}
                    />
                </View>
                 <View style={styles.editableFields}>
                    <Text style={styles.label}>Password</Text>
                    <FormInput
                        control={control}
                        name="phone"
                        placeholder={'password12345'}
                        rules={{ required: true }}
                        errors={errors}
                        otherStyle={styles.inputStyle}
                        secureTextEntry={showpassword}
                    />
                </View>

            </View>
        </View>
    );
};

export default EdithProfileScreen;

const styles = StyleSheet.create({
    textStyle: { fontSize: 15, paddingHorizontal: 10, color: 'gray', marginBottom: 15 },
    inputStyle: { borderBottomWidth: 0, width: 120 },
    profileContainer: { marginTop: 10 },
    editableFields: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderBottomWidth: 0.3, backgroundColor: '#fff' },
    label: { paddingTop: 15 },
    btnStyle:{paddingRight:15},
    btnTextStyle:{color:'green'}
});
