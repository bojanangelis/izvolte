import { View, FlatList } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import restaurants from '../../assets/data/restaurants.json';
import DishListItem from '../components/DishListItem';
import RestaurantDetailsScreanHeader from '../components/RestaurantDetailsScreanHeader';
import RestaurantDetailsStyles from '../styles/RestaurantDetailsStyles';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type ParamList = {
  Restaurant: {
    id: string;
  };
};
const RestaurantDetailsScreen = () => {
  const route = useRoute<RouteProp<ParamList, 'Restaurant'>>();
  const navigation = useNavigation();
  const restaurant = restaurants[0];
  const { id } = route.params;
  console.warn(id);

  return (
    <View style={RestaurantDetailsStyles.page}>
      <FlatList
        ListHeaderComponent={() => (
          <RestaurantDetailsScreanHeader restaurant={restaurant} />
        )}
        data={restaurant.dishes}
        // work on this one sort it by id!
        keyExtractor={item => item.name}
        renderItem={({ item }) => <DishListItem dish={item} />}
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
