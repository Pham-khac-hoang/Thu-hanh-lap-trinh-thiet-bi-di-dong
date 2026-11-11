import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default function Hour1CombinedScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1E293B" />

      {/* ========================================== */}
      {/* PHẦN 1: BÀI TẬP 1 — HEADER ỨNG DỤNG BOOKSTORE */}
      {/* ========================================== */}
      <View style={styles.header}>
        {/* Logo / Tên app bên trái */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>BookStore</Text>
        </View>

        {/* Nhóm icon bên phải (Tìm, Giỏ hàng) */}
        <View style={styles.rightIconsContainer}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Text style={styles.iconButtonText}>Tìm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Text style={styles.iconButtonText}>Giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ========================================== */}
      {/* PHẦN 2: BÀI TẬP 2 — THẺ SÁCH (BOOK CARD)     */}
      {/* ========================================== */}
      <ScrollView 
        style={styles.contentContainer} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>n</Text>

        {/* Card ngoài cùng: flexDirection: 'row' */}
        <View style={styles.bookCard}>
          {/* Ảnh bìa bên trái (kích thước cố định 80x110) */}
          <View style={styles.bookCover}>
            <Text style={styles.coverText}>Ảnh bìa</Text>
          </View>

          {/* Cột thông tin bên phải: flex: 1 để chiếm không gian còn lại */}
          <View style={styles.bookInfoColumn}>
            {/* Tên sách sử dụng numberOfLines={2} để xử lý khi tên dài */}
            <Text style={styles.bookTitle} numberOfLines={2}>
              Lập trình React Native Từ Cơ Bản Đến Nâng Cao
            </Text>

            <Text style={styles.bookAuthor}>
              Tác giả: Nguyễn Văn A
            </Text>

            {/* Giá tiền được đẩy xuống dưới cùng bằng justifyContent: 'space-between' của cột */}
            <View style={styles.priceBox}>
              <Text style={styles.bookPrice}>150.000 đ</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

 
  header: {
    height: 56, // Chiều cao cố định 56
    paddingHorizontal: 16, // Padding ngang 16
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Căn giữa theo chiều dọc
    backgroundColor: '#1E293B', // Màu nền navy/indigo
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  logoContainer: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
  },
  logoText: {
    fontWeight: 'bold',
    color: '#1E293B',
    fontSize: 15,
  },
  rightIconsContainer: {
    flexDirection: 'row',
    gap: 8, // Khoảng cách giữa các icon
  },
  iconButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#94A3B8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  contentContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 4,
  },
  bookCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  bookCover: {
    width: 80,
    height: 110,
    backgroundColor: '#E2E8F0',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  coverText: {
    fontSize: 11,
    color: '#64748B',
  },
  bookInfoColumn: {
    flex: 1, // Chiếm phần không gian còn lại
    flexDirection: 'column',
    marginLeft: 12,
    height: 110, // Đồng bộ chiều cao để canh chỉnh trục dọc
    justifyContent: 'space-between', // Đẩy giá tiền xuống đáy
  },
  bookTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  bookAuthor: {
    fontSize: 13,
    color: '#64748B',
  },
  priceBox: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECFDF5',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  bookPrice: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#059669',
  },
});