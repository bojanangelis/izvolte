import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';

interface OrderListInterface {
  order: {
    id: string;
    userID: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    orderRestaurantId: string;
    _version?: number;
    _lastChangedAt?: number;
    _deleted?: unknown;
    Restaurant: {
      id: string;
      name: string;
      image: string;
      deliveryFee: number;
      minDeliveryTime: number;
      maxDeliveryTime: number;
      rating: number;
      address: string;
      lat: number;
      lng: number;
      createdAt: string;
      updatedAt: string;
    };
    User: {
      id: string;
      name: string;
      address: string;
      lat: number;
      lng: number;
    };
  };
}

const OrderListItem = ({ order }: OrderListInterface) => {
  console.log('order>>', order);
  return (
    <Pressable
      // onPress={onPress}
      style={{ flexDirection: 'row', margin: 40, alignItems: 'center' }}
    >
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{ width: 75, height: 75, marginRight: 5 }}
      />

      <View>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>
          {order.Restaurant.name}
        </Text>
        <Text style={{ marginVertical: 5 }}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status} </Text>
      </View>
    </Pressable>
  );
};

export default OrderListItem;
