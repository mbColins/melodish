import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'; 
import React from 'react';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { ArrowRight, BookOpenCheck, Bus, CalendarCheckIcon,Telescope, Wallet2} from 'lucide-react-native';


const slides = [
    {
        'icon':<BookOpenCheck color="#fff" size={48} />,
        'title':'Browse Restaurants',
        'description':'Wellecome to melodish! Log in and Order delicious food From hundreds of restauratnts arround you',
    },
    {
        'icon':<Bus color="#fff" size={48} />,
        'title':'No time to cook',
        'description':'Order your favourite dish and we take care to bring it to you',
    },
    {
        'icon':<Telescope color="#fff" size={48} />,
        'title':'Search and Filter',
        'description':'Quickly Search the food item you like the most and we bring it to you',
    },
    {
        'icon':<Wallet2 color="#fff" size={48} />,
        'title':'Payments',
        'description':'Because we know you are busy, you can pay through by OM or MOMO',
    },
    {
        'icon':<CalendarCheckIcon color="#fff" size={48} />,
        'title':'Reoder and Save',
        'description':'You appreciated your previous order? reoder in one click. Book mark your favourite restaurant',
    },
 ];

const LandingScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Swiper>
           {
            slides.map((item,index) =>(
                 <View style={styles.slides} key={index}>
                    <Text style={styles.icon}> {item.icon} </Text>
                <Text style={styles.slideText}>{item.title}</Text>
                <Text style={styles.description}> {item.description} </Text>
            </View>
            ))
           }
        </Swiper>
        <TouchableOpacity 
        onPress={() => navigation.navigate('welcome')}
        style={styles.skipBtn}>
            <Text style={styles.skipBtnText}>skip</Text>
             <ArrowRight color="#fff" size={15}  style={styles.skipIcon}/>
        </TouchableOpacity>
    </View>
  );
}; 

export default LandingScreen;

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:'green',justifyContent:'center',alignItems:'center'},
    slides:{justifyContent:'center', alignItems:'center', alignContent:'center', flex:1},
    slideText:{color:'#fff', fontSize:25,marginVertical:10},
    skipBtn:{position:'absolute', bottom:20,right:30,display:'flex', flexDirection:'row'},
    skipBtnText:{color:'#fff',fontSize:15, paddingVertical:5},
    description:{textAlign:'center', fontSize:20, marginTop:'5%', paddingHorizontal:10},
    icon:{marginBottom:'15%'},
    skipIcon:{paddingVertical:15}
}); 