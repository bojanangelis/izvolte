import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import RestaurantItem from '../components/RestaurantItem';
import { listRestaurants } from '../graphql/queries';
import { ListRestaurantsQuery, ListRestaurantsQueryVariables } from '../API';
// import { Restaurant } from '../models';

const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState<ListRestaurantsQuery>();

  useEffect(() => {
    const catchRestaurants = async () => {
      const dataRestaurants = await API.graphql<
        GraphQLQuery<ListRestaurantsQuery>
      >(graphqlOperation(listRestaurants));
      setRestaurants(dataRestaurants.data?.listRestaurants?.items);
    };
    catchRestaurants();
  }, []);
  console.log(restaurants);
  return (
    // <Text>dada</Text>
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
