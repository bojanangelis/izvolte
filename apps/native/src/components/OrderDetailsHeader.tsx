import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';
import RestaurantDetailsStyles from '../styles/RestaurantDetailsStyles';
import orders from '../../assets/data/orders.json';

const OrderDetailsHeader = () => {
  const order = orders[0];

  return (
    <View>
      <View style={RestaurantDetailsStyles.page}>
        <Image
          source={{ uri: order.Restaurant.image }}
          style={RestaurantDetailsStyles.image}
        />

        <View style={RestaurantDetailsStyles.container}>
          <Text style={RestaurantDetailsStyles.title}>
            {order.Restaurant.name}
          </Text>
          <Text style={RestaurantDetailsStyles.subtitle}>
            {order.status} &#8226; 2 days ago
          </Text>

          <Text style={RestaurantDetailsStyles.menuTitle}>Your orders</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetailsHeader;
