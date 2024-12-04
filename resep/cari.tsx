import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

// Pastikan jalur ini benar
const dataCard = require('@/assets/dataCard.json'); // Jalur ke data JSON
const imageMap = {
  "ayammm.png": require('@/assets/images/ayammm.png'), // Jalur gambar lokal
  // Tambahkan pemetaan gambar lainnya jika ada
};

type Post = {
  id_resep: number;
  gambar: string;
  nama_resep: string;
  bahan: string;
  cara_membuat: string;
};

export default function Resep() {
  const { id_resep } = useLocalSearchParams<{ id_resep: string }>();
  
  // Pastikan `id_resep` ada dan merupakan string angka
  const filteredData = dataCard.posts.filter((item: Post) => {
    const id_resepNumber = parseInt(id_resep || "0", 10); // Mengubah string ke number
    return item.id_resep === id_resepNumber;
  });

  return (
    <View style={styles.container}>
      {filteredData.length > 0 ? (
        <>
          <Image
            style={styles.image}
            source={imageMap[filteredData[0].gambar]} // Ambil gambar dari imageMap
          />
          <View style={styles.bottom}>
            <Text style={styles.judul}>{filteredData[0].nama_resep}</Text>
            <Text style={styles.keterangan}>{filteredData[0].bahan}</Text>
          </View>
        </>
      ) : (
        <Text style={{ textAlign: "center", marginTop: 50 }}>Data tidak ditemukan!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 24,
    position: "absolute",
    marginTop: 330,
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "60%",
  },
  judul: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  keterangan: {
    fontSize: 16,
    marginBottom: 24,
  },
});
