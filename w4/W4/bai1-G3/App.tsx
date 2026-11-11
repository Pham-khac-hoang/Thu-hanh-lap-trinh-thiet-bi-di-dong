import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function BookBadgeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {}
        <View style={styles.imageContainer}>
          {/* Ảnh bìa sách */}
          <Image
            source={{ uri: 'https://picsum.photos/400/600' }}
            style={styles.bookCover}
            resizeMode="cover"
          />

          {/* Badge nhãn giảm giá nổi phía trên góc trái */}
          <View style={styles.badge}>
            <Text style={styles.badgeText}>-20%</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  // Container làm mốc tọa độ cho phần tử con absolute
  imageContainer: {
    position: 'relative',
    width: 200,
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
  },
  bookCover: {
    width: '100%',
    height: '100%',
  },
  // Nhãn nổi: ghim vào góc trên-trái
  badge: {
    position: 'absolute',
    top: 6,
    left: 6,
    backgroundColor: '#EF4444',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    zIndex: 1,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});