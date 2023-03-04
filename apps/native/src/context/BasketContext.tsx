import { DataStore, Predicates } from 'aws-amplify';
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
  // const totalPrice = basketDishes.reduce(
  // (sum, basketDish) =>
  //@ts-ignore
  // sum + basketDish?.quantity * basketDish?.Dish.price,
  //@ts-ignore
  // restaurant?.deliveryFee,
  // );
  const getRestaurant = (value: any) => {
    setRestaurant(value);
  };

  useEffect(() => {
    const fatchBasket = async () => {
      const data = await DataStore.query(Basket, baskets =>
        baskets.and(dataBasket => [
          //@ts-ignore
          dataBasket.restaurantID.eq(restaurant?.id),
          dataBasket.userID.eq(dbUser?.id),
        ]),
      );
      setBasket(data[0]);
    };
    fatchBasket();
  }, [dbUser, restaurant]);
  console.log('I have basketDish-->', basketDishes);

  useEffect(() => {
    if (basket) {
      const fetchData = async () => {
        const data = await DataStore.query(BasketDish, basketDish =>
          basketDish.basketID.eq(basket.id),
        );
        setBasketDishes(data);
        console.log('data here from useeffect-->', data);
      };
      fetchData();
    }
  }, [basket]);

  const createNewBasket = async () => {
    const newBasket = await DataStore.save(
      //@ts-ignore
      new Basket({ userID: dbUser.id, restaurantID: restaurant.id }),
    );
    setBasket(newBasket);
    return newBasket;
  };

  const addDishToBasket = async (dish: any, quantity: number) => {
    // get the existing basket or create a new one
    let getBasket = basket || (await createNewBasket());
    //create basketDish item and save to DataStore.
    const newDish = await DataStore.save(
      new BasketDish({
        Dish: dish,
        quantity: quantity,
        basketID: getBasket.id,
        basketDishDishId: '',
      }),
    );
    if (newDish)
      //@ts-ignore
      console.log('new dish-->', await newDish.Dish);
    setBasketDishes([...basketDishes, newDish]);
  };

  return (
    <BasketContext.Provider
      value={{
        addDishToBasket,
        getRestaurant,
        basket,
        basketDishes,
        restaurant,
        // totalPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);
