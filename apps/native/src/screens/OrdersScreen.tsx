import { FlatList } from 'react-native';
import React from 'react';
import OrderListItem from '../components/OrderListItem';
import { useOrderContext } from '../context/OrderContext';

const OrdersScreen = () => {
  const { orders }: any = useOrderContext();

  return (
    <FlatList
      style={{ flex: 1, width: '100%' }}
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
    />
  );
};

export default OrdersScreen;
