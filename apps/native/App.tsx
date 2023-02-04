import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigatior from './src/navigation';
import { Amplify } from 'aws-amplify';
import awsmobile from './src/aws-exports';

Amplify.configure(awsmobile);

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigatior />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
};

export default App;
