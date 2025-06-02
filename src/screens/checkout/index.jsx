/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { useTranslation } from 'react-i18next';
import BackNavigation from '../../components/BackNavigation';
import { useNavigation } from '@react-navigation/core';
import PressableBtn from '../../components/PressableBtn';
import Button from '../../components/Button';

const CheckoutScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation()
    return (
        <View>
            <Header
                title={t('Checkout')}
                headerTitleAlign="center"
                headerLeft={() => <BackNavigation text={t('cart')} onPress={() => navigation.goBack()} />}
            />
            <View>
                <Text style={{ padding: 5, fontSize: 20 }}> {t('Payment')} </Text>
                <View style={styles.paymentContainer}>
                    <Text>{t('select payment method')}</Text>
                    <View style={styles.paymentBox}>
                        <PressableBtn btnText={'Orange Money'} btnStyle={styles.btnStyle} />
                        <PressableBtn btnText={'Mobile Money'} btnStyle={styles.btnStyle} />
                        <PressableBtn btnText={'Visa cart'} btnStyle={styles.btnStyle} />
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff', marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginVertical: 10 }}>{t('delivery address')}</Text>
                    <View style={styles.addressBox}>
                        {/* <Text>consider using check box</Text> */}
                        <PressableBtn btnText={t('deliver to my corrent address')} btnStyle={styles.addressBtn} textStyle={styles.addressStyle} />
                        <PressableBtn btnText={t('provide a new address')} btnStyle={styles.addressBtn} textStyle={styles.addressStyle} />
                    </View>
                </View>
                <View>
                    <Text style={{fontSize:20,padding:4,paddingHorizontal:10}}>{t('Total')}</Text>
                    <Text style={styles.priceStyle}>450 FCFA</Text>
                </View>
            </View>
            <Button text={t('Playe order')} btnStyle={styles.placeOrderStyle}/>
        </View>
    );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
    btnStyle: { borderWidth: 1, height: 80, justifyContent: 'center', padding: 4, width: 100, borderColor: 'green' },
    paymentBox: { display: 'flex', flexDirection: 'row', gap: 20, marginTop: 10 },
    paymentContainer: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', marginHorizontal: 10, height: 150 },
    addressBox: { display: 'flex', flexDirection: 'column', gap: 15, height: 80, alignItems: 'flex-start' },
    addressBtn: { borderBottomWidth: 0.5 },
    addressStyle: { textAlign: 'left' },
    priceStyle:{backgroundColor:'#fff',marginHorizontal:10,textAlign:'center',paddingVertical:12,color:'green',fontWeight:'bold',fontSize:20,height:50},
    placeOrderStyle:{marginTop:'55%'}
});
