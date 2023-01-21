import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import restaurants from '../../assets/data/restaurants.json';

const DishDetailsScreen = () => {
  const dish = restaurants[0].dishes[0];
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = (value: string) => {
    switch (value) {
      case 'plus':
        setQuantity(quantity + 1);
        break;
      case 'minus':
        if (quantity > 1) setQuantity(quantity - 1);
        break;
    }
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleQuantity('minus')}>
          <AntDesign name="minuscircleo" size={60} color="black" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={() => handleQuantity('plus')}>
          <AntDesign name="pluscircleo" size={60} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    paddingVertical: 50,
    padding: 10,
  },
  title: { fontSize: 30, fontWeight: '600', marginVertical: 10 },
  description: {
    color: '#696969',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
});

export default DishDetailsScreen;
