/* eslint-disable react-native/no-inline-styles */
import { FlatList, Image, ImageBackground, Modal, Pressable, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import React, { useState } from 'react';
import { Cross, X } from 'lucide-react-native';

const img = require('../../assets/images/food5.jpg');

const images = [
  {
    'image': img,
  },
  {
    'image': img,
  },
  {
    'image': img,
  },
  {
    'image': img,
  },
  {
    'image': img,
  },
];

const Galery = () => {
  const layout = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(image);
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => {
              setImage(item.image);
              setModalVisible(true)
            }}
            key={index} style={styles.galleryBtn}>
            <View style={{ height: 150, width: 100 }}>
              <Image source={item.image} style={{ height: 150, width: layout.width - 5 }} />
            </View>
          </Pressable>
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <ImageBackground source={image} style={[styles.modalView, { height: layout.height - 30, width: layout.width - 5 }]}>
            <Pressable style={styles.buttonClose} onPress={() => setModalVisible(false)}>
              <X color={'#fff'} size={40} />
            </Pressable>
          </ImageBackground>
        </View>
      </Modal>
    </View>
  );
};

export default Galery;

const styles = StyleSheet.create({
  galleryBtn: { margin: 4 },
  centeredView: { backgroundColor: '#fff', flex: 1, justifyContent: 'center', alignItems: 'center' },
  selectedImage: {},
  buttonClose: { height: 40, position: 'absolute', top: 1, right: 0,backgroundColor:'green' },

});
