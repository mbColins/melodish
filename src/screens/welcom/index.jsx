/* eslint-disable semi */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BookOpenCheckIcon, Globe } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { switchLanguage } from '../../utilities/SwitchLangauge';

const WellComeScreen = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={() => switchLanguage('fr')}
            style={styles.language}>
                <Globe color={'green'} size={20} />
            </TouchableOpacity>
            <BookOpenCheckIcon color={'green'} size={'70px'} style={styles.welcomeIcon} />
            <View>
                <Text style={styles.title}>{t('welcomeScreen.wlecome_msge')}</Text>
                <Text style={styles.message}>{t('welcomeScreen.order')}</Text>
            </View>
            <View style={styles.btns}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('login')}
                    style={styles.loginBtn}>
                    <Text style={styles.loginText}>{t('welcomeScreen.Login')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('registration')}
                    style={styles.signUpBtn}>
                    <Text style={styles.signUpText}>{t('welcomeScreen.Sign_up')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WellComeScreen

const styles = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
    welcomeIcon: { marginBottom: '20%', marginTop: '50%' },
    title: { fontSize: 30, color: 'green', fontWeight: 'bold', textAlign: 'center' },
    message: { textAlign: 'center' },
    loginBtn: { backgroundColor: 'green', width: 200, borderRadius: 10, alignItems: 'center', height: 30 },
    loginText: { color: '#fff', fontSize: 20, paddingVertical: 3 },
    signUpText: { color: '#000', fontSize: 20, paddingVertical: 3 },
    signUpBtn: { width: 200, borderRadius: 10, alignItems: 'center', height: 30, borderWidth: 1, borderColor: 'green' },
    btns: { display: 'flex', flexDirection: 'column', gap: 10, marginTop: '30%' },
    language: { position: 'absolute', top: 20, right: 20 }
})