import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FormInput from '../../../components/TextInput';
import { useForm } from 'react-hook-form';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigation = useNavigation();

  const onSubmit = (data) => { console.log(data); };
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={40} color={'#000'} />
        </TouchableOpacity>

      </View>
      <FormInput
        control={control}
        name="firstName"
        placeholder="First name"
        rules={{ required: true }}
        errors={errors}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor:'green',
    borderBottomRightRadius:25,
    height:100,
  },
});