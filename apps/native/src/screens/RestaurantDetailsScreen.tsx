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
import { DishItem } from '../../utils/Types';

export type ParamList = {
  Restaurant: {
    id: string;
  };
};

const RestaurantDetailsScreen: FC = () => {
  const [restaurant, setRestaurant] = useState<GetRestaurantQuery>();
  const route = useRoute<RouteProp<ParamList, 'Restaurant'>>();
  const navigation = useNavigation();
  const { id } = route.params;
  // const { getRestaurant, basket, basketDishes }: any = useBasketContext();
  console.log(id);
  useEffect(() => {
    if (!id) return;
    const fetchRestaurantById = async () => {
      try {
        const restaurantData = await API.graphql<
          GraphQLQuery<GetRestaurantQuery>
        >(graphqlOperation(getRestaurant, { id }));
        setRestaurant(restaurantData?.data);
      } catch (err) {
        console.error('Error fetching restaurant', err);
      }
    };
    fetchRestaurantById();
  }, [id]);
  console.log('ova mi treba', restaurant?.getRestaurant?.Baskets?.items);
  return (
    <View style={RestaurantDetailsStyles.page}>
      <FlatList
        ListHeaderComponent={() => (
          <RestaurantDetailsScreanHeader
            restaurant={restaurant?.getRestaurant}
          />
        )}
        data={restaurant?.getRestaurant?.Dishes?.items}
        renderItem={({ item }) => (
          <DishListItem
            dish={item as DishItem}
            // mislam deka ke mi treba basket tuka da pushtam da ne go vikav po vtorpat vo componenta
            // basket={restaurant?.getRestaurant?.Baskets?.items}
          />
        )}
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
