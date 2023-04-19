import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import BasketDishItem from '../components/BasketDishItem';
// import { useBasketContext } from '../context/BasketContext';
// import { useOrderContext } from '../context/OrderContext';

const BasketScreen = () => {
  // const { createOrder }: any = useOrderContext();
  // const { restaurant, basketDishes, totalPrice }: any = useBasketContext();
  const onCreateOrder = async () => {
    //     const newOrder = await createOrder();
    //     navigation.navigate("OrdersTab", {
    //       screen: "Order",
    //       params: { id: newOrder.id },
    //     });
  };

  return (
    <View style={styles.page}>
      {/* <Text style={styles.name}>{restaurant?.name}</Text> */}
      <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 19 }}>
        Your items
      </Text>

      {/* <FlatList
        data={basketDishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      /> */}

      <View style={styles.separator} />
      <Pressable
        onPress={
          () => console.log('order')
          // createOrder
        }
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {/* Create order {totalPrice.toFixed(2)} */}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    paddingVertical: 40, // temp fix
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 10,
  },
  description: {
    color: 'gray',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default BasketScreen;
