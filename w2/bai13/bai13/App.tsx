import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// 1. Hàm lọc tổng quát áp dụng Generic <T> có ràng buộc thuộc tính 'name'
export function filterByName<T extends { name: string }>(items: T[], keyword: string): T[] {
  const normalizedKeyword = keyword.trim().toLowerCase();
  if (!normalizedKeyword) return items;

  return items.filter((item) =>
    item.name.toLowerCase().includes(normalizedKeyword)
  );
}

// 2. Thử nghiệm tái sử dụng hàm với 2 kiểu dữ liệu khác nhau (Book và Author)
interface BookItem {
  id: number;
  name: string;
  price: number;
}

interface CategoryItem {
  code: string;
  name: string;
  bookCount: number;
}

const SAMPLE_BOOKS: BookItem[] = [
  { id: 1, name: 'Lập trình TypeScript cơ bản', price: 120000 },
  { id: 2, name: 'Làm chủ React Native', price: 150000 },
  { id: 3, name: 'Cấu trúc dữ liệu & Giải thuật', price: 135000 },
];

const SAMPLE_CATEGORIES: CategoryItem[] = [
  { code: 'IT', name: 'Công nghệ thông tin', bookCount: 42 },
  { code: 'LIT', name: 'Văn học kinh điển', bookCount: 18 },
];

export default function Exercise13Screen() {
  const [keyword, setKeyword] = useState<string>('');

  // Tái sử dụng cùng 1 hàm Generic cho 2 kiểu mảng khác nhau
  const filteredBooks = filterByName<BookItem>(SAMPLE_BOOKS, keyword);
  const filteredCategories = filterByName<CategoryItem>(SAMPLE_CATEGORIES, keyword);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Lọc theo tên sách hoặc danh mục..."
        value={keyword}
        onChangeText={setKeyword}
      />

      <Text style={styles.sectionTitle}>Sách ({filteredBooks.length})</Text>
      {filteredBooks.map((book) => (
        <Text key={book.id} style={styles.itemText}>
          • {book.name} — {book.price.toLocaleString()}đ
        </Text>
      ))}

      <Text style={styles.sectionTitle}>Danh mục ({filteredCategories.length})</Text>
      {filteredCategories.map((cat) => (
        <Text key={cat.code} style={styles.itemText}>
          • [{cat.code}] {cat.name} ({cat.bookCount} cuốn)
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginBottom: 16 },
  sectionTitle: { fontSize: 17, fontWeight: 'bold', marginTop: 12, marginBottom: 6 },
  itemText: { fontSize: 15, marginVertical: 3, color: '#333' },
});
