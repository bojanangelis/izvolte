import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
// import RootNavigatior from './src/navigation';
import { Amplify, Auth } from 'aws-amplify';
// import SignInScreen from './src/screens/SignInScreen';
import awsmobile from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
// import { signUpConfig } from './utils/signUp';
// import OrderContextProvider from './src/context/OrderContext';
// import { syncRestaurants } from './src/graphql/queries';
// import { GraphQLQuery } from '@aws-amplify/api';
import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { ISignUpResult } from 'amazon-cognito-identity-js';
import SigninScreen from './src/screens/Auth/SigninScreen';
// import { GetBlogQuery } from './src/API';
// import { SyncRestaurantsQuery } from './src/API';

Amplify.configure({ ...awsmobile, Analytics: { disabled: true } });
const App = () => {
  const [user, setUser] = useState<ISignUpResult | null>(null);
  useEffect(() => {
    Auth.signIn({
      username: 'johndoe@example.com',
      password: 'password123',
    })
      .then(data => setUser(data))
      .catch(err => console.error(err));

    // Auth.signUp({
    //   username: 'bojanangjeleski@gmail.com',
    //   password: 'password123',
    //   attributes: {
    //     email: 'bojanangjeleski@gmail.com',
    //   },
    // })
    //   .then(data => setUser(data))
    //   .catch(error => console.log('err->', error.message));
  }, []);
  console.log(user);
  return (
    <View>
      <SigninScreen />

      <StatusBar style="dark" />
    </View>
  );
};

export default App;
