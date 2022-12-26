import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

interface RestaurantItemProps {
  restaurant: {
    id: string;
    name: string;
    deliveryFee: number;
    minDeliveryTime: number;
    maxDeliveryTime: number;
    rating: number;
    price: number;
    image: string;
    dishes: Object[];
  };
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <Text style={styles.restaurantTitle}>{restaurant.name}</Text>
      <Text style={styles.restaurantSubtitle}>
        ${restaurant.price} {restaurant.minDeliveryTime}-
        {restaurant.minDeliveryTime} minutes
      </Text>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  restaurantContainer: {
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  restaurantTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5,
  },
  restaurantSubtitle: {
    color: 'gray',
  },
});
