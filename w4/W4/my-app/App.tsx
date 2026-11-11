import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const BOOK_DATA = [
  {
    id: '1',
    title: 'Đắc Nhân Tâm',
    price: '86.000 đ',
    image: 'https://picsum.photos/300/400?random=1',
  },
  {
    id: '2',
    title: 'Nhà Giả Kim',
    price: '79.000 đ',
    image: 'https://picsum.photos/300/400?random=2',
  },
  {
    id: '3',
    title: 'Tuổi Trẻ Đáng Giá Bao Nhiêu?',
    price: '90.000 đ',
    image: 'https://picsum.photos/300/400?random=3',
  },
  {
    id: '4',
    title: 'Tư Duy Nhanh Và Chậm',
    price: '150.000 đ',
    image: 'https://picsum.photos/300/400?random=4',
  },
];

export default function BookGridScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Container lưới 2 cột */}
          <View style={styles.gridContainer}>
            {BOOK_DATA.map((item) => (
              <View key={item.id} style={styles.bookCard}>
                {/* Ảnh bìa giữ tỉ lệ 3/4 */}
                <Image
                  source={{ uri: item.image }}
                  style={styles.bookCover}
                  resizeMode="cover"
                />

                {/* Thông tin tên và giá */}
                <View style={styles.infoContainer}>
                  <Text numberOfLines={2} style={styles.bookTitle}>
                    {item.title}
                  </Text>
                  <Text style={styles.bookPrice}>{item.price}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  scrollContainer: {
    padding: 16,
  },
  // Container ngoài: flexWrap bọc các cột, space-between đẩy 2 cột sang 2 mép
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  // Mỗi card chiếm 48% độ rộng, chừa lại 4% chia đều khoảng cách ở giữa
  bookCard: {
    width: '48%',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  // Ảnh bìa co giãn 100% theo card cha và tự tính chiều cao nhờ aspectRatio
  bookCover: {
    width: '100%',
    aspectRatio: 3 / 4,
    backgroundColor: '#E2E8F0', // Màu nền chờ khi tải ảnh
  },
  infoContainer: {
    padding: 10,
    justifyContent: 'space-between',
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 6,
    minHeight: 36, 
  },
  bookPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E11D48',
  },
});