import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const AuthHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <ChevronLeft size={40} color={'#fff'} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Melodish</Text>
        </View>
    );
};

export default AuthHeader;

const styles = StyleSheet.create({
    header: { padding: 10, backgroundColor: 'green', borderBottomRightRadius: 25, height: 200 },
    headerText: { color: '#fff', textAlign: 'center', fontSize: 30, marginVertical: 50 },
});
