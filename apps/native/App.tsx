import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigatior from './src/navigation';
import { Amplify } from 'aws-amplify';
// import SignInScreen from './src/screens/SignInScreen';
import awsmobile from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { signUpConfig } from './utils/signUp';
import { store } from './app/store';
import { Provider } from 'react-redux';

Amplify.configure({ ...awsmobile, Analytics: { disabled: true } });

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootNavigatior />
        {/* <SignInScreen /> */}
        <StatusBar style="dark" />
      </Provider>
    </NavigationContainer>
  );
};

export default withAuthenticator(App, { signUpConfig });
