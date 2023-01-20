import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import restaurants from '../../assets/data/restaurants.json';

const RestaurantDetailsScreanHeader = () => {
  const restaurant = restaurants[0];

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
          $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.minDeliveryTime} minutes
        </Text>
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
});
export default RestaurantDetailsScreanHeader;
