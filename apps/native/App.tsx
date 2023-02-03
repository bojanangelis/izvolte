import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigatior from './src/navigation';

export default function Native() {
  // here i need to implement aws!
  return (
    <NavigationContainer>
      <RootNavigatior />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
