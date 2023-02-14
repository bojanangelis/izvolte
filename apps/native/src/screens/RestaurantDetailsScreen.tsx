import { View, FlatList } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '../components/DishListItem';
import RestaurantDetailsScreanHeader from '../components/RestaurantDetailsScreanHeader';
import RestaurantDetailsStyles from '../styles/RestaurantDetailsStyles';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Dish, Restaurant, LazyRestaurant } from '../models';
import { DataStore } from 'aws-amplify';

type ParamList = {
  Restaurant: {
    id: string;
  };
};

const RestaurantDetailsScreen: FC = () => {
  const [restaurant, setRestaurant] = useState<LazyRestaurant | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const route = useRoute<RouteProp<ParamList, 'Restaurant'>>();
  const navigation = useNavigation();
  const { id } = route.params;

  useEffect(() => {
    if (!id) return;
    DataStore.query(Restaurant, id).then(results =>
      setRestaurant(results || null),
    );
    const getDishes = async () => {
      const allDishesOfrestaurant = await DataStore.query(Dish, dish =>
        dish.restaurantID.eq(id),
      );
      setDishes(allDishesOfrestaurant);
      setIsLoading(false);
    };
    getDishes();
  }, [id]);

  return (
    <View style={RestaurantDetailsStyles.page}>
      <FlatList
        ListHeaderComponent={() => (
          <RestaurantDetailsScreanHeader restaurant={restaurant} />
        )}
        data={dishes}
        renderItem={({ item }) => (
          <DishListItem loading={isLoading} dish={item} />
        )}
        keyExtractor={item => item.id}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        style={RestaurantDetailsStyles.iconContainer}
        name="arrow-back-circle"
        size={45}
        color="black"
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
