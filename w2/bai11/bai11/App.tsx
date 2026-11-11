import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

// 1. Định nghĩa kiểu cho sản phẩm và kết quả trả về từ DummyJSON
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

interface DummyProductSearchResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

// 2. Hàm bất đồng bộ có định nghĩa Type cho tham số và giá trị trả về
export const fetchProducts = async (keyword: string, limit: number): Promise<Product[]> => {
  const url = `https://dummyjson.com/products/search?q=${encodeURIComponent(keyword)}&limit=${limit}`;
  const response = await fetch(url);
  const data = (await response.json()) as DummyProductSearchResponse;
  return data.products;
};

export default function Exercise11Screen() {
  const [keyword, setKeyword] = useState<string>('phone');
  const [products, setProducts] = useState<Product[]>([]);

  const handleSearch = async (): Promise<void> => {
    try {
      const results = await fetchProducts(keyword, 10);
      setProducts(results);
    } catch (error) {
      console.error('Lỗi tìm kiếm:', error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          value={keyword}
          onChangeText={setKeyword}
          placeholder="Nhập từ khóa tìm kiếm..."
        />
        <Button title="Tìm" onPress={handleSearch} />
      </View>

      <FlatList
        data={products}
        keyExtractor={(item: Product) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>Giá: ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  searchBar: { flexDirection: 'row', marginBottom: 16, gap: 8 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 6, paddingHorizontal: 12 },
  card: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  title: { fontSize: 16, fontWeight: '600' },
  price: { fontSize: 14, color: '#2e7d32', marginTop: 4 },
});