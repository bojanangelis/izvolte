import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import RestaurantItem from './src/components/RestaurantItem';
import restaurants from './assets/data/restaurants.json';

export default function Native() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
