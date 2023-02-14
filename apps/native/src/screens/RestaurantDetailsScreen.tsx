import { View, FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '../components/DishListItem';
import RestaurantDetailsScreanHeader from '../components/RestaurantDetailsScreanHeader';
import RestaurantDetailsStyles from '../styles/RestaurantDetailsStyles';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Dish, Restaurant } from '../models';
import { DataStore } from 'aws-amplify';

type ParamList = {
  Restaurant: {
    id: string;
  };
};

const RestaurantDetailsScreen = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);
  const route = useRoute<RouteProp<ParamList, 'Restaurant'>>();
  const navigation = useNavigation();
  const { id } = route.params;
  console.warn('idd->>', id);
  useEffect(() => {
    //@ts-ignore
    DataStore.query(Restaurant, id).then(results => setRestaurant(results));
    //@ts-ignore
    if (restaurant?.id) {
      //@ts-ignore
      // prettier-ignore
      DataStore.query(Dish, dish => dish.restaurantID("eq", restaurant?.id)).then(resultsDishes => setDishes(resultsDishes))
    }
  }, [id]);
  console.log('restaurantId-->', restaurant?.id);
  console.log('dishes->', dishes);

  if (!restaurant) {
    return (
      <View style={{ padding: 140, marginTop: 55 }}>
        <Text>Loading....</Text>
        <Text>Working on custom spinner..</Text>
      </View>
    );
  }

  return (
    <View style={RestaurantDetailsStyles.page}>
      <FlatList
        ListHeaderComponent={() => (
          <RestaurantDetailsScreanHeader restaurant={restaurant} />
        )}
        data={dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={item => item}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        style={RestaurantDetailsStyles.iconContainer}
        name="arrow-back-circle"
        size={45}
        color="white"
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
