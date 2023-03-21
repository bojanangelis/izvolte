import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
// import { Dish } from '../models';
// import { useBasketContext } from '../context/BasketContext';

const DishDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // const [dish, setDish] = useState<Dish | null>(null);
  const [quantity, setQuantity] = useState(1);

  // const { addDishToBasket }: any = useBasketContext();
  //@ts-ignore
  const { id } = route.params;

  // useEffect(() => {
  //   if (id) DataStore.query(Dish, id).then(dish => setDish(dish || null));
  // }, [id]);

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

  const addToBasket = async () => {
    // await addDishToBasket(dish, quantity);
    navigation.goBack();
  };

  const getTotal = () => {
    // if (dish) return (dish.price * quantity).toFixed(2);
  };
  // if (!dish) return <ActivityIndicator size={'large'} color="gray" />;
  return (
    <View style={styles.page}>
      {/* <Image source={{ uri: dish.image }} style={styles.imageHeader} />
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {dish.description}
      </Text> */}
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
        //@ts-ignore
        onPress={addToBasket}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {/* Add {quantity} to basket &#8226; $ {getTotal()} */}
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
