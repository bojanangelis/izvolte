import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import restaurants from '../../assets/data/restaurants.json';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const DishDetailsScreen = () => {
  const navigation = useNavigation();
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

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  return (
    <View style={styles.page}>
      <Image source={{ uri: dish?.image }} style={styles.imageHeader} />
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

      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Add {quantity} to basket &#8226; $ {getTotal()}
        </Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
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
  rowView: {
    padding: 20,
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
  imageHeader: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  button: {
    backgroundColor: 'black',
    bottom: 20,
    margin: 20,
    padding: 20,
    marginTop: 'auto',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default DishDetailsScreen;
