import { DataStore } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import RestaurantItem from '../components/RestaurantItem';
// import { Restaurant } from '../models';

const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // DataStore.query(Restaurant).then(results =>
    //   setRestaurants(results as Array<never>),
    // );
  }, []);

  return (
    <Text>dada</Text>
    // <FlatList
    // data={restaurants}
    // renderItem={({ item }) => <RestaurantItem restaurant={item} />}
    // showsVerticalScrollIndicator={false}
    // />
  );
};

export default HomeScreen;
