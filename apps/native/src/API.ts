/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOrderDishInput = {
  id?: string | null,
  quantity: number,
  orderID: string,
  orderDishDishId?: string | null,
};

export type ModelOrderDishConditionInput = {
  quantity?: ModelIntInput | null,
  orderID?: ModelIDInput | null,
  and?: Array< ModelOrderDishConditionInput | null > | null,
  or?: Array< ModelOrderDishConditionInput | null > | null,
  not?: ModelOrderDishConditionInput | null,
  orderDishDishId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type OrderDish = {
  __typename: "OrderDish",
  id: string,
  quantity: number,
  Dish?: Dish | null,
  orderID: string,
  createdAt: string,
  updatedAt: string,
  orderDishDishId?: string | null,
};

export type Dish = {
  __typename: "Dish",
  id: string,
  name: string,
  image: string,
  description: string,
  price: number,
  restaurantID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOrderDishInput = {
  id: string,
  quantity?: number | null,
  orderID?: string | null,
  orderDishDishId?: string | null,
};

export type DeleteOrderDishInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  userID: string,
  details?: string | null,
  subtotal?: number | null,
  total: number,
  status: OrderStatus,
  orderRestaurantId?: string | null,
};

export enum OrderStatus {
  NEW = "NEW",
  COOKING = "COOKING",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED",
}


export type ModelOrderConditionInput = {
  userID?: ModelIDInput | null,
  details?: ModelStringInput | null,
  subtotal?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  status?: ModelOrderStatusInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
  orderRestaurantId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelOrderStatusInput = {
  eq?: OrderStatus | null,
  ne?: OrderStatus | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  userID: string,
  Restaurant?: Restaurant | null,
  details?: string | null,
  subtotal?: number | null,
  total: number,
  status: OrderStatus,
  OrderDishes?: ModelOrderDishConnection | null,
  createdAt: string,
  updatedAt: string,
  orderRestaurantId?: string | null,
};

export type Restaurant = {
  __typename: "Restaurant",
  id: string,
  name: string,
  image: string,
  deliveryFee: number,
  minDeliveryTime: number,
  maxDeliveryTime: number,
  rating?: number | null,
  address: string,
  lat: number,
  lng: number,
  Dishes?: ModelDishConnection | null,
  Baskets?: ModelBasketConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDishConnection = {
  __typename: "ModelDishConnection",
  items:  Array<Dish | null >,
  nextToken?: string | null,
};

export type ModelBasketConnection = {
  __typename: "ModelBasketConnection",
  items:  Array<Basket | null >,
  nextToken?: string | null,
};

export type Basket = {
  __typename: "Basket",
  id: string,
  BasketDishes?: ModelBasketDishConnection | null,
  userID: string,
  restaurantID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelBasketDishConnection = {
  __typename: "ModelBasketDishConnection",
  items:  Array<BasketDish | null >,
  nextToken?: string | null,
};

export type BasketDish = {
  __typename: "BasketDish",
  id: string,
  quantity: number,
  basketID: string,
  Dish: Dish,
  createdAt: string,
  updatedAt: string,
  basketDishDishId: string,
};

export type ModelOrderDishConnection = {
  __typename: "ModelOrderDishConnection",
  items:  Array<OrderDish | null >,
  nextToken?: string | null,
};

export type UpdateOrderInput = {
  id: string,
  userID?: string | null,
  details?: string | null,
  subtotal?: number | null,
  total?: number | null,
  status?: OrderStatus | null,
  orderRestaurantId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateBasketDishInput = {
  id?: string | null,
  quantity: number,
  basketID: string,
  basketDishDishId: string,
};

export type ModelBasketDishConditionInput = {
  quantity?: ModelIntInput | null,
  basketID?: ModelIDInput | null,
  and?: Array< ModelBasketDishConditionInput | null > | null,
  or?: Array< ModelBasketDishConditionInput | null > | null,
  not?: ModelBasketDishConditionInput | null,
  basketDishDishId?: ModelIDInput | null,
};

export type UpdateBasketDishInput = {
  id: string,
  quantity?: number | null,
  basketID?: string | null,
  basketDishDishId?: string | null,
};

export type DeleteBasketDishInput = {
  id: string,
};

export type CreateBasketInput = {
  id?: string | null,
  userID: string,
  restaurantID: string,
};

export type ModelBasketConditionInput = {
  userID?: ModelIDInput | null,
  restaurantID?: ModelIDInput | null,
  and?: Array< ModelBasketConditionInput | null > | null,
  or?: Array< ModelBasketConditionInput | null > | null,
  not?: ModelBasketConditionInput | null,
};

export type UpdateBasketInput = {
  id: string,
  userID?: string | null,
  restaurantID?: string | null,
};

export type DeleteBasketInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  sub: string,
  name: string,
  number: string,
  address: string,
  lat: number,
  lng: number,
};

export type ModelUserConditionInput = {
  sub?: ModelStringInput | null,
  name?: ModelStringInput | null,
  number?: ModelStringInput | null,
  address?: ModelStringInput | null,
  lat?: ModelFloatInput | null,
  lng?: ModelFloatInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  sub: string,
  name: string,
  number: string,
  address: string,
  lat: number,
  Orders?: ModelOrderConnection | null,
  Baskets?: ModelBasketConnection | null,
  lng: number,
  createdAt: string,
  updatedAt: string,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  sub?: string | null,
  name?: string | null,
  number?: string | null,
  address?: string | null,
  lat?: number | null,
  lng?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateDishInput = {
  id?: string | null,
  name: string,
  image: string,
  description: string,
  price: number,
  restaurantID: string,
};

export type ModelDishConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  restaurantID?: ModelIDInput | null,
  and?: Array< ModelDishConditionInput | null > | null,
  or?: Array< ModelDishConditionInput | null > | null,
  not?: ModelDishConditionInput | null,
};

export type UpdateDishInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  description?: string | null,
  price?: number | null,
  restaurantID?: string | null,
};

export type DeleteDishInput = {
  id: string,
};

export type CreateRestaurantInput = {
  id?: string | null,
  name: string,
  image: string,
  deliveryFee: number,
  minDeliveryTime: number,
  maxDeliveryTime: number,
  rating?: number | null,
  address: string,
  lat: number,
  lng: number,
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  deliveryFee?: ModelFloatInput | null,
  minDeliveryTime?: ModelIntInput | null,
  maxDeliveryTime?: ModelIntInput | null,
  rating?: ModelFloatInput | null,
  address?: ModelStringInput | null,
  lat?: ModelFloatInput | null,
  lng?: ModelFloatInput | null,
  and?: Array< ModelRestaurantConditionInput | null > | null,
  or?: Array< ModelRestaurantConditionInput | null > | null,
  not?: ModelRestaurantConditionInput | null,
};

export type UpdateRestaurantInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  deliveryFee?: number | null,
  minDeliveryTime?: number | null,
  maxDeliveryTime?: number | null,
  rating?: number | null,
  address?: string | null,
  lat?: number | null,
  lng?: number | null,
};

export type DeleteRestaurantInput = {
  id: string,
};

export type ModelOrderDishFilterInput = {
  id?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  orderID?: ModelIDInput | null,
  and?: Array< ModelOrderDishFilterInput | null > | null,
  or?: Array< ModelOrderDishFilterInput | null > | null,
  not?: ModelOrderDishFilterInput | null,
  orderDishDishId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  details?: ModelStringInput | null,
  subtotal?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  status?: ModelOrderStatusInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
  orderRestaurantId?: ModelIDInput | null,
};

export type ModelBasketDishFilterInput = {
  id?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  basketID?: ModelIDInput | null,
  and?: Array< ModelBasketDishFilterInput | null > | null,
  or?: Array< ModelBasketDishFilterInput | null > | null,
  not?: ModelBasketDishFilterInput | null,
  basketDishDishId?: ModelIDInput | null,
};

export type ModelBasketFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  restaurantID?: ModelIDInput | null,
  and?: Array< ModelBasketFilterInput | null > | null,
  or?: Array< ModelBasketFilterInput | null > | null,
  not?: ModelBasketFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  sub?: ModelStringInput | null,
  name?: ModelStringInput | null,
  number?: ModelStringInput | null,
  address?: ModelStringInput | null,
  lat?: ModelFloatInput | null,
  lng?: ModelFloatInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelDishFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  restaurantID?: ModelIDInput | null,
  and?: Array< ModelDishFilterInput | null > | null,
  or?: Array< ModelDishFilterInput | null > | null,
  not?: ModelDishFilterInput | null,
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  deliveryFee?: ModelFloatInput | null,
  minDeliveryTime?: ModelIntInput | null,
  maxDeliveryTime?: ModelIntInput | null,
  rating?: ModelFloatInput | null,
  address?: ModelStringInput | null,
  lat?: ModelFloatInput | null,
  lng?: ModelFloatInput | null,
  and?: Array< ModelRestaurantFilterInput | null > | null,
  or?: Array< ModelRestaurantFilterInput | null > | null,
  not?: ModelRestaurantFilterInput | null,
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection",
  items:  Array<Restaurant | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionOrderDishFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  orderID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionOrderDishFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderDishFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  details?: ModelSubscriptionStringInput | null,
  subtotal?: ModelSubscriptionFloatInput | null,
  total?: ModelSubscriptionFloatInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBasketDishFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  basketID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBasketDishFilterInput | null > | null,
  or?: Array< ModelSubscriptionBasketDishFilterInput | null > | null,
};

export type ModelSubscriptionBasketFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  restaurantID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBasketFilterInput | null > | null,
  or?: Array< ModelSubscriptionBasketFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sub?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  number?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  lat?: ModelSubscriptionFloatInput | null,
  lng?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionDishFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  restaurantID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionDishFilterInput | null > | null,
  or?: Array< ModelSubscriptionDishFilterInput | null > | null,
};

export type ModelSubscriptionRestaurantFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  deliveryFee?: ModelSubscriptionFloatInput | null,
  minDeliveryTime?: ModelSubscriptionIntInput | null,
  maxDeliveryTime?: ModelSubscriptionIntInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  address?: ModelSubscriptionStringInput | null,
  lat?: ModelSubscriptionFloatInput | null,
  lng?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionRestaurantFilterInput | null > | null,
  or?: Array< ModelSubscriptionRestaurantFilterInput | null > | null,
};

export type CreateOrderDishMutationVariables = {
  input: CreateOrderDishInput,
  condition?: ModelOrderDishConditionInput | null,
};

export type CreateOrderDishMutation = {
  createOrderDish?:  {
    __typename: "OrderDish",
    id: string,
    quantity: number,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
    orderDishDishId?: string | null,
  } | null,
};

export type UpdateOrderDishMutationVariables = {
  input: UpdateOrderDishInput,
  condition?: ModelOrderDishConditionInput | null,
};

export type UpdateOrderDishMutation = {
  updateOrderDish?:  {
    __typename: "OrderDish",
    id: string,
    quantity: number,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
    orderDishDishId?: string | null,
  } | null,
};

export type DeleteOrderDishMutationVariables = {
  input: DeleteOrderDishInput,
  condition?: ModelOrderDishConditionInput | null,
};

