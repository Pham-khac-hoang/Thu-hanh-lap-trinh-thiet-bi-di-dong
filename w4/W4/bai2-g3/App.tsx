import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function FloatingCartScreen() {
  return (
    <View style={styles.container}>
      {/* Nội dung cuộn bên dưới */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
      </ScrollView>

      {/* Nút giỏ hàng nổi */}
      <TouchableOpacity style={styles.floatingButton} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Giỏ hàng</Text>
        
        {/* Số lượng sản phẩm nhỏ ở góc (Badge) */}
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>4</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container ngoài cùng cần flex: 1 và position: 'relative' để nút định vị theo toàn màn hình
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100, // Tạo khoảng trống để không bị nút nổi che mất nội dung cuối
  },
  card: {
    height: 80,
    backgroundColor: '#EAE2E2',
    borderRadius: 8,
    marginBottom: 16,
    borderColor: '#7B68EE',
    borderWidth: 1,
  },
  // Nút chính: hình tròn, position: 'absolute', bottom: 24, right: 20
  floatingButton: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 35, // width / 2 để tạo hình tròn
    backgroundColor: '#5271FF',
    justifyContent: 'center',
    alignItems: 'center',
    // Đổ bóng nhẹ cho nút nổi (tùy chọn cho đẹp)
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  // Số lượng sản phẩm: position: 'absolute' đặt ở góc trên-phải của nút tròn
  badgeContainer: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#FF4D4D',
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});