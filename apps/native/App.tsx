import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigatior from './src/navigation';
import { Amplify, Auth, Hub } from 'aws-amplify';
// import SignInScreen from './src/screens/SignInScreen';
import awsmobile from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
// i don't need with authenticator custom signup screen
// import { signUpConfig } from './utils/signUp';
// import OrderContextProvider from './src/context/OrderContext';
// import { syncRestaurants } from './src/graphql/queries';
// import { GraphQLQuery } from '@aws-amplify/api';
import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { ISignUpResult } from 'amazon-cognito-identity-js';
import SigninScreen from './src/screens/Auth/StartUp';
import SignUpScreen from './src/screens/Auth/GetStarted';
import RootNavigator from './src/navigation';
// import { GetBlogQuery } from './src/API';
// import { SyncRestaurantsQuery } from './src/API';

Amplify.configure({ ...awsmobile, Analytics: { disabled: true } });
const App = () => {
  const [user, setUser] = useState<ISignUpResult | null>(null);
  Hub.listen('auth', e => {
    console.log('dadaa', e);
    // ova slusha koga ke se povika nekoja mutacija so auth.
  });
  useEffect(() => {
    Auth.signOut();
  }, []);
  // useEffect(() => {
  //   Auth.signIn({
  //     username: 'johndoe@example.com',
  //     password: 'password123',
  //   })
  //     .then(data => setUser(data))
  //     .catch(err => console.error(err));

  // Auth.signUp({
  //   username: 'bojanangjeleski@gmail.com',
  //   password: 'password123',
  //   attributes: {
  //     email: 'bojanangjeleski@gmail.com',
  //   },
  // })
  //   .then(data => setUser(data))
  //   .catch(error => console.log('err->', error.message));
  // }, []);

  // console.log('user?', user);
  return (
    <NavigationContainer>
      <RootNavigatior />
      {/* <SignInScreen /> */}
      <StatusBar style="dark" />
    </NavigationContainer>
  );
};

export default App;
