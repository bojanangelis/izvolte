import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import RestaurantItem from '../components/RestaurantItem';
import { listRestaurants } from '../graphql/queries';
import { ListRestaurantsQuery } from '../API';
import ErrorScreen from './ErrorScreen';

const HomeScreen = () => {
  const [restaurants, setRestaurants] =
    useState<ListRestaurantsQuery['listRestaurants']>();

  useEffect(() => {
    const catchRestaurants = async () => {
      const dataRestaurants = await API.graphql<
        GraphQLQuery<ListRestaurantsQuery>
      >(graphqlOperation(listRestaurants));
      setRestaurants(dataRestaurants?.data?.listRestaurants);
    };
    catchRestaurants();
  }, []);

  return (
    <View>
      {restaurants !== null ? (
        <FlatList
          data={restaurants?.items ?? []}
          renderItem={({ item }) => <RestaurantItem restaurant={item} />}
          keyExtractor={item => item?.id ?? '0'}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <ErrorScreen />
      )}
    </View>
  );
};

export default HomeScreen;
