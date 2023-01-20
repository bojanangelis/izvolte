import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

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
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>${dish.price}</Text>
      </View>
      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.dishImage} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  viewContainer: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  description: {
    color: 'gray',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  dishImage: {
    height: 75,
    aspectRatio: 1,
  },
});
export default DishListItem;
