import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface BasketDishProps {
  basketDish: {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image?: string;
  };
}

const BasketDishItem = ({ basketDish }: BasketDishProps) => {
  return (
    <View style={styles.row}>
      <View style={styles.viewRow}>
        <View style={styles.quantityContainer}>
          <Text>{basketDish.quantity}</Text>
        </View>
        {/* <Text style={styles.name}>{basketDish.Dish.name}</Text> */}
      </View>
      <Text>${basketDish.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityContainer: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 10,
  },
});

export default BasketDishItem;
