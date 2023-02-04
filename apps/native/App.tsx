import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigatior from './src/navigation';
import { Amplify } from 'aws-amplify';
import awsmobile from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { signUpConfig } from './utils/signUp';

Amplify.configure(awsmobile);

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigatior />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
};

export default withAuthenticator(App, { signUpConfig });
