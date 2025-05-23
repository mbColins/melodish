/* eslint-disable react-native/no-inline-styles */
import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import FormInput from '../../../components/TextInput';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/core';
import { Cross, Minus, Plus, X } from 'lucide-react-native';
import PressableBtn from '../../../components/PressableBtn';

const ForgorPassModal = ({ modalVisible, onPress,closeModal,cart ,item_quantity,decrement,increment}) => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const navigation = useNavigation();
    const { t } = useTranslation();



    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={onPress}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Pressable style={styles.close} onPress={closeModal}>
                                <X />
                            </Pressable>
                            <FormInput
                                placeholder={t('authentication.otp_placeholder')}
                                control={control}
                                name={'Otp'}
                                otherStyle={styles.otherStyle}
                            />
                            <Button text={t('authentication.submit_otp')} onPress={() => navigation.navigate('resetPass')} />
                        </View>
                    </View>
                </Modal>
               {cart &&  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={onPress}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                             <Pressable style={styles.close} onPress={closeModal}>
                                <X />
                            </Pressable>
                           <Text>fried rice</Text>
                           <View style={{display:'flex',flexDirection:'row',gap:20,marginVertical:15}}>
                            <PressableBtn btnText={<Minus size={17}/>} onPress={decrement}/>
                            <Text>{item_quantity}</Text>
                            <PressableBtn btnText={<Plus size={17}/>} onPress={increment}/>
                           </View>
                            <Button text={t('cartScreen.update_item')} onPress={closeModal}/>
                                < PressableBtn  btnText={t('cartScreen.remove_item')}  textStyle={styles.btnTextStyle}/>
                        </View>
                    </View>
                </Modal>}
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default ForgorPassModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 128, 0, 0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 400,
        height: 200,
        position: 'absolute',
        bottom: 0,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    otherStyle: { width: 200, marginBottom: 50 },
    close:{position:'absolute',right:20,paddingTop:10},
    // close1:{position:'absolute',buttom:10},
    btnTextStyle:{color:'red',marginVertical:20},
});
