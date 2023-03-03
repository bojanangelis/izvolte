import { DataStore } from 'aws-amplify';
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { LazyOrder, Order, OrderDish } from '../models';
import { useAuthContext } from './AuthContext';
import { useBasketContext } from './BasketContext';

const OrderContext = createContext({});

const OrderContextProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<LazyOrder[]>([]);
  const { dbUser }: any = useAuthContext();
  const { restaurant, totalPrice, basketDishes, basket }: any =
    useBasketContext();

  useEffect(() => {
    DataStore.query(Order, order => order.userID.eq(dbUser?.id)).then(getdata =>
      setOrders(getdata),
    );
  }, [dbUser]);

  const createOrder = async () => {
    // Create the order.
    const newOrder = await DataStore.save(
      new Order({
        userID: dbUser.id,
        Restaurant: restaurant,
        status: 'NEW',
        total: totalPrice,
      }),
    );
    // Add all basketDishes to the order
    await Promise.all(
      basketDishes.map((basketDish: any) =>
        DataStore.save(
          new OrderDish({
            quantity: basketDish.newDish.quantity,
            orderID: newOrder.id,
            Dish: basketDish.Dish,
          }),
        ),
      ),
    );
    console.log(newOrder);
    // Delete basket.
    await DataStore.delete(basket);
    setOrders([...orders, newOrder]);
  };

  const getOrder = async (id: string) => {
    const order = await DataStore.query(Order, id);
    const orderDishes = await DataStore.query(OrderDish, orderDish =>
      orderDish.orderID.eq(id),
    );
    return { ...order, dishes: orderDishes };
  };
  console.log(orders);
  return (
    <OrderContext.Provider value={{ createOrder, orders, getOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);
