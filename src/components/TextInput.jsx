// components/FormInput.js
import { StyleSheet, Text, View, TextInput as RNTextInput } from 'react-native';
import React from 'react';
import { Controller } from 'react-hook-form';

const FormInput = ({ control, name, rules = {}, placeholder, errors }) => {
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, onBlur, value } }) => (
                    <RNTextInput
                        style={styles.input}
                        placeholder={placeholder}
                        placeholderTextColor={'#000'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors?.[name] && <Text style={styles.errorText}>This field is required.</Text>}
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        alignContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        padding: 10,
        width: '90%',


    },
    errorText: {
        color: 'red',
        marginTop: 4,
    },
});
