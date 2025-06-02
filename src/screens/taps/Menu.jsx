/* eslint-disable react-native/no-inline-styles */
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Titles from '../../components/Titles';
import { useTranslation } from 'react-i18next';
import PressableBtn from '../../components/PressableBtn';
import { ChevronRight, Eye, ShoppingCart } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';


const menu = [
  {
    'category': 'Entrées',
    'items': [
      'Suya de boeuf',
      'Escargots grillés',
      'Koki (Gâteau de haricots)',
      'Accra (Beignets de haricots)',
      'Plantain chips',
    ],
  },
  {
    'category': 'Plats Principaux',
    'items': [
      'Ndolé + Plantains bouillis',
      'Eru + Baton de manioc',
      'Mbongo Tchobi + Riz',
      'Poisson braisé + Frites de plantain',
      'Poulet DG + Riz sauté',
    ],
  },
  {
    'category': 'Snacks',
    'items': [
      'Beignets + Haricots',
      'Omelette spéciale + Pain',
      'Puff-puff',
      'Bofrot',
      'Tapioca',
    ],
  },
  {
    'category': 'Soups / Sauces',
    'items': [
      "Soupe d'okra",
      'Pepper Soup de chèvre',
      "Soupe d'arachide",
      "Soupe d'Egusi",
    ],
  },
  {
    'category': 'Desserts',
    'items': [
      'Salade de fruits',
      'Tranches de gâteau',
      'Yaourt local',
      'Ananas frais',
    ],
  },
  {
    'category': 'Boissons',
    'items': [
      'Jus de foléré',
      'Jus de gingembre',
      'Palm wine',
      'Castel Beer',
      'Eau minérale',
    ],
  },
];



const Menu = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          data={menu}
          renderItem={({ item, index }) => (
            <View key={index}>
              <Text style={styles.titles}>{t(item.category)}</Text>
              {
                item.items.map((itm, index) => (
                  <View style={styles.menuItem} key={index}>
                    <Text style={{ marginVertical: 5 }}>{itm}</Text>
                    <PressableBtn btnText={<ChevronRight color={'green'} onPress={() => navigation.navigate('food', {name: itm})}/>} />
                  </View>
                ))
              }
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 5},
  titles: { marginVertical: 10, fontWeight: 500, fontSize: 15 },
  menuItem: { display: 'flex', flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'space-between',marginVertical:2,backgroundColor:'#fff' },
});
