import { FlatList, Keyboard, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowLeftIcon, Search, X } from 'lucide-react-native';
import { datas } from '../screens/searchscreen';
import FormInput from './TextInput';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import PressableBtn from './PressableBtn';
import { useNavigation } from '@react-navigation/core';

const SearchBtn = () => {
  const [data, setData] = useState([...datas]);
  const [isTextInput, setTextIput] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const { control, handleSubmit, rules, formState: { errors } } = useForm();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const textInput = useRef();

  const contains = ({ name }, query) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };

  const handleSearch = (text) => {
    const filteredData = datas.filter((cusines) => 
      cusines.name.toLowerCase().includes(text.toLowerCase()));
    setData([...filteredData])
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.searchContainer}>
        <Search />
        <Text>search.......</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
      >
        <View style={styles.searchInput}>
          <PressableBtn btnText={<ArrowLeft />} btnStyle={styles.btnStyle} onPress={() => setModalVisible(!modalVisible)} />
          <Controller
            control={control}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputStyle}
                placeholder={t('search.......')}
                placeholderTextColor={'#000'}
                onBlur={() => setTextIput(false)}
                onFocus={() => setTextIput(true)}
                onChangeText={handleSearch}
                value={value}
                ref={textInput}
              />
            )}
            name="search"
          />
          <PressableBtn btnText={<X />} btnStyle={styles.btnStyle} onPress={() => textInput.current.clear()} />
        </View>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss;
                setModalVisible(!modalVisible);
                setTextIput(true);
                navigation.navigate('results',{item: item.name});
              }}
              key={index}>
              <View>
                <Text style={styles.searchItem}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </Modal>
    </View>
  );
};

export default SearchBtn;

const styles = StyleSheet.create({
  searchContainer: { backgroundColor: '#fff', height: 50, paddingVertical: 15, display: 'flex', flexDirection: 'row', gap: 10, paddingHorizontal: 10 },
  inputStyle: { width: 300, boder: 'none', marginTop: 8, paddingLeft: 10 },
  btnStyle: { marginTop: 15 },
  searchInput: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, borderBottomWidth: 0.5, width: '95%', marginBottom: 15 },
  searchItem: { margin: 5, marginLeft: 15, color: 'gray', fontSize: 15 },
});
