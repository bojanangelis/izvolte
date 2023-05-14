import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import RestaurantItem from '../components/RestaurantItem';
import { listRestaurants } from '../graphql/queries';
import { ListRestaurantsQuery } from '../API';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    width: '100%',
  },
  scrollView: {
    overflow: 'scroll',
    paddingVertical: 10,
  },
});

const HomeScreen = () => {
  const navigation = useNavigation();
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
  //@ts-ignore
  if (restaurants === null) navigation.navigate('Error');
  return (
    <SafeAreaView style={styles.root}>
      <View></View>
      {/* {restaurants !== null && (
        <FlatList
          data={(restaurants?.items as never) ?? []}
          renderItem={({ item }) => <RestaurantItem restaurant={item} />}
          keyExtractor={item => item?.id ?? '0'}
          showsVerticalScrollIndicator={false}
          style={styles.container}
          contentContainerStyle={styles.list}
        />
      )} */}
      {restaurants !== null && (
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={true}
          style={styles.scrollView}
        >
          {restaurants?.items?.map(item => (
            <RestaurantItem restaurant={item} />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
