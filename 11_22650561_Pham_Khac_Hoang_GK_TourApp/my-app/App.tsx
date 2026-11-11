import React, { useState, useEffect, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SectionList,
  FlatList,
  ActivityIndicator,
  Alert,
  RefreshControl,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TourItem from './components/TourItem';
import { Tour, groupByCity } from './utils/tour';
import { fetchToursAPI, updateFavoriteAPI } from './components/api';

export default function App() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const fetchTours = async () => {
    try {
      const data = await fetchToursAPI();
      setTours(data);
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể tải dữ liệu từ API.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchTours();
  };

  const handleTourPress = (tour: Tour) => {
    Alert.alert(
      'Chi tiết Tour',
      `Tên: ${tour.name}\nNgày khởi hành: ${tour.departure}\nSố ngày: ${tour.days}\nGiá: ${tour.price.toLocaleString('vi-VN')} ₫`
    );
  };

  // Cập nhật yêu thích với Optimistic Update và Rollback khi lỗi
  const handleToggleFavorite = async (id: string, next: boolean) => {
    const previousTours = [...tours];

    setTours((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isFavorite: next } : t))
    );

    try {
      await updateFavoriteAPI(id, next);
    } catch (error) {
      setTours(previousTours);
      Alert.alert('Lỗi', 'Không thể cập nhật trạng thái yêu thích.');
    }
  };

  // Lọc tour theo tên từ ô tìm kiếm (dùng useMemo, không phân biệt hoa thường, trim)
  const filteredTours = useMemo(() => {
    const keyword = searchKeyword.trim().toLowerCase();
    if (!keyword) return tours;
    return tours.filter((t) => t.name.toLowerCase().includes(keyword));
  }, [tours, searchKeyword]);

  // Gom nhóm theo thành phố
  const sections = useMemo(() => groupByCity(filteredTours), [filteredTours]);

  // Danh sách tour yêu thích (không bị ảnh hưởng bởi ô tìm kiếm)
  const favoriteTours = useMemo(() => tours.filter((t) => t.isFavorite), [tours]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        {/* Header (Câu 1c) */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Tour Việt</Text>
          <Text style={styles.studentInfo}>22647891 – Phạm Khắc Hoàng</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm tour theo tên..."
            placeholderTextColor="#888"
            value={searchKeyword}
            onChangeText={setSearchKeyword}
          />
        </View>

        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#e74c3c" />
          </View>
        ) : (
          <SectionList
            sections={sections}
            keyExtractor={(item) => item.id}
            stickySectionHeadersEnabled={true}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            // c. ListHeaderComponent là mục "Tour yêu thích (n)" với FlatList ngang
            ListHeaderComponent={
              <View style={styles.favSectionContainer}>
                <Text style={styles.favHeaderTitle}>
                  Tour yêu thích ({favoriteTours.length})
                </Text>
                {favoriteTours.length === 0 ? (
                  <Text style={styles.emptyFavText}>Chưa có tour yêu thích</Text>
                ) : (
                  <FlatList
                    horizontal
                    data={favoriteTours}
                    keyExtractor={(item) => `fav-${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.favListContent}
                    ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                    renderItem={({ item }) => (
                      <TourItem
                        tour={item}
                        compact={true}
                        onPress={handleTourPress}
                        onToggleFavorite={handleToggleFavorite}
                      />
                    )}
                  />
                )}
              </View>
            }
            renderItem={({ item }) => (
              <TourItem
                tour={item}
                compact={false}
                onPress={handleTourPress}
                onToggleFavorite={handleToggleFavorite}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{title}</Text>
              </View>
            )}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>Không tìm thấy tour phù hợp</Text>
              </View>
            }
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  studentInfo: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 2,
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fdfdfd',
    fontSize: 14,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    backgroundColor: '#eaeded',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#d5dbdb',
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#34495e',
  },
  favSectionContainer: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  favHeaderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  favListContent: {
    paddingHorizontal: 16,
  },
  emptyFavText: {
    fontSize: 13,
    color: '#95a5a6',
    marginHorizontal: 16,
    fontStyle: 'italic',
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 15,
    color: '#7f8c8d',
  },
});