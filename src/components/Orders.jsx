/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Button from './Button';
import { useTranslation } from 'react-i18next';

const OrdersComponent = ({ image, menuItem = {}, history, status }) => {
    const { t } = useTranslation();


    return (
        <View>
            {/* Shared image for the group */}
            <View>
                <Image source={image} style={styles.imgStyle} />
                {history && <View style={styles.addressDetails}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '500', fontSize: 15 }}>delivered to : st tropez Makepe rue 1234</Text>
                </View>}
            </View>

            {/* List of items under that image */}
            {menuItem.map((menu, idx) => (
                <View key={idx} style={styles.carts}>
                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                        <Text style={styles.qty}>{menu.quantity}</Text>
                        <Text style={{ marginLeft: 10 }}>{menu.name}</Text>
                    </View>
                    <Text>{menu.price}</Text>
                </View>
            ))}
            <View style={styles.btnPriceStyle}>
                <Text style={{ fontWeight: '500', paddingVertical: 5 }}>1500F</Text>
                {!history ? <Button text={t('orderScreen.re_order')} /> : <Button text={t(status)} btnStyle={styles.btnStyle} />}
            </View>
        </View>
    );
};

export default OrdersComponent;

const styles = StyleSheet.create({
    imgStyle: { height: 200, margin: 5, width: '98%' },
    carts: { display: 'flex', flexDirection: 'row', gap: '10', paddingHorizontal: 10, margin: 4, justifyContent: 'space-between' },
    qty: { borderWidth: 1, padding: 2, width: 20, height: 22, textAlign: 'center', borderColor: 'green' },
    btnPriceStyle: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 12, marginVertical: 10 },
    addressDetails: { position: 'absolute', margin: 60 },
});
