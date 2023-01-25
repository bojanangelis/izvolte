import { FlatList } from 'react-native';
import React from 'react';
import restaurants from '../../assets/data/restaurants.json';
import BasketDishItem from '../components/BasketDishItem';
import OrderListItem from '../components/OrderListItem';
import orders from '../../assets/data/orders.json';
import OrderDetailsHeader from '../components/OrderDetailsHeader';

const OrderDetailsScreen = () => {
  return (
    <FlatList
      ListHeaderComponent={<OrderDetailsHeader />}
      data={restaurants[0].dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetailsScreen;
