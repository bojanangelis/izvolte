import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface BasketDishProps {
  basketDish: {
    Dish: {
      id: string;
      name: string;
      description: string;
      price: number;
      image?: string;
    };
    newDish: {
      quantity: number;
    };
  };
}

const BasketDishItem = ({ basketDish }: BasketDishProps) => {
  console.log('here I have thisone', basketDish);
  return (
    <View style={styles.row}>
      <View style={styles.viewRow}>
        <View style={styles.quantityContainer}>
          {/* <Text>{basketDish?.quantity}</Text> */}
        </View>
        {/* <Text style={styles.name}>{basketDish?.Dish.name}</Text> */}
      </View>
      {/* <Text>${basketDish?.Dish.price.toFixed(2)}</Text> */}
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
    width: '70%',
    fontSize: 14,
    flexWrap: 'wrap',
    fontWeight: '600',
    marginVertical: 10,
  },
});

export default BasketDishItem;
