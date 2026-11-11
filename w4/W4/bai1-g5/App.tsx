import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default function TabBarScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      {/* Header mẫu màn hình */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trang chủ BookStore</Text>
      </View>

      {/* Vùng nội dung chính (Mô phỏng nội dung hiển thị của màn hình hiện tại) */}
      <View style={styles.mainContent}>
        <View style={styles.contentBox}>
          <Text style={styles.contentText}>Nội dung màn hình đang hiển thị</Text>
          <Text style={styles.subContentText}>
            Thanh Tab Bar được cố định ở đáy màn hình với 4 tab chia đều tỷ lệ (`flex: 1`).
          </Text>
        </View>
      </View>

      {/* Thanh Tab Bar dưới cùng (Cố định ở đáy) */}
      <View style={styles.tabBar}>
        {/* Tab 1: Trang chủ (Đang được chọn - Active) */}
        <TouchableOpacity style={styles.tabItemActive} activeOpacity={0.7}>
          <View style={styles.tabIconPlaceholderActive} />
          <Text style={styles.tabTextActive}>Trang chủ</Text>
        </TouchableOpacity>

        {/* Tab 2: Danh mục */}
        <TouchableOpacity style={styles.tabItem} activeOpacity={0.7}>
          <View style={styles.tabIconPlaceholder} />
          <Text style={styles.tabText}>Danh mục</Text>
        </TouchableOpacity>

        {/* Tab 3: Giỏ hàng */}
        <TouchableOpacity style={styles.tabItem} activeOpacity={0.7}>
          <View style={styles.tabIconPlaceholder} />
          <Text style={styles.tabText}>Giỏ hàng</Text>
        </TouchableOpacity>

        {/* Tab 4: Tài khoản */}
        <TouchableOpacity style={styles.tabItem} activeOpacity={0.7}>
          <View style={styles.tabIconPlaceholder} />
          <Text style={styles.tabText}>Tài khoản</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    position: 'relative',
  },
  header: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    // Chừa khoảng trống phía dưới để nội dung không bị Tab Bar che mất
    paddingBottom: 80,
  },
  contentBox: {
    width: '100%',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    gap: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  contentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#334155',
    textAlign: 'center',
  },
  subContentText: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 18,
  },
  // Tab Bar Container: flexDirection: 'row', mỗi mục flex: 1 chia đều
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  // Mỗi mục tab: flexDirection: 'column', alignItems/justifyContent: 'center', flex: 1
  tabItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  tabItemActive: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    backgroundColor: '#EEF2FF', // Nền nhẹ cho tab đang chọn
  },
  tabIconPlaceholder: {
    width: 24,
    height: 14,
    backgroundColor: '#94A3B8',
    borderRadius: 2,
  },
  tabIconPlaceholderActive: {
    width: 24,
    height: 14,
    backgroundColor: '#4F46E5',
    borderRadius: 2,
  },
  tabText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },
  tabTextActive: {
    fontSize: 11,
    color: '#4F46E5',
    fontWeight: 'bold',
  },
});