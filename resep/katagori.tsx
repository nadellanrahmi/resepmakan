import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import Index from '..';
import { useLocalSearchParams } from 'expo-router';

const dataCard = require('@/assets/dataCard.json');
type post = {
  id: number,
  sumbergambar: string,
  keterangan: string,
  jumlah: number
}

export default function katagori() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const filteredData = dataCard.posts.filter((item: post) => {
    let idNumber: number
    idNumber = +id
    if (item.id == idNumber){
      return item
    }
  });
  return (
    <TouchableOpacity style={styles.categoryCard}>
      {/* Gambar Kategori */}
      <Image source={filteredData[0].sumbergambar} style={styles.categoryImage} />
      {/* Overlay Transparan */}
      <View style={styles.overlay}>
        <Text style={styles.categoryName}>{filteredData[0].keterangan}</Text>
      </View>
      {/* Jumlah Resep */}
      <Text style={styles.categoryCount}>{filteredData[0].jumlah} Resep</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F8F5E8',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  categoryList: {
    alignItems: 'center',
  },
  categoryCard: {
    width: 100,
    margin: 10,
    alignItems: 'center',
  },
  categoryImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 10,
  },
  categoryName: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoryCount: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
})