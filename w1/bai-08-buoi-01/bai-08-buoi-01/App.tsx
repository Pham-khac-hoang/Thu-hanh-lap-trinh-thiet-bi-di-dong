import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface AppButtonProps {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

// 2. Bảng cấu hình Style (Lookup Tables)
const variantContainerStyles: Record<ButtonVariant, ViewStyle> = {
  primary: { backgroundColor: '#2563EB', borderColor: '#2563EB', borderWidth: 1 },
  secondary: { backgroundColor: '#64748B', borderColor: '#64748B', borderWidth: 1 },
  outline: { backgroundColor: 'transparent', borderColor: '#2563EB', borderWidth: 1.5 },
  danger: { backgroundColor: '#DC2626', borderColor: '#DC2626', borderWidth: 1 },
};

const variantTextStyles: Record<ButtonVariant, TextStyle> = {
  primary: { color: '#FFFFFF' },
  secondary: { color: '#FFFFFF' },
  outline: { color: '#2563EB' },
  danger: { color: '#FFFFFF' },
};

const sizeContainerStyles: Record<ButtonSize, ViewStyle> = {
  small: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 6 },
  medium: { paddingVertical: 10, paddingHorizontal: 18, borderRadius: 8 },
  large: { paddingVertical: 14, paddingHorizontal: 24, borderRadius: 10 },
};

const sizeTextStyles: Record<ButtonSize, TextStyle> = {
  small: { fontSize: 13, lineHeight: 18 },
  medium: { fontSize: 15, lineHeight: 22 },
  large: { fontSize: 17, lineHeight: 26 },
};


export const AppButton: React.FC<AppButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  onPress,
  disabled = false,
  loading = false,
  icon,
}) => {
  const isInteractiveDisabled = disabled || loading;
  const textColor = variantTextStyles[variant].color;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={isInteractiveDisabled}
      style={[
        styles.baseButton,
        sizeContainerStyles[size],
        variantContainerStyles[variant],
        disabled && styles.disabledButton,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        <View style={styles.contentRow}>
          {icon && <View style={styles.iconWrapper}>{icon}</View>}
          <Text
            style={[
              styles.baseText,
              sizeTextStyles[size],
              variantTextStyles[variant],
              disabled && styles.disabledText,
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screenContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.headerTitle}> BookStore Actions</Text>

          <View style={styles.buttonGroup}>
            <Text style={styles.groupTitle}>Nút chức năng chính:</Text>
            
            {/* Primary - Thêm vào giỏ hàng */}
            <AppButton
              title="Thêm vào giỏ hàng"
              variant="primary"
              size="medium"
              onPress={() => Alert.alert('Thông báo', 'Đã thêm sách vào giỏ hàng!')}
            />

            {/* Outline - Xem chi tiết */}
            <AppButton
              title="Xem chi tiết"
              variant="outline"
              size="medium"
              onPress={() => Alert.alert('Thông báo', 'Chuyển đến trang chi tiết')}
            />

            {/* Danger - Xóa sách */}
            <AppButton
              title="Xóa sách"
              variant="danger"
              size="medium"
              onPress={() => Alert.alert('Cảnh báo', 'Bạn có chắc chắn muốn xóa sách này?')}
            />
          </View>

          <View style={styles.buttonGroup}>
            <Text style={styles.groupTitle}>Các trạng thái khác:</Text>
            
            {/* Trạng thái Loading */}
            <AppButton
              title="Đang lưu dữ liệu..."
              variant="primary"
              loading={true}
            />

            {/* Trạng thái Disabled */}
            <AppButton
              title="Hết hàng (Disabled)"
              variant="secondary"
              disabled={true}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// 5. Base Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    padding: 20,
    gap: 24,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },
  groupTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 10,
  },
  buttonGroup: {
    gap: 12,
  },
  baseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    marginRight: 8,
  },
  baseText: {
    fontWeight: '600',
    textAlign: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.8,
  },
});