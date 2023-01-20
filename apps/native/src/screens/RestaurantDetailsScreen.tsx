import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import restaurants from '../../assets/data/restaurants.json';
import DishListItem from '../components/DishListItem';
import RestaurantDetailsScreanHeader from '../components/RestaurantDetailsScreanHeader';

const RestaurantDetailsScreen = () => {
  const restaurant = restaurants[0];

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={RestaurantDetailsScreanHeader}
        data={restaurant.dishes}
        //work on this one sort it by id!
        keyExtractor={item => item.name}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
      <Ionicons
        style={styles.iconContainer}
        name="arrow-back-circle"
        size={45}
        color="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
});

export default RestaurantDetailsScreen;
