import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

export interface ProductItem {
  id: number;
  title: string;
  price: number;
}

export default function Exercise15Screen() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  // Đồng bộ 2 trạng thái boolean riêng biệt
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const loadProducts = async (isRefresh: boolean = false): Promise<void> => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const response = await fetch('https://dummyjson.com/products?limit=10');
      const json = await response.json();
      setProducts(json.products as ProductItem[]);
    } catch (error) {
      console.error('Lỗi tải sản phẩm:', error);
    } finally {
      // Đảm bảo tắt đúng trạng thái sau khi hoàn tất bất đồng bộ
      if (isRefresh) {
        setRefreshing(false);
      } else {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadProducts(false);
  }, []);

  const handleRefresh = useCallback((): void => {
    loadProducts(true);
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Đang tải dữ liệu lần đầu...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item: ProductItem) => item.id.toString()}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 8, color: '#666' },
  row: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#eee' },
  title: { fontSize: 16, fontWeight: '500' },
  price: { fontSize: 14, color: '#00796b', marginTop: 4 },
});