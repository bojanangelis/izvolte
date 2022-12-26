import { StyleSheet, View } from 'react-native';
import RestaurantItem from './src/components/RestaurantItem';
import restaurants from './assets/data/restaurants.json';

export default function Native() {
  return (
    <View style={styles.container}>
      <RestaurantItem restaurant={restaurants[0]} />
      <RestaurantItem restaurant={restaurants[1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
