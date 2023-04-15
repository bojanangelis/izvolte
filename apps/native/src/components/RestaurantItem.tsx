import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
interface Restaurant {
  restaurant: {
    __typename: 'Restaurant';
    id: string;
    name: string;
    image: string;
    deliveryFee: number;
    minDeliveryTime: number;
    maxDeliveryTime: number;
    rating?: number | null | undefined;
    address: string;
    lat: number;
    lng: number;
    createdAt: string;
    updatedAt: string;
  } | null;
}

const RestaurantItem = ({ restaurant }: Restaurant) => {
  const navigation = useNavigation();
  const handleRestaurantPress = () => {
    navigation.navigate('Restaurant' as never, { id: restaurant?.id } as never);
  };

  return (
    <TouchableOpacity
      onPress={handleRestaurantPress}
      style={styles.restaurantContainer}
    >
      <Image
        source={{
          uri: restaurant?.image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.restaurantTitle}>{restaurant?.name}</Text>
          <Text style={styles.restaurantSubtitle}>
            $ {restaurant?.deliveryFee.toFixed(2)} &#8226;{' '}
            {restaurant?.minDeliveryTime}-{restaurant?.minDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          {restaurant?.rating && <Text>{restaurant?.rating.toFixed(1)}</Text>}
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
