/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, Modal, Pressable, Alert, ActivityIndicator, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ModalComponent = ({ modalVisible, onPress,isLoading,modalText,login,forgotPass}) => {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onPress} style={styles.modalStyle}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ActivityIndicator color={'green'} size="large"/>
            {login && <Text style={{textAlign:'center'}}>{modalText}</Text>}
            {!login && <Text style={{textAlign:'center'}}>{modalText}</Text>}
          </View>
        </View>
      </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
 centeredView: {flex: 1,justifyContent: 'center',alignContent:'center',alignItems:'center',backgroundColor: 'rgba(0, 128, 0, 0.5)'},
   modalView: {
    width:300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'green',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 4,
    elevation: 5,
  },
  // centeredView:{justifyContent:'center',alignItems:'center'},
  // modalView:{backgroundColor:'#fff', height:100,width:300,justifyContent:'center',shadowColor: '#000',shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   }},



});
