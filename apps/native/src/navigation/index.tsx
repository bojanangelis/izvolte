import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator,
  //wokring on thisone!
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import OrdersScreen from '../screens/OrdersScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import BasketScreen from '../screens/BasketScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import Profile from '../screens/ProfileScreen';
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import ConfirmEmailScreen from '../screens/Auth/ConfirmEmailScreen';
import StartUp from '../screens/Auth/StartUp';
import GetStarted from '../screens/Auth/GetStarted';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';

export type RootStackParamList = {
  HomeTabs: undefined;
  AuthStackNavigator: undefined;
  Restaurant: {
    id: string;
  };
  HomeStackNavigator: undefined;
  Dish: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [user, setUser] = useState(null);
  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  console.log(user);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      ) : (
        <Stack.Screen
          name="AuthStackNavigator"
          component={AuthStackNavigator}
        />
      )}
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: 'white' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen
        name="Restaurant"
        component={RestaurantDetailsScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
      <HomeStack.Screen name="Basket" component={BasketScreen} />
    </HomeStack.Navigator>
  );
};

const OrdersStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
      <OrdersStack.Screen name="Order" component={OrderDetailsScreen} />
    </OrdersStack.Navigator>
  );
};

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="StartUp" component={StartUp} />
      <AuthStack.Screen name="GetStarted" component={GetStarted} />
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <AuthStack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};
export default RootNavigator;
