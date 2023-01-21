import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';

export default function Native() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsScreen /> */}
      <DishDetailsScreen />
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
