/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { ChevronLeft } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import BackNavigation from '../../components/BackNavigation';
import { useNavigation } from '@react-navigation/core';
import Titles from '../../components/Titles';
import Button from '../../components/Button';

const contactAddress = [
    {

    }
]
const ContactUsScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Header
                title={t('profile_screen.contact')}
                headerTitleAlign="center"
                headerLeft={() => <BackNavigation text={t('profile')} onPress={() => navigation.goBack()} />}
            />
            <View>
                <Titles text={t('contact').toUpperCase()} textStyle={styles.textStyle} />
                <View style={{ backgroundColor: '#fff', height: 120, paddingHorizontal: 10,marginTop:10 }}>
                    <Titles text={t('profile_screen.our_address')} />
                    <Text>1234 Akwa Rue de la joie </Text>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,borderTopWidth:0.3,marginVertical:10,paddingVertical:10}}>
                    <Text>{t('profile_screen.email_us')}</Text>
                    <Text>melongcolins750@gmail.com</Text>
                </View>
                </View>
                <Text style={{textAlign:'center',marginVertical:10}}>our business hours are monday - friday, 10am - 5pm</Text>
            </View>
            <Button text={t('profile_screen.call_us')}  btnStyle={styles.btnStyle}/>
        </View>
    );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
    textStyle: { fontSize: 15, color: 'gray', fontWeight: 10,paddingHorizontal:10 },
    btnStyle:{marginTop:200},
    container:{flex:1}
});
