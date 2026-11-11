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

export default function BookDetailScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      {/* Header nhỏ để quay lại (tùy chọn để giao diện hoàn chỉnh hơn) */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>← Quay lại</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chi tiết sách</Text>
        <View style={{ width: 60 }} /> {/* Spacer để cân đối tiêu đề */}
      </View>

      {/* Vùng chứa nội dung chính */}
      <View style={styles.container}>
        {/* Ảnh bìa lớn phía trên (căn giữa) */}
        <View style={styles.coverContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>-20%</Text>
          </View>
          <Text style={styles.coverPlaceholderText}>Ảnh bìa lớn (aspectRatio)</Text>
        </View>

        {/* ScrollView riêng chứa thông tin và mô tả dài */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Tên sách và tác giả */}
          <View style={styles.titleSection}>
            <Text style={styles.bookTitle}>Lập trình React Native Từ Cơ Bản Đến Nâng Cao</Text>
            <Text style={styles.bookAuthor}><Text style={styles.labelAuthor}>Tác giả:</Text> Nguyễn Văn A</Text>
          </View>

          {/* Giá sách */}
          <View style={styles.priceContainer}>
            <Text style={styles.bookPrice}>150.000 đ</Text>
            <Text style={styles.oldPrice}>190.000 đ</Text>
          </View>

          {/* Mô tả dài */}
          <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>Giới thiệu sách</Text>
            <Text style={styles.descriptionText}>
              Cuốn sách này cung cấp kiến thức toàn diện về React Native, từ các khái niệm nền tảng như Flexbox, Component, cho đến việc xây dựng các ứng dụng thực tế với cấu trúc phức tạp.
            </Text>
            <Text style={styles.descriptionText}>
              - Nắm vững tư duy thiết kế giao diện đa nền tảng bằng Flexbox.{'\n'}
              - Hiểu sâu về cơ chế định vị (absolute/relative) và tối ưu hóa cuộn trang.{'\n'}
              - Phù hợp cho cả người mới bắt đầu và lập trình viên muốn củng cố nền tảng UI.
            </Text>
            <Text style={styles.descriptionText}>
              Nội dung được minh họa trực quan qua nhiều bài tập thực hành bám sát nhu cầu thực tế của thị trường việc làm hiện nay.
            </Text>
          </View>
        </ScrollView>

        {/* Thanh 'Thêm vào giỏ' cố định dưới cùng màn hình (ngoài ScrollView) */}
        <View style={styles.footerBar}>
          <View style={styles.footerPriceInfo}>
            <Text style={styles.footerLabelTotal}>Tổng cộng</Text>
            <Text style={styles.footerTotalAmount}>150.000 đ</Text>
          </View>
          <TouchableOpacity style={styles.addToCartButton} activeOpacity={0.8}>
            <Text style={styles.addToCartText}>Thêm vào giỏ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    paddingVertical: 4,
  },
  backButtonText: {
    fontSize: 14,
    color: '#4F46E5',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  // Ảnh bìa lớn
  coverContainer: {
    alignSelf: 'center', // Căn giữa theo yêu cầu kỹ thuật
    width: '60%',
    aspectRatio: 3 / 4, // Giữ tỉ lệ chuẩn cho bìa sách
    backgroundColor: '#E2E8F0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  coverPlaceholderText: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#EF4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 1,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  // ScrollView cho mô tả dài
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  titleSection: {
    marginBottom: 12,
    gap: 4,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#64748B',
  },
  labelAuthor: {
    fontWeight: '500',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#ECFDF5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A7F3D0',
    marginBottom: 16,
  },
  bookPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#059669',
  },
  oldPrice: {
    fontSize: 14,
    color: '#94A3B8',
    textDecorationLine: 'line-through',
  },
  descriptionSection: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
  },
  // Thanh cố định dưới cùng (ngoài ScrollView)
  footerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    // Đổ bóng nhẹ cho thanh footer
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  footerPriceInfo: {
    gap: 2,
  },
  footerLabelTotal: {
    fontSize: 11,
    color: '#64748B',
  },
  footerTotalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#059669',
  },
  addToCartButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});