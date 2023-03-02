import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigatior from './src/navigation';
import { Amplify } from 'aws-amplify';
// import SignInScreen from './src/screens/SignInScreen';
import awsmobile from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { signUpConfig } from './utils/signUp';
import AuthContextProvider from './src/context/AuthContext';
import BasketContextProvider from './src/context/BasketContext';

Amplify.configure({ ...awsmobile, Analytics: { disabled: true } });
const App = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <BasketContextProvider>
          <RootNavigatior />
        </BasketContextProvider>
      </AuthContextProvider>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
};

export default withAuthenticator(App, { signUpConfig });
