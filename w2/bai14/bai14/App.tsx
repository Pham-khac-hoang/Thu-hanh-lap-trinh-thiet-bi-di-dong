import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

// 1. Định nghĩa Generic Interface cho API phân trang theo đúng spec
export interface ApiResponse<T> {
  data: T[];
  total: number;
  page: number;
}

export interface BookProduct {
  id: number;
  title: string;
  price: number;
}

const PAGE_LIMIT = 5;

// Hàm gọi API và trả về đúng kiểu chuẩn hóa ApiResponse<BookProduct>
export const fetchPaginatedProducts = async (page: number): Promise<ApiResponse<BookProduct>> => {
  const skip = (page - 1) * PAGE_LIMIT;
  const response = await fetch(`https://dummyjson.com/products?limit=${PAGE_LIMIT}&skip=${skip}`);
  const rawJson = await response.json();

  // Chuẩn hóa kết quả trả về theo Generic Interface ApiResponse<BookProduct>
  return {
    data: rawJson.products as BookProduct[],
    total: rawJson.total as number,
    page: page,
  };
};

export default function Exercise14Screen() {
  const [responseState, setResponseState] = useState<ApiResponse<BookProduct>>({
    data: [],
    total: 0,
    page: 1,
  });

  const loadPage = async (targetPage: number): Promise<void> => {
    try {
      const result = await fetchPaginatedProducts(targetPage);
      setResponseState(result);
    } catch (error) {
      console.error('Lỗi phân trang:', error);
    }
  };

  useEffect(() => {
    loadPage(1);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Trang {responseState.page} — Tổng số: {responseState.total} sản phẩm
      </Text>

      <FlatList
        data={responseState.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>#{item.id} - {item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
      />

      <View style={styles.pagination}>
        <Button
          title="Trang trước"
          disabled={responseState.page <= 1}
          onPress={() => loadPage(responseState.page - 1)}
        />
        <Button
          title="Trang sau"
          disabled={responseState.page * PAGE_LIMIT >= responseState.total}
          onPress={() => loadPage(responseState.page + 1)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 16, fontWeight: 'bold', marginBottom: 12 },
  item: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  title: { fontSize: 15, fontWeight: '600' },
  price: { fontSize: 14, color: '#555', marginTop: 2 },
  pagination: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
});