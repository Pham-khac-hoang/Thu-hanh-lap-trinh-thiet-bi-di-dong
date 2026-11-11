import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const CATEGORIES = [
  'Văn học',
  'Kinh tế',
  'Thiếu nhi',
  'Truyện tranh',
  'Ngoại ngữ',
  'Lịch sử',
  'Tâm lý - Kỹ năng',
  'Công nghệ thông tin',
  'Khoa học',
];

export default function CategoryChipsScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.heading}>Danh mục sách</Text>

          {/* Container chứa các chip danh mục */}
          <View style={styles.chipsContainer}>
            {CATEGORIES.map((category, index) => (
              <View key={index} style={styles.chip}>
                <Text style={styles.chipText}>{category}</Text>
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 16,
  },
  // Container: xếp theo hàng ngang, tự xuống dòng khi tràn và tạo khoảng cách 8px đều nhau
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    alignContent: 'flex-start', // Gom các dòng lại gần nhau theo trục chéo
  },
  // Mỗi chip: bo góc dạng viên thuốc (pill), border màu indigo, co giãn theo chữ
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20, // Bo tròn dạng pill
    borderWidth: 1.5,
    borderColor: '#4F46E5', // Màu Indigo
    backgroundColor: '#FFFFFF',
    // Không đặt width cố định để width tự động ăn theo nội dung text
  },
  chipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4F46E5',
  },
});