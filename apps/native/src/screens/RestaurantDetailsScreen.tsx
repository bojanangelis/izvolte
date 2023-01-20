import { View, FlatList } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import restaurants from '../../assets/data/restaurants.json';
import DishListItem from '../components/DishListItem';
import RestaurantDetailsScreanHeader from '../components/RestaurantDetailsScreanHeader';
import RestaurantDetailsStyles from '../styles/RestaurantDetailsStyles';

const RestaurantDetailsScreen = () => {
  const restaurant = restaurants[0];
  return (
    <View style={RestaurantDetailsStyles.page}>
      <FlatList
        ListHeaderComponent={() => (
          <RestaurantDetailsScreanHeader restaurant={restaurant} />
        )}
        data={restaurant.dishes}
        //work on this one sort it by id!
        keyExtractor={item => item.name}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
      <Ionicons
        style={RestaurantDetailsStyles.iconContainer}
        name="arrow-back-circle"
        size={45}
        color="white"
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
