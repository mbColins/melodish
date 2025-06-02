/* eslint-disable react-native/no-inline-styles */
import { FlatList, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PressableBtn from '../../components/PressableBtn';
import { Book, BookOpenCheck, BookText, ChevronRight } from 'lucide-react-native';

const Events = [
  {
    'name': 'Live Jazz Night',
    'date': '2025-06-15',
    'time': '19:00',
    'description': "An evening of live jazz with Chef's signature buffet.",
    'type': 'Live Music',
    'price': '15000 XAF',
  },
  {
    'name': 'Wine Tasting Event',
    'date': '2025-06-22',
    'time': '18:00',
    'description': 'Explore a curated selection of wines from France and South Africa.',
    'type': 'Wine Tasting',
    'price': '10000 XAF',
  },
  {
    'name': 'Wine Tasting Event',
    'date': '2025-06-22',
    'time': '18:00',
    'description': 'Explore a curated selection of wines from France and South Africa.',
    'type': 'Wine Tasting',
    'price': '10000 XAF',
  },
];


const Info = () => {
  const { t } = useTranslation();
  const layout = useWindowDimensions()

  return (
    <View style={[styles.container, { width: layout }]}>
      <Text style={{ fontWeight: 'bold', marginVertical: 4 }}>Business hours</Text>
      <View style={{ backgroundColor: '#fff', padding: 4, width: '100%', borderRadius: 10, height: 40 }}>
        <Text style={{ paddingVertical: 4 }}>Monday to Saturday 9:AM - 9:PM</Text>
      </View>
      <Text style={{ fontWeight: 'bold', marginVertical: 4 }}>Upcomming Events</Text>
      {Events.length == 0 ? <View style={styles.noEvent}><Text>{t('No Scheduled Event')} </Text></View> : <View>
        <FlatList
          data={Events}
          renderItem={({ item, index }) => (
            <View style={{ backgroundColor: '#fff', margin: 4, padding: 5, borderRadius: 10, width: 360 }} key={index}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 2 }}>
                <Text style={{ fontWeight: 'bold', marginVertical: 4 }}>{item.name}</Text>
                <Pressable style={{ display: 'flex', flexDirection: 'row' }}>
                  <Text style={{ color: 'green' }}>book now</Text>
                  <ChevronRight size={20} color={'green'} />
                </Pressable>
              </View>
              <Text>{t('description')}: {item.description}</Text>
              <Text>{t('Event type')}: {item.type}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{t('Date')}: {item.date}</Text>
                <Text>{t('time')}: {item.time}</Text>
              </View>
              <Text style={{ fontWeight: 'bold' }}>{t('Pass')}: {item.price}</Text>
            </View>
          )}
          horizontal
        />
      </View>}

    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 5 },
  noEvent: { justifyContent: 'center', alignItems: 'center', height: 150, backgroundColor: '#fff' }
});
