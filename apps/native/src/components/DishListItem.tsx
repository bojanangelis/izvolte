import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import RestaurantDetailsStyles from '../styles/RestaurantDetailsStyles';

// EXAMPLE!!!!!!
export interface DishItemInterface {
  dish: {
    id: number;
    name: string;
    description: string;
    price: number;
    image?: string;
  };
}

const DishListItem = ({ dish }: DishItemInterface) => {
  return (
    <TouchableOpacity style={RestaurantDetailsStyles.container}>
      <View style={RestaurantDetailsStyles.viewContainer}>
        <Text style={RestaurantDetailsStyles.name}>{dish.name}</Text>
        <Text style={RestaurantDetailsStyles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={RestaurantDetailsStyles.price}>${dish.price}</Text>
      </View>
      {dish.image && (
        <Image
          source={{ uri: dish.image }}
          style={RestaurantDetailsStyles.dishImage}
        />
      )}
    </TouchableOpacity>
  );
};

export default DishListItem;

// EXAMPLE!!!!!!
// <FlatList
//   ItemSeparatorComponent={
//     Platform.OS !== 'android' &&
//     (({highlighted}) => (
//       <View
//         style={[style.separator, highlighted && {marginLeft: 0}]}
//       />
//     ))
//   }
//   data={[{title: 'Title Text', key: 'item1'}]}
//   renderItem={({item, index, separators}) => (
//     <TouchableHighlight
//       key={item.key}
//       onPress={() => this._onPress(item)}
//       onShowUnderlay={separators.highlight}
//       onHideUnderlay={separators.unhighlight}>
//       <View style={{backgroundColor: 'white'}}>
//         <Text>{item.title}</Text>
//       </View>
//     </TouchableHighlight>
//   )}
// />
