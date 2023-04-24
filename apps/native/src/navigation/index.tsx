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
import {
  Foundation,
  FontAwesome5,
  MaterialIcons,
  Feather,
} from '@expo/vector-icons';
import BasketScreen from '../screens/BasketScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import Profile from '../screens/ProfileScreen';
import { useState, useEffect, useCallback } from 'react';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import ConfirmEmailScreen from '../screens/Auth/ConfirmEmailScreen';
import StartUp from '../screens/Auth/StartUp';
import GetStarted from '../screens/Auth/GetStarted';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/Auth/NewPasswordScreen';
import { useDispatch, useSelector } from 'react-redux';
import {
  authUserData,
  login,
  logout,
  UserState,
} from '../../features/authUser';
import LoadingScreen from '../screens/LoadingScreen';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListUsersQuery } from '../API';
import { listUsers } from '../graphql/queries';
import { addDbUser, dbUserData, User } from '../../features/dbUser';
import SearchScreen from '../screens/SearchScreen';
import ConfirmNewCodeForPasswordReset from '../screens/Auth/ConfirmNewCodeForPasswordReset';

export type RootStackParamList = {
  HomeTabs: undefined;
  AuthStackNavigator: undefined;
  loadingStack: undefined;
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
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const userAuthentication = useSelector(authUserData);

  // da imame nekoj test tuka kade shto ako dbUser e poln a userAuthentication e prazen
  // daj neshto da se desili ili obratno, just to be safe.
  const dbUser = useSelector(dbUserData);
  // console.log('dbUSER-->', dbUser);
  // console.log('userAuthentication->>', userAuthentication?.sub);

  const dispatchLogin = useCallback(
    (user: UserState['user']) =>
      dispatch(
        login({
          email: user?.email ?? '',
          sub: user?.sub ?? '',
          emailAuthenticated: user?.emailAuthenticated ?? false,
        }),
      ),
    [dispatch],
  );
  const dispatchDbUser = useCallback(
    (dbUser: User) => {
      dispatch(addDbUser({ dbUser }));
    },
    [dispatch],
  );

  // useEffect(() => {
  //   const checkAuthStatus = async () => {
  //     try {
  //       const user = await Auth.currentAuthenticatedUser({ bypassCache: true });
  //       dispatchLogin({
  //         email: user?.attributes?.email ?? '',
  //         emailAuthenticated: user?.attributes?.email_verified ?? false,
  //         sub: user?.attributes?.sub ?? '',
  //       });
  //     } catch (err) {
  //       console.error('Error fetching current authenticated user:', err);
  //       dispatch(logout);
  //     }
  //     setLoading(false);
  //   };
  //   checkAuthStatus();
  // }, [dispatch, dispatchLogin]);

  // useEffect(() => {
  //   const catchUser = async () => {
  //     if (userAuthentication?.sub) {
  //       console.log('usersub->', userAuthentication?.sub);
  //       const data = await API.graphql<GraphQLQuery<ListUsersQuery>>(
  //         graphqlOperation(listUsers, {
  //           filter: {
  //             sub: {
  //               eq: userAuthentication.sub,
  //             },
  //           },
  //         }),
  //       );
  //       if (data.data?.listUsers?.items[0])
  //         dispatchDbUser(data.data?.listUsers?.items[0]);
  //     }
  //   };
  //   catchUser().catch(e => console.error(e));
  // }, [userAuthentication?.sub]);

  if (!loading)
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loadingStack" component={LoadingStackNavigator} />
      </Stack.Navigator>
    );

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {userAuthentication ? (
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            headerShown: false,
          }}
        />
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
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile as any}
        options={{
          headerShown: false,
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
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
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
    <OrdersStack.Navigator screenOptions={{ headerShown: false }}>
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
      <AuthStack.Screen
        name="ConfirmNewCodeForPasswordReset"
        component={ConfirmNewCodeForPasswordReset}
      />
      <AuthStack.Screen name="NewPassword" component={NewPasswordScreen} />
    </AuthStack.Navigator>
  );
};

const LoadingStack = createNativeStackNavigator();
const LoadingStackNavigator = () => {
  return (
    <LoadingStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="loadingStack" component={LoadingScreen} />
    </LoadingStack.Navigator>
  );
};

export default RootNavigator;
