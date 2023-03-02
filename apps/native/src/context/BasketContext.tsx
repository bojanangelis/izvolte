import { DataStore } from 'aws-amplify';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Basket, BasketDish, LazyBasket, LazyBasketDish } from '../models';
import { useAuthContext } from './AuthContext';

const BasketContext = createContext({});

const BasketContextProvider = ({ children }: { children: ReactNode }) => {
  const { dbUser }: any = useAuthContext();
  const [restaurant, setRestaurant] = useState(null);
  const [basket, setBasket] = useState<null | LazyBasket>(null);
  const [basketDishes, setBasketDishes] = useState<LazyBasketDish[]>([]);
  const getRestaurant = (value: any) => {
    setRestaurant(value);
  };

  useEffect(() => {
    DataStore.query(Basket, basket =>
      //@ts-ignore
      basket.restaurantID.eq(restaurant.id).userID.eq(dbUser.id),
    ).then(baskets => setBasket(baskets[0]));
  }, [dbUser, restaurant]);

  useEffect(() => {
    if (basket) {
      const fetchData = async () => {
        const data = await DataStore.query(BasketDish, basketDish =>
          basketDish.basketID.eq(basket.id),
        );
        setBasketDishes(data);
      };
      fetchData();
    }
  }, [basket]);

  const createNewBasket = async () => {
    const newBasket = await DataStore.save(
      //@ts-ignore
      new Basket({ userID: dbUser.id, restaurantID: restaurant?.id }),
    );
    setBasket(newBasket);
    return newBasket;
  };
  const addDishToBasket = async (Dish: any, quantity: number) => {
    // get the existing basket or create a new one
    let getBasket = basket || (await createNewBasket());
    //create basketDish item and save to DataStore.
    const newDish = await DataStore.save(
      new BasketDish({ Dish, quantity, basketID: getBasket.id }),
    );
    console.log('newDish-->', newDish.Dish);
    setBasketDishes([...basketDishes, newDish]);
  };
  console.log(basketDishes);
  return (
    <BasketContext.Provider
      value={{
        addDishToBasket,
        getRestaurant,
        basket,
        basketDishes,
        restaurant,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);
