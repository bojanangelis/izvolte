import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BasketScreen from './src/screens/BasketScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import OrderDetailsScreen from './src/screens/OrderDetailsScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';

export default function Native() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsScreen /> */}
      {/* <DishDetailsScreen /> */}
      {/* <BasketScreen /> */}
      {/* <OrdersScreen /> */}
      <OrderDetailsScreen />
      {/* ova e statusot od bateirjata i od mrezata... */}
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
