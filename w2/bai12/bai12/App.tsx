import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

// 1. Định nghĩa cấu trúc CustomError
export interface CustomError {
  statusCode: number;
  message: string;
  endpoint: string;
}

export default function Exercise12Screen() {
  const triggerBrokenApi = async (): Promise<void> => {
    const wrongUrl = 'https://dummyjson.com/invalid-endpoint-404-test';

    try {
      const response = await fetch(wrongUrl);

      if (!response.ok) {
        // Chủ động tạo object lỗi theo cấu trúc CustomError khi HTTP status lỗi
        const errorPayload: CustomError = {
          statusCode: response.status,
          message: `Không thể truy cập tài nguyên (HTTP ${response.status})`,
          endpoint: wrongUrl,
        };
        throw errorPayload;
      }
    } catch (error: unknown) {
      // 2. Ép kiểu lỗi trong khối catch về CustomError
      const customErr = error as CustomError;

      Alert.alert(
        `Lỗi ${customErr.statusCode || 500}`,
        `${customErr.message || 'Lỗi kết nối mạng'}\nURL: ${customErr.endpoint || wrongUrl}`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Gọi API lỗi (Test Error Handling)" onPress={triggerBrokenApi} color="#d32f2f" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
});