import { GetRestaurantQuery } from '../src/API';

export type DishesItems = (GetRestaurantQuery['getRestaurant'] & {
  Dishes?: {
    __typename: 'ModelDishConnection';
    nextToken?: string | null;
    items: Array<DishItem | null>;
  } | null;
})['Dishes'];

export type DishItem = {
  __typename: 'Dish';
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  restaurantID: string;
  createdAt: string;
  updatedAt: string;
};