export type DeleteOrderDishMutation = {
  deleteOrderDish?:  {
    __typename: "OrderDish",
    id: string,
    quantity: number,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
    orderDishDishId?: string | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    Restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      image: string,
      deliveryFee: number,
      minDeliveryTime: number,
      maxDeliveryTime: number,
      rating?: number | null,
      address: string,
      lat: number,
      lng: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    details?: string | null,
    subtotal?: number | null,
    total: number,
    status: OrderStatus,
    OrderDishes?:  {
      __typename: "ModelOrderDishConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    orderRestaurantId?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    Restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      image: string,
      deliveryFee: number,
      minDeliveryTime: number,
      maxDeliveryTime: number,
      rating?: number | null,
      address: string,
      lat: number,
      lng: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    details?: string | null,
    subtotal?: number | null,
    total: number,
    status: OrderStatus,
    OrderDishes?:  {
      __typename: "ModelOrderDishConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    orderRestaurantId?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    Restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      image: string,
      deliveryFee: number,
      minDeliveryTime: number,
      maxDeliveryTime: number,
      rating?: number | null,
      address: string,
      lat: number,
      lng: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    details?: string | null,
    subtotal?: number | null,
    total: number,
    status: OrderStatus,
    OrderDishes?:  {
      __typename: "ModelOrderDishConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    orderRestaurantId?: string | null,
  } | null,
};

export type CreateBasketDishMutationVariables = {
  input: CreateBasketDishInput,
  condition?: ModelBasketDishConditionInput | null,
};

export type CreateBasketDishMutation = {
  createBasketDish?:  {
    __typename: "BasketDish",
    id: string,
    quantity: number,
    basketID: string,
    Dish:  {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    basketDishDishId: string,
  } | null,
};

export type UpdateBasketDishMutationVariables = {
  input: UpdateBasketDishInput,
  condition?: ModelBasketDishConditionInput | null,
};

export type UpdateBasketDishMutation = {
  updateBasketDish?:  {
    __typename: "BasketDish",
    id: string,
    quantity: number,
    basketID: string,
    Dish:  {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    basketDishDishId: string,
  } | null,
};

export type DeleteBasketDishMutationVariables = {
  input: DeleteBasketDishInput,
  condition?: ModelBasketDishConditionInput | null,
};

export type DeleteBasketDishMutation = {
  deleteBasketDish?:  {
    __typename: "BasketDish",
    id: string,
    quantity: number,
    basketID: string,
    Dish:  {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    basketDishDishId: string,
  } | null,
};

export type CreateBasketMutationVariables = {
  input: CreateBasketInput,
  condition?: ModelBasketConditionInput | null,
};

export type CreateBasketMutation = {
  createBasket?:  {
    __typename: "Basket",
    id: string,
    BasketDishes?:  {
      __typename: "ModelBasketDishConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBasketMutationVariables = {
  input: UpdateBasketInput,
  condition?: ModelBasketConditionInput | null,
};

export type UpdateBasketMutation = {
  updateBasket?:  {
    __typename: "Basket",
    id: string,
    BasketDishes?:  {
      __typename: "ModelBasketDishConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBasketMutationVariables = {
  input: DeleteBasketInput,
  condition?: ModelBasketConditionInput | null,
};

export type DeleteBasketMutation = {
  deleteBasket?:  {
    __typename: "Basket",
    id: string,
    BasketDishes?:  {
      __typename: "ModelBasketDishConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    name: string,
    number: string,
    address: string,
    lat: number,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      nextToken?: string | null,
    } | null,
    lng: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    name: string,
    number: string,
    address: string,
    lat: number,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      nextToken?: string | null,
    } | null,
    lng: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    name: string,
    number: string,
    address: string,
    lat: number,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      nextToken?: string | null,
    } | null,
    lng: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDishMutationVariables = {
  input: CreateDishInput,
  condition?: ModelDishConditionInput | null,
};

export type CreateDishMutation = {
  createDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    image: string,
    description: string,
    price: number,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDishMutationVariables = {
  input: UpdateDishInput,
  condition?: ModelDishConditionInput | null,
};

export type UpdateDishMutation = {
  updateDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    image: string,
    description: string,
    price: number,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDishMutationVariables = {
  input: DeleteDishInput,
  condition?: ModelDishConditionInput | null,
};

export type DeleteDishMutation = {
  deleteDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    image: string,
    description: string,
    price: number,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRestaurantMutationVariables = {
  input: CreateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type CreateRestaurantMutation = {
  createRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    image: string,
    deliveryFee: number,
    minDeliveryTime: number,
    maxDeliveryTime: number,
    rating?: number | null,
    address: string,
    lat: number,
    lng: number,
    Dishes?:  {
      __typename: "ModelDishConnection",
      nextToken?: string | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRestaurantMutationVariables = {
  input: UpdateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type UpdateRestaurantMutation = {
  updateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    image: string,
    deliveryFee: number,
    minDeliveryTime: number,
    maxDeliveryTime: number,
    rating?: number | null,
    address: string,
    lat: number,
    lng: number,
    Dishes?:  {
      __typename: "ModelDishConnection",
      nextToken?: string | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRestaurantMutationVariables = {
  input: DeleteRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type DeleteRestaurantMutation = {
  deleteRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    image: string,
    deliveryFee: number,
    minDeliveryTime: number,
    maxDeliveryTime: number,
    rating?: number | null,
    address: string,
    lat: number,
    lng: number,
    Dishes?:  {
      __typename: "ModelDishConnection",
      nextToken?: string | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetOrderDishQueryVariables = {
  id: string,
};

export type GetOrderDishQuery = {
  getOrderDish?:  {
    __typename: "OrderDish",
    id: string,
    quantity: number,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
    orderDishDishId?: string | null,
  } | null,
};

export type ListOrderDishesQueryVariables = {
  filter?: ModelOrderDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderDishesQuery = {
  listOrderDishes?:  {
    __typename: "ModelOrderDishConnection",
    items:  Array< {
      __typename: "OrderDish",
      id: string,
      quantity: number,
      orderID: string,
      createdAt: string,
      updatedAt: string,
      orderDishDishId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrderDishesByOrderIDQueryVariables = {
  orderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrderDishesByOrderIDQuery = {
  orderDishesByOrderID?:  {
    __typename: "ModelOrderDishConnection",
    items:  Array< {
      __typename: "OrderDish",
      id: string,
      quantity: number,
      orderID: string,
      createdAt: string,
      updatedAt: string,
      orderDishDishId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    Restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      image: string,
      deliveryFee: number,
      minDeliveryTime: number,
      maxDeliveryTime: number,
      rating?: number | null,
      address: string,
      lat: number,
      lng: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    details?: string | null,
    subtotal?: number | null,
    total: number,
    status: OrderStatus,
    OrderDishes?:  {
      __typename: "ModelOrderDishConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    orderRestaurantId?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      userID: string,
      details?: string | null,
      subtotal?: number | null,
      total: number,
      status: OrderStatus,
      createdAt: string,
      updatedAt: string,
      orderRestaurantId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByUserIDQuery = {
  ordersByUserID?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      userID: string,
      details?: string | null,
      subtotal?: number | null,
      total: number,
      status: OrderStatus,
      createdAt: string,
      updatedAt: string,
      orderRestaurantId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBasketDishQueryVariables = {
  id: string,
};

export type GetBasketDishQuery = {
  getBasketDish?:  {
    __typename: "BasketDish",
    id: string,
    quantity: number,
    basketID: string,
    Dish:  {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    basketDishDishId: string,
  } | null,
};

export type ListBasketDishesQueryVariables = {
  filter?: ModelBasketDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBasketDishesQuery = {
  listBasketDishes?:  {
    __typename: "ModelBasketDishConnection",
    items:  Array< {
      __typename: "BasketDish",
      id: string,
      quantity: number,
      basketID: string,
      createdAt: string,
      updatedAt: string,
      basketDishDishId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BasketDishesByBasketIDQueryVariables = {
  basketID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBasketDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BasketDishesByBasketIDQuery = {
  basketDishesByBasketID?:  {
    __typename: "ModelBasketDishConnection",
    items:  Array< {
      __typename: "BasketDish",
      id: string,
      quantity: number,
      basketID: string,
      createdAt: string,
      updatedAt: string,
      basketDishDishId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBasketQueryVariables = {
  id: string,
};

export type GetBasketQuery = {
  getBasket?:  {
    __typename: "Basket",
    id: string,
    BasketDishes?:  {
      __typename: "ModelBasketDishConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBasketsQueryVariables = {
  filter?: ModelBasketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBasketsQuery = {
  listBaskets?:  {
    __typename: "ModelBasketConnection",
    items:  Array< {
      __typename: "Basket",
      id: string,
      userID: string,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BasketsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBasketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BasketsByUserIDQuery = {
  basketsByUserID?:  {
    __typename: "ModelBasketConnection",
    items:  Array< {
      __typename: "Basket",
      id: string,
      userID: string,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BasketsByRestaurantIDQueryVariables = {
  restaurantID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBasketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BasketsByRestaurantIDQuery = {
  basketsByRestaurantID?:  {
    __typename: "ModelBasketConnection",
    items:  Array< {
      __typename: "Basket",
      id: string,
      userID: string,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    name: string,
    number: string,
    address: string,
    lat: number,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      nextToken?: string | null,
    } | null,
    lng: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      sub: string,
      name: string,
      number: string,
      address: string,
      lat: number,
      lng: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDishQueryVariables = {
  id: string,
};

export type GetDishQuery = {
  getDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    image: string,
    description: string,
    price: number,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDishesQueryVariables = {
  filter?: ModelDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDishesQuery = {
  listDishes?:  {
    __typename: "ModelDishConnection",
    items:  Array< {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DishesByRestaurantIDQueryVariables = {
  restaurantID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DishesByRestaurantIDQuery = {
  dishesByRestaurantID?:  {
    __typename: "ModelDishConnection",
    items:  Array< {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRestaurantQueryVariables = {
  id: string,
};

export type GetRestaurantQuery = {
  getRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    image: string,
    deliveryFee: number,
    minDeliveryTime: number,
    maxDeliveryTime: number,
    rating?: number | null,
    address: string,
    lat: number,
    lng: number,
    Dishes?:  {
      __typename: "ModelDishConnection",
      nextToken?: string | null,
      items:  Array< {
        __typename: "Dish",
        id: string,
        name: string,
        image: string,
        description: string,
        price: number,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRestaurantsQueryVariables = {
  filter?: ModelRestaurantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRestaurantsQuery = {
  listRestaurants?:  {
    __typename: "ModelRestaurantConnection",
    items:  Array< {
      __typename: "Restaurant",
      id: string,
      name: string,
      image: string,
      deliveryFee: number,
      minDeliveryTime: number,
      maxDeliveryTime: number,
      rating?: number | null,
      address: string,
      lat: number,
      lng: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateOrderDishSubscriptionVariables = {
  filter?: ModelSubscriptionOrderDishFilterInput | null,
};

export type OnCreateOrderDishSubscription = {
  onCreateOrderDish?:  {
    __typename: "OrderDish",
    id: string,
    quantity: number,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
    orderDishDishId?: string | null,
  } | null,
};

export type OnUpdateOrderDishSubscriptionVariables = {
  filter?: ModelSubscriptionOrderDishFilterInput | null,
};

export type OnUpdateOrderDishSubscription = {
  onUpdateOrderDish?:  {
    __typename: "OrderDish",
    id: string,
    quantity: number,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
    orderDishDishId?: string | null,
  } | null,
};

export type OnDeleteOrderDishSubscriptionVariables = {
  filter?: ModelSubscriptionOrderDishFilterInput | null,
};

export type OnDeleteOrderDishSubscription = {
  onDeleteOrderDish?:  {
    __typename: "OrderDish",
    id: string,
    quantity: number,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
    orderDishDishId?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    Restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      image: string,
      deliveryFee: number,
      minDeliveryTime: number,
      maxDeliveryTime: number,
      rating?: number | null,
      address: string,
      lat: number,
      lng: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    details?: string | null,
    subtotal?: number | null,
    total: number,
    status: OrderStatus,
    OrderDishes?:  {
      __typename: "ModelOrderDishConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    orderRestaurantId?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    Restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      image: string,
      deliveryFee: number,
      minDeliveryTime: number,
      maxDeliveryTime: number,
      rating?: number | null,
      address: string,
      lat: number,
      lng: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    details?: string | null,
    subtotal?: number | null,
    total: number,
    status: OrderStatus,
    OrderDishes?:  {
      __typename: "ModelOrderDishConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    orderRestaurantId?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    Restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      image: string,
      deliveryFee: number,
      minDeliveryTime: number,
      maxDeliveryTime: number,
      rating?: number | null,
      address: string,
      lat: number,
      lng: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    details?: string | null,
    subtotal?: number | null,
    total: number,
    status: OrderStatus,
    OrderDishes?:  {
      __typename: "ModelOrderDishConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    orderRestaurantId?: string | null,
  } | null,
};

export type OnCreateBasketDishSubscriptionVariables = {
  filter?: ModelSubscriptionBasketDishFilterInput | null,
};

export type OnCreateBasketDishSubscription = {
  onCreateBasketDish?:  {
    __typename: "BasketDish",
    id: string,
    quantity: number,
    basketID: string,
    Dish:  {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    basketDishDishId: string,
  } | null,
};

export type OnUpdateBasketDishSubscriptionVariables = {
  filter?: ModelSubscriptionBasketDishFilterInput | null,
};

export type OnUpdateBasketDishSubscription = {
  onUpdateBasketDish?:  {
    __typename: "BasketDish",
    id: string,
    quantity: number,
    basketID: string,
    Dish:  {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    basketDishDishId: string,
  } | null,
};

export type OnDeleteBasketDishSubscriptionVariables = {
  filter?: ModelSubscriptionBasketDishFilterInput | null,
};

export type OnDeleteBasketDishSubscription = {
  onDeleteBasketDish?:  {
    __typename: "BasketDish",
    id: string,
    quantity: number,
    basketID: string,
    Dish:  {
      __typename: "Dish",
      id: string,
      name: string,
      image: string,
      description: string,
      price: number,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    basketDishDishId: string,
  } | null,
};

export type OnCreateBasketSubscriptionVariables = {
  filter?: ModelSubscriptionBasketFilterInput | null,
};

export type OnCreateBasketSubscription = {
  onCreateBasket?:  {
    __typename: "Basket",
    id: string,
    BasketDishes?:  {
      __typename: "ModelBasketDishConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBasketSubscriptionVariables = {
  filter?: ModelSubscriptionBasketFilterInput | null,
};

export type OnUpdateBasketSubscription = {
  onUpdateBasket?:  {
    __typename: "Basket",
    id: string,
    BasketDishes?:  {
      __typename: "ModelBasketDishConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBasketSubscriptionVariables = {
  filter?: ModelSubscriptionBasketFilterInput | null,
};

export type OnDeleteBasketSubscription = {
  onDeleteBasket?:  {
    __typename: "Basket",
    id: string,
    BasketDishes?:  {
      __typename: "ModelBasketDishConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    name: string,
    number: string,
    address: string,
    lat: number,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      nextToken?: string | null,
    } | null,
    lng: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    name: string,
    number: string,
    address: string,
    lat: number,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      nextToken?: string | null,
    } | null,
    lng: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    name: string,
    number: string,
    address: string,
    lat: number,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      nextToken?: string | null,
    } | null,
    lng: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDishSubscriptionVariables = {
  filter?: ModelSubscriptionDishFilterInput | null,
};

export type OnCreateDishSubscription = {
  onCreateDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    image: string,
    description: string,
    price: number,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDishSubscriptionVariables = {
  filter?: ModelSubscriptionDishFilterInput | null,
};

export type OnUpdateDishSubscription = {
  onUpdateDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    image: string,
    description: string,
    price: number,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDishSubscriptionVariables = {
  filter?: ModelSubscriptionDishFilterInput | null,
};

export type OnDeleteDishSubscription = {
  onDeleteDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    image: string,
    description: string,
    price: number,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
};

export type OnCreateRestaurantSubscription = {
  onCreateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    image: string,
    deliveryFee: number,
    minDeliveryTime: number,
    maxDeliveryTime: number,
    rating?: number | null,
    address: string,
    lat: number,
    lng: number,
    Dishes?:  {
      __typename: "ModelDishConnection",
      nextToken?: string | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
};

export type OnUpdateRestaurantSubscription = {
  onUpdateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    image: string,
    deliveryFee: number,
    minDeliveryTime: number,
    maxDeliveryTime: number,
    rating?: number | null,
    address: string,
    lat: number,
    lng: number,
    Dishes?:  {
      __typename: "ModelDishConnection",
      nextToken?: string | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
};

export type OnDeleteRestaurantSubscription = {
  onDeleteRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    image: string,
    deliveryFee: number,
    minDeliveryTime: number,
    maxDeliveryTime: number,
    rating?: number | null,
    address: string,
    lat: number,
    lng: number,
    Dishes?:  {
      __typename: "ModelDishConnection",
      nextToken?: string | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
