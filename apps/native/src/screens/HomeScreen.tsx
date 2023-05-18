import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import RestaurantItem from '../components/RestaurantItem';
import { listRestaurants } from '../graphql/queries';
import { ListRestaurantsQuery } from '../API';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    width: '100%',
  },
  scrollView: {
    overflow: 'scroll',
    paddingVertical: 10,
  },
  rootHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

const HomeScreen = () => {
  const navigation = useNavigation();
  const iconRef = useRef();
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
      <View style={styles.rootHeader}>
        <Text>Your location </Text>
      </View>
      <Animatable.View ref={ref => ref}>
        <AntDesign name="down" size={18} color="black" />
      </Animatable.View>

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
