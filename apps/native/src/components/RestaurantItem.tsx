import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

export interface RestaurantItemProps {
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
  const navigation = useNavigation();
  const handleRestaurantPress = () => {
    //@ts-ignore
    navigation.navigate('Restaurant', { id: restaurant.id });
  };

  return (
    <TouchableOpacity
      onPress={handleRestaurantPress}
      style={styles.restaurantContainer}
    >
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.restaurantTitle}>{restaurant.name}</Text>
          <Text style={styles.restaurantSubtitle}>
            $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
            {restaurant.minDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 'auto',
    backgroundColor: 'lightgray',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
