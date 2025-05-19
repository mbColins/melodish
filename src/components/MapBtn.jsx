
import { StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
import { Locate} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';

const MapBtn = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('maps')}
    style={styles.mapBtn}>
      <Locate color={'#fff'}/>
    </TouchableOpacity>
  );
};

export default MapBtn;

const styles = StyleSheet.create({
    mapBtn:{position:'absolute',bottom:40,right:10,backgroundColor:'green',borderRadius:50,width:50,height:50,justifyContent:'center',alignItems:'center'}
});
