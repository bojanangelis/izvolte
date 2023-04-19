import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import RestaurantDetailsStyles from '../styles/RestaurantDetailsStyles';
import { useNavigation } from '@react-navigation/native';
import { DishItem } from '../../utils/Types';

//wip
const DishListItem = ({ dish }: { dish: DishItem }) => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  return (
    <TouchableOpacity
      onPress={
        () => setOpen(e => !e)
        //@ts-ignore
        // navigation.navigate('Dish', { id: dish.id } as { id: string })
      }
      style={RestaurantDetailsStyles.container}
    >
      <View style={RestaurantDetailsStyles.viewContainer}>
        <Text style={RestaurantDetailsStyles.name}>{dish?.name}</Text>
        <Text style={RestaurantDetailsStyles.description} numberOfLines={2}>
          {dish?.description}
        </Text>
        <Text style={RestaurantDetailsStyles.price}>${dish?.price}</Text>
        {open && (
          <View style={RestaurantDetailsStyles.shortAddToBasket}>
            <TouchableOpacity>
              <Text>+</Text>
            </TouchableOpacity>
            {/* ova ke bide so globalstore */}
            <Text>Quantity</Text>
            <TouchableOpacity>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Image
        source={
          dish.image
            ? { uri: dish?.image }
            : require('../../assets/image-not-found.png')
        }
        style={RestaurantDetailsStyles.dishImage}
      />
    </TouchableOpacity>
  );
};

export default DishListItem;
