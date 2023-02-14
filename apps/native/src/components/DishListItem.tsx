import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import RestaurantDetailsStyles from '../styles/RestaurantDetailsStyles';
import { useNavigation } from '@react-navigation/native';

export interface DishItemInterface {
  dish: {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: string;
  };
  loading: boolean;
}

const DishListItem = ({ dish, loading }: DishItemInterface) => {
  const navigation = useNavigation();
  if (loading || !dish) {
    return (
      <View style={{ padding: 140, marginTop: 55 }}>
        <Text>Loading....</Text>
        <Text>Working on custom spinner..</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={() =>
        //@ts-ignore
        navigation.navigate('Dish', { id: dish.id } as { id: string })
      }
      style={RestaurantDetailsStyles.container}
    >
      <View style={RestaurantDetailsStyles.viewContainer}>
        <Text style={RestaurantDetailsStyles.name}>{dish?.name}</Text>
        <Text style={RestaurantDetailsStyles.description} numberOfLines={2}>
          {dish?.description}
        </Text>
        <Text style={RestaurantDetailsStyles.price}>
          ${dish?.price.toFixed(2)}
        </Text>
      </View>
      {dish?.image && (
        <Image
          source={{ uri: dish?.image }}
          style={RestaurantDetailsStyles.dishImage}
        />
      )}
    </TouchableOpacity>
  );
};

export default DishListItem;
