import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { RestaurantItemProps } from './RestaurantItem';

const RestaurantDetailsScreanHeader = ({ restaurant }: RestaurantItemProps) => {
  return (
    <View>
      {restaurant.image && (
        <Image
          style={styles.image}
          source={{ uri: restaurant.image }}
          resizeMode="cover"
        />
      )}

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee.toFixed(2)} &#8226;{' '}
          {restaurant.minDeliveryTime} - {restaurant.minDeliveryTime} minutes
        </Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
  subtitle: {
    color: 'gray',
    fontSize: 15,
    marginTop: 10,
  },
  container: {
    margin: 10,
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
});

export default RestaurantDetailsScreanHeader;
