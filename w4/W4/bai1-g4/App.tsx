import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1E293B" />
      
      {/* 1. Header (Cố định ở trên cùng, không nằm trong ScrollView) */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>BookStore</Text>
        </View>
        <View style={styles.headerIconsContainer}>
          <TouchableOpacity style={styles.headerIconButton}>
            <Text style={styles.headerIconText}>Tìm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconButton}>
            <Text style={styles.headerIconText}>Giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 2. Vùng nội dung cuộn (ScrollView) chứa Category Chips và Book Grid */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Category Chips */}
        <View style={styles.chipsContainer}>
          {['Văn học', 'Kinh tế', 'Thiếu nhi', 'Truyện tranh', 'Ngoại ngữ', 'Lịch sử'].map(
            (category, index) => (
              <View key={index} style={styles.chip}>
                <Text style={styles.chipText}>{category}</Text>
              </View>
            )
          )}
        </View>

        {/* Book Grid (Lưới 2 cột sản phẩm) */}
        <View style={styles.gridContainer}>
          {[1, 2, 3, 4].map((item, index) => (
            <View key={index} style={styles.bookCard}>
              {/* Ảnh bìa với Badge giảm giá (absolute) */}
              <View style={styles.bookImageContainer}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>-20%</Text>
                </View>
                <Text style={styles.placeholderText}>Ảnh aspect Ratio</Text>
              </View>
              {/* Tên và Giá */}
              <View style={styles.bookInfo}>
                <Text style={styles.bookTitle} numberOfLines={2}>Tên sách BookStore</Text>
                <Text style={styles.bookPrice}>120.000 đ</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* 3. Nút giỏ hàng nổi (Floating Cart Button) - Nằm ngoài ScrollView để cố định trên màn hình */}
      <TouchableOpacity style={styles.floatingButton} activeOpacity={0.8}>
        <Text style={styles.floatingButtonText}>Giỏ</Text>
        <View style={styles.cartBadge}>
          <Text style={styles.cartBadgeText}>4</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    position: 'relative',
  },
  // Header styles
  header: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#1E293B',
  },
  logoContainer: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
  },
  logoText: {
    fontWeight: 'bold',
    color: '#1E293B',
  },
  headerIconsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  headerIconButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#94A3B8',
  },
  headerIconText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  // ScrollView styles
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100, 
  },
  // Category Chips styles
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#6366F1',
    backgroundColor: '#FFFFFF',
  },
  chipText: {
    color: '#4F46E5',
    fontSize: 13,
  },
  // Book Grid styles
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bookCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  bookImageContainer: {
    position: 'relative',
    width: '100%',
    aspectRatio: 3 / 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  placeholderText: {
    fontSize: 11,
    color: '#64748B',
  },
  badge: {
    position: 'absolute',
    top: 6,
    left: 6,
    backgroundColor: '#EF4444',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    zIndex: 1,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  bookInfo: {
    gap: 4,
  },
  bookTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#1E293B',
  },
  bookPrice: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#10B981',
  },
  // Floating Cart Button styles
  floatingButton: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30, // width / 2 để tạo hình tròn
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  floatingButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  cartBadge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#EF4444',
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
});