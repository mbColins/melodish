/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import { Pressable, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { useTranslation } from 'react-i18next';
import { Bus, Camera, ChevronLeft, ChevronRight, Heart, PhoneCall, Settings, UserCircle } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';
import Button from '../../components/Button';

const profileItems = [
  {
    'name': 'profile_screen.account_details',
    'icon': <UserCircle size={30} color={'blue'} />,
    'navigation': 'account_details',
  },
  {
    'name': 'profile_screen.favourite_restaurants',
    'icon': <Heart size={30} color={'red'} />,
    'navigation': 'favourite_resto',
  },
  {
    'name': 'profile_screen.order_history',
    'icon': <Bus size={30} color={'violet'} />,
    'navigation': 'order_history',
  },
  {
    'name': 'profile_screen.settings',
    'icon': <Settings size={30} color={'gray'} />,
    'navigation': 'settings',
  },
  {
    'name': 'profile_screen.contact_us',
    'icon': <PhoneCall size={30} color={'green'} />,
    'navigation': 'contact_us',
  },

];

const ProfileScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();



  return (
    <View>
      <Header
        title={t('Profile')}
        headerTitleAlign="center"
        headerLeft={() => (
          <Pressable onPress={() => navigation.goBack()}
            style={styles.headerLeftBtn}>
            <ChevronLeft />
            <Text style={{ paddingVertical: 2 }}>home</Text>
          </Pressable>)}
      />
      <TouchableOpacity
      onPress={() => navigation.navigate('edith_profile')}
      style={styles.imageConatiner}>
        <Image source={require('../../assets/images/food5.jpg')} style={styles.profileImg} />
        <Camera  style={styles.cameraStyle} size={35} color={'gray'}/>
        <Text style={{ marginVertical: 10 }}>John Doe</Text>
      </TouchableOpacity>
      <FlatList
        data={profileItems}
        renderItem={({ item, index }) => (
          <TouchableOpacity 
          onPress={() => navigation.navigate(item.navigation)}
          style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 10 }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }} >
              <Text>{item.icon}</Text>
              <Text style={{ textAlign: 'center', marginVertical: 5, fontWeight: '500' }}>{t(item.name)}</Text>
            </View>
            <ChevronRight size={30} color={'gray'} />
          </TouchableOpacity>
        )}
      />
      <View style={{ marginTop: 50 }}>
        <Button text={t('profile_screen.log_out')} onPress={() => navigation.navigate('login')} />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  headerLeftBtn: { paddingLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' },
  profileImg: { height: 130, width: 130, borderRadius: 70 },
  textStyle: {},
  cameraStyle:{position:'absolute', right:140,bottom:30},
  imageConatiner:{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginVertical: 20 }
});
