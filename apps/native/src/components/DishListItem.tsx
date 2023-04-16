import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import RestaurantDetailsStyles from '../styles/RestaurantDetailsStyles';
import { useNavigation } from '@react-navigation/native';
import { DishItem } from '../../utils/Types';

//wip
const DishListItem = ({ dish }: { dish: DishItem }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        //@ts-ignore
        navigation.navigate('Dish', { id: dish.id } as { id: string })
      }
      style={RestaurantDetailsStyles.container}
    >
      <View style={RestaurantDetailsStyles.viewContainer}>
        <Text style={RestaurantDetailsStyles.name}>{dish?.name}</Text>
        <Text style={RestaurantDetailsStyles.description} numberOfLines={2}>
          {dish?.description}
        </Text>
        <Text style={RestaurantDetailsStyles.price}>${dish?.price}</Text>
      </View>
      {dish?.image ? (
        <Image
          source={{ uri: dish?.image }}
          style={RestaurantDetailsStyles.dishImage}
        />
      ) : (
        //wip on this one don't do this url.
        <Image
          source={{
            uri: 'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png',
          }}
          style={RestaurantDetailsStyles.dishImage}
        />
      )}
    </TouchableOpacity>
  );
};

export default DishListItem;
