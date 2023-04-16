import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '../components/DishListItem';
import RestaurantDetailsScreanHeader from '../components/RestaurantDetailsScreanHeader';
import RestaurantDetailsStyles from '../styles/RestaurantDetailsStyles';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { getRestaurant } from '../graphql/queries';
import { GetRestaurantQuery } from '../API';
import { DishItem, DishesItems } from '../../utils/Types';
// import { useBasketContext } from '../context/BasketContext';

type ParamList = {
  Restaurant: {
    id: string;
  };
};

const RestaurantDetailsScreen: FC = () => {
  const [restaurant, setRestaurant] = useState<GetRestaurantQuery>();
  const [isLoading, setIsLoading] = useState(false);
  const [dishes, setDishes] = useState<DishesItems>();
  const route = useRoute<RouteProp<ParamList, 'Restaurant'>>();
  const navigation = useNavigation();
  const { id } = route.params;
  // const { getRestaurant, basket, basketDishes }: any = useBasketContext();

  useEffect(() => {
    if (!id) return;
    const fetchRestaurantById = async () => {
      try {
        const restaurantData = await API.graphql<
          GraphQLQuery<GetRestaurantQuery>
        >(graphqlOperation(getRestaurant, { id }));
        setRestaurant(restaurantData?.data);
        setDishes(restaurantData?.data?.getRestaurant?.Dishes ?? null);
      } catch (err) {
        console.error('Error fetching restaurant', err);
      }
    };
    fetchRestaurantById();
  }, [id]);

  // DataStore.query(Restaurant, id).then(results =>
  //   setRestaurant(results || null),
  // );
  // const getDishes = async () => {
  //   const allDishesOfrestaurant = await DataStore.query(Dish, dish =>
  //     dish.restaurantID.eq(id),
  //   );
  //   setDishes(allDishesOfrestaurant);
  //   setIsLoading(false);
  // };
  // getDishes();

  // useEffect(() => {
  //   if (!restaurant) return;
  //   getRestaurant(restaurant);
  // }, [restaurant]);

  return (
    <View style={RestaurantDetailsStyles.page}>
      <FlatList
        ListHeaderComponent={() => (
          <RestaurantDetailsScreanHeader
            restaurant={restaurant?.getRestaurant}
          />
        )}
        data={dishes?.items}
        renderItem={({ item }) => <DishListItem dish={item as DishItem} />}
        keyExtractor={item => item?.id ?? ''}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        style={RestaurantDetailsStyles.iconContainer}
        name="arrow-back-circle"
        size={45}
        color="black"
      />
      {/* {basket?.restaurantID === restaurant?.id && (
        <TouchableOpacity
          //@ts-ignore
          onPress={() => navigation.navigate('Basket')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            View Basket ({basketDishes.length})
          </Text>
        </TouchableOpacity>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    bottom: 20,
    margin: 20,
    padding: 20,
    marginTop: 'auto',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default RestaurantDetailsScreen;
