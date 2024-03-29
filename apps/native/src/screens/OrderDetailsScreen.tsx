import { ActivityIndicator, FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import BasketDishItem from '../components/BasketDishItem';
import OrderDetailsHeader from '../components/OrderDetailsHeader';
// import { useOrderContext } from '../context/OrderContext';
import { useRoute } from '@react-navigation/native';

const OrderDetailsScreen = () => {
  const [order, setOrder] = useState(null);
  // const { getOrder }: any = useOrderContext();
  const route = useRoute();
  useEffect(() => {
    //@ts-ignore
    // getOrder(route.params?.id as string).then(data => setOrder(data));
  }, [order]);

  if (!order) {
    return <ActivityIndicator size={'large'} color="gray" />;
  }

  return (
    <Text>daadwe</Text>
    // <FlatList
    //   ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
    //   //@ts-ignore
    //   data={order.dishes}
    //   renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    // />
  );
};

export default OrderDetailsScreen;
