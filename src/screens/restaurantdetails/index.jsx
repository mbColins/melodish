/* eslint-disable react-native/no-inline-styles */
import { ImageBackground, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { ChevronLeft, Clock, Heart, LocationEdit, Star } from 'lucide-react-native';
import PressableBtn from '../../components/PressableBtn';
import Titles from '../../components/Titles';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Menu from '../taps/Menu';
import Info from '../taps/Info';
import Reviews from '../taps/Reviews';
import Galery from '../taps/Galery';

const img = require('../../assets/images/food5.jpg');



const RestaurantDetailsScreen = () => {
    const route = useRoute();
    const { item } = route.params;
    const navigation = useNavigation();

     const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

    const routes = [
        { key: 'menu', title: 'Menu' },
        { key: 'info', title: 'Info' },
        { key: 'reviews', title: 'Reviews' },
        { key: 'galery', title: 'Galery' },
    ];

    const renderScene = SceneMap({
        menu: Menu,
        info: Info,
        reviews: Reviews,
        galery: Galery
    });

    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground source={img} style={styles.restoImg}>
                    <View style={styles.restoHeader}>
                        <PressableBtn btnText={<ChevronLeft color={'#fff'} size={40} />} onPress={() => navigation.goBack()} />
                        <PressableBtn btnText={<Heart color={'red'} size={40} />} />
                    </View>
                </ImageBackground>
                <Titles text={item} textStyle={styles.textStyle} />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        <Text><LocationEdit size={15} /> rue de la joie bonnamoussadi</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                            <Text><Star color={'orange'} size={15} /> 4.7</Text>
                            <Text><Clock color={'orange'} size={15} /> 4.7 min</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'green', alignItems: 'center', padding: 5, borderRadius: 10 }}>
                        <Text style={{ color: '#fff' }}>20min</Text>
                        <Text style={{ color: '#fff', textAlign: 'center' }}>delivery</Text>
                    </View>
                </View>
                <View style={styles.tabview}>
                     <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    indicatorColor={'green'}
                    initialLayout={{ width: layout.width,height:layout.height }}
                    style={{backgroundColor: '#f2f2f2',height:layout.height}}
                    renderTabBar={props => <TabBar {...props} style={{backgroundColor: 'green '}}/>}
                />
                </View>
            </ScrollView>
        </View>
    );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
    restoHeader: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
    restoImg: { height: 200 },
    textStyle: { marginTop: 10, paddingLeft: 10 },
    container: { flex: 1, backgroundColor: '#fff'},
    tabview:{height: '100%',marginTop:4},
});

