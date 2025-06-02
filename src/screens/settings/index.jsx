/* eslint-disable react/no-unstable-nested-components */
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/core';
import BackNavigation from '../../components/BackNavigation';
import Button from '../../components/Button';
import PressableBtn from '../../components/PressableBtn';

const SettingSreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Header
                title={t('profile_screen.setting')}
                headerTitleAlign="center"
                headerLeft={() => <BackNavigation text={t('profile_screen.profile')} onPress={() => navigation.goBack()} />}
            />
            <Text style={styles.securityTitle}>{t('profile_screen.security').toUpperCase()}</Text>
            <View style={styles.securityContainer}>
                <View style={styles.security}>
                    <Text>{t('profile_screen.enable_face_id')}/{t('profile_screen.touchId_login')}</Text>
                    <Switch />
                </View>
            </View>
            <Text style={styles.swithcBtnDesc}>{t('profile_screen.turned_off')}</Text>
            <Text style={styles.securityTitle}>{t('profile_screen.push_notification').toUpperCase()}</Text>
            <View style={styles.pushNotificationContainer}>
                <View style={styles.notification}>
                    <Text>{t('profile_screen.order_update')}</Text>
                    <Switch />
                </View>
                <View style={styles.notification}>
                    <Text>{t('profile_screen.new_arrivals')}</Text>
                    <Switch />
                </View>
                <View style={styles.notification}>
                    <Text>{t('profile_screen.promotions')}</Text>
                    <Switch />
                </View>
                <View style={styles.notification}>
                    <Text>{t('profile_screen.sales_alert')}</Text>
                    <Switch />
                </View>
            </View>
             <Text style={styles.securityTitle}>{t('profile_screen.account').toUpperCase()}</Text>
            <View style={styles.account}>
               <PressableBtn  btnText={t('profile_screen.support')} btnStyle={styles.btnStyle} textStyle={styles.textStyle}/>
               <PressableBtn  btnText={t('profile_screen.log_out')} btnStyle={styles.btnStyle} textStyle={styles.textStyle}/>
            </View>
        </View>
    );
};

export default SettingSreen;

const styles = StyleSheet.create({
    container: { flex: 1 },
    switchStyle: { color: 'green' },
    security: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 },
     notification: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10,borderBottomWidth:0.3,color:'gray'},
    securityContainer: { backgroundColor: '#fff', paddingHorizontal: 10 },
    pushNotificationContainer: { backgroundColor: '#fff', paddingHorizontal: 10,marginTop:5 },
    securityTitle: { paddingHorizontal: 10, marginTop: 10 },
    swithcBtnDesc: { paddingHorizontal: 10, paddingVertical: 10, color: 'gray' },
    btnStyle:{backgroundColor:'green'},
    account:{display:'flex',flexDirection:'column',gap:3,marginTop:20},
    textStyle:{padding:4,color:'#fff'},
});
