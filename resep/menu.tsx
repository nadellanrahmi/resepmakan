import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function star() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Resep Masakan</Text>

     

      {/* Kontainer Konten */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Kartu Resep */}
        <View style={styles.card}>
          <Image source={require('@/assets/images/ayammm.png')} style={styles.image} />
          <Text style={styles.recipeTitle}>Ayam Penyet</Text>
          <View style={styles.recipeInfo}>
            <FontAwesome5 name="clock" size={14} color="#555" />
            <Text style={styles.recipeTime}>30 Menit</Text>
          </View>
        </View>

        {/* Kartu Favorit */}
        <View style={[styles.card, styles.favoriteCard]}>
          <Text style={styles.cardTitle}>Favorit</Text>
          <Text style={styles.cardSubtitle}>Kumpulan Resep yang Anda Sukai</Text>
          <Text style={styles.cardCount}>0 resep</Text>
        </View>

        {/* Kartu Tentang */}
        <View style={[styles.card, styles.aboutCard]}>
          <Text style={styles.cardTitle}>Tentang</Text>
          <Text style={styles.cardSubtitle}>Beri masukkan</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Lanjutkan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Navigasi Bawah */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/resep/menu')}>
          <FontAwesome5 name="home" size={24} color="#FFA500" />
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/resep/cari')}> 
          <FontAwesome5 name="search" size={24} color="#000" />
          <Text style={styles.navText}>Cari Resep</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/resep/katagori')}>
          <FontAwesome5 name="th-list" size={24} color="#000" />
          <Text style={styles.navText}>Kategori</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5E8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  favoriteCard: {
    backgroundColor: '#DFFFD8',
  },
  aboutCard: {
    backgroundColor: '#E5D7FF',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  recipeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recipeTime: {
    fontSize: 14,
    color: '#555',
    marginLeft: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    marginBottom: 10,
    color: '#555',
  },
  cardCount: {
    fontSize: 12,
    color: '#777',
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
  },
});
