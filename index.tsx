import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true); // State untuk mengontrol tampilan splash screen

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Setelah 2 detik, set isLoading ke false
      router.replace('/resep/menu'); // Ganti dengan rute yang sesuai
    }, 3000);

    return () => clearTimeout(timer); // Bersihkan timer saat komponen unmount
  }, [router]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        {/* Logo Aplikasi */}
        <Image source={require('@/assets/images/resep.png.jpeg')} style={styles.logo} />
      </View>
    );
  }

  // Jika tidak dalam mode loading, Anda dapat menampilkan konten lain di sini
  return null; // Atau komponen lain yang ingin Anda tampilkan setelah splash
}

let dataCard = {
  "error" : false,
  "message" : "Berhasil ambil data",
  "posts": [
    {
      "id": 1,
      "gambar": '@/assets/images/ayammm.png',
      "keterangan": "Ayam",
      "jumlah": "5"
    },
    {
      "id": 2,
      "gambar": '@/assets/images/ayammm.png',
      "keterangan": "bubur",
      "jumlah": "5"
    }
  ]
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F5E8', // Ganti dengan warna latar belakang yang sesuai
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
});