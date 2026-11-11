import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

// Định nghĩa kiểu dữ liệu cho một cuốn sách (TypeScript Interface)
interface Book {
  id: string;
  title: string;
  author: string;
  price: string;
  imageUrl: string;
}

// Dữ liệu mẫu cho các thẻ sách
const BOOKS_DATA: Book[] = [
  {
    id: '1',
    title: 'Lập trình React Native căn bản đến nâng cao',
    author: 'Nguyễn Văn A',
    price: '150.000 đ',
    imageUrl: 'https://via.placeholder.com/80x110',
  },
  {
    id: '2',
    title: 'TypeScript từ cơ bản đến chuyên sâu',
    author: 'Trần Văn B',
    price: '120.000 đ',
    imageUrl: 'https://via.placeholder.com/80x110',
  },
  {
    id: '3',
    title: 'Thiết kế hệ thống hướng vi dịch vụ',
    author: 'Lê Thị C',
    price: '200.000 đ',
    imageUrl: 'https://via.placeholder.com/80x110',
  },
  {
    id: '4',
    title: 'Clean Code - Mã sạch và cách viết',
    author: 'Robert C. Martin',
    price: '180.000 đ',
    imageUrl: 'https://via.placeholder.com/80x110',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1e1b4b" />
      
      {/* --- BÀI TẬP 1: HEADER ỨNG DỤNG --- */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>BookStore Online</Text>
        <View style={styles.headerIconsContainer}>
          {/* Icon Tìm kiếm giả lập */}
          <View style={styles.iconPlaceholder}>
            <Text style={styles.iconText}>🔍</Text>
          </View>
          {/* Icon Giỏ hàng giả lập */}
          <View style={styles.iconPlaceholder}>
            <Text style={styles.iconText}>🛒</Text>
          </View>
        </View>
      </View>

      {/* --- THỬ THÁCH GIỜ 1: VÙNG NỘI DUNG DÙNG FLEX: 1 VÀ SCROLLVIEW --- */}
      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.sectionTitle}>Sách nổi bật</Text>
          
          {/* --- BÀI TẬP 2: BOOK CARD ĐƠN & DANH SÁCH XẾP CHỒNG --- */}
          {BOOKS_DATA.map((book) => (
            <View key={book.id} style={styles.bookCard}>
              {/* Ảnh bìa bên trái */}
              <Image source={{ uri: book.imageUrl }} style={styles.bookImage} />

              {/* Cột thông tin bên phải */}
              <View style={styles.bookInfoContainer}>
                <Text style={styles.bookTitle} numberOfLines={2}>
                  {book.title}
                </Text>
                <Text style={styles.bookAuthor} numberOfLines={1}>
                  {book.author}
                </Text>
                <Text style={styles.bookPrice}>{book.price}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1e1b4b', // Màu nền Navy/Indigo chủ đạo
  },
  // --- Style cho Header (Bài tập 1) ---
  headerContainer: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e1b4b',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIconsContainer: {
    flexDirection: 'row',
    gap: 12, // Khoảng cách giữa các icon
  },
  iconPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#312e81',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 16,
  },
  // --- Style cho Vùng nội dung (Thử thách Giờ 1) ---
  contentContainer: {
    flex: 1,
    backgroundColor: '#f8fafc', // Màu nền sáng cho phần nội dung sách
  },
  scrollContent: {
    padding: 16,
    gap: 12, // Tạo khoảng cách đều giữa các thẻ sách
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  // --- Style cho Book Card (Bài tập 2) ---
  bookCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    // Đổ bóng nhẹ cho card (iOS & Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  bookImage: {
    width: 80,
    height: 110,
    borderRadius: 8,
    backgroundColor: '#e2e8f0',
  },
  bookInfoContainer: {
    flex: 1,
    marginLeft: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 110, // Giúp căn chỉnh giá tiền xuống dưới cùng của cột thông tin
  },
  bookTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e293b',
  },
  bookAuthor: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
  },
  bookPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0284c7',
    marginTop: 'auto', // Đẩy giá xuống đáy linh hoạt
  },
});