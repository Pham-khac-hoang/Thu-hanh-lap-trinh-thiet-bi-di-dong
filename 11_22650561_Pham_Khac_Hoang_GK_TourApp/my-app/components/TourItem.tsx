import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Tour, formatDate, getSeatLabel } from '../utils/tour';

export interface TourItemProps {
  tour: Tour;
  compact?: boolean;
  onPress: (tour: Tour) => void;
  onToggleFavorite: (id: string, next: boolean) => void;
}

const TourItem = React.memo(({ tour, compact = false, onPress, onToggleFavorite }: TourItemProps) => {
  const seatLabel = getSeatLabel(tour.seats);
  const isSeatLowOrFull = tour.seats <= 3;

  return (
    <TouchableOpacity
      style={[
        styles.card,
        compact ? styles.cardCompact : styles.cardNormal,
      ]}
      activeOpacity={0.7}
      onPress={() => onPress(tour)}
    >
      {/* Nút tim ♥ / ♡ */}
      <TouchableOpacity
        testID="fav-btn"
        style={[
          compact ? styles.favBtnCompact : styles.favBtnNormal,
        ]}
        onPress={() => onToggleFavorite(tour.id, !tour.isFavorite)}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Text style={styles.favText}>{tour.isFavorite ? '♥' : '♡'}</Text>
      </TouchableOpacity>

      {/* Ảnh */}
      <Image
        source={{ uri: tour.image }}
        style={[
          styles.imageBase,
          compact ? styles.imageCompact : styles.imageNormal,
        ]}
        resizeMode="cover"
      />

      {/* Nội dung thông tin */}
      <View
        style={[
          styles.infoBase,
          compact ? styles.infoCompact : styles.infoNormal,
        ]}
      >
        <Text
          style={[styles.name, compact && styles.nameCompact]}
          numberOfLines={compact ? 1 : 2}
        >
          {tour.name}
        </Text>

        {!compact && (
          <>
            <Text style={styles.city}>{tour.city}</Text>
            <Text style={styles.subInfo}>
              📅 {formatDate(tour.departure)} · {tour.days} ngày
            </Text>
          </>
        )}

        <View style={styles.footerRow}>
          <Text style={styles.price}>
            {tour.price.toLocaleString('vi-VN')} ₫
          </Text>
          {!compact && (
            <Text
              style={[
                styles.seatLabel,
                isSeatLowOrFull && styles.seatTextRed,
              ]}
            >
              {seatLabel}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default TourItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 6,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
  },
  // a. compact = false: bố cục ngang, ảnh 90x90 bên trái, nút tim mép phải
  cardNormal: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  imageNormal: {
    width: 90,
    height: 90,
    borderRadius: 6,
  },
  infoNormal: {
    flex: 1,
    marginLeft: 12,
  },
  favBtnNormal: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: [{ translateY: -15 }],
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardCompact: {
    width: 160,
    flexDirection: 'column',
    marginHorizontal: 6,
    marginVertical: 4,
  },
  imageCompact: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
  infoCompact: {
    padding: 8,
  },
  favBtnCompact: {
    position: 'absolute',
    right: 8,
    top: 8,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageBase: {},
  infoBase: {},
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  nameCompact: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 0,
  },
  city: {
    fontSize: 13,
    color: '#666',
    marginBottom: 2,
  },
  subInfo: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  seatLabel: {
    fontSize: 12,
    color: '#27ae60',
  },
  seatTextRed: {
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  favText: {
    fontSize: 18,
    color: '#e74c3c',
  },
});