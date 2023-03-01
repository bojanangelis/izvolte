import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigatior from './src/navigation';
import { Amplify } from 'aws-amplify';
// import SignInScreen from './src/screens/SignInScreen';
import awsmobile from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { signUpConfig } from './utils/signUp';
import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import AuthContextProvider from './src/context/AuthContext';

Amplify.configure({ ...awsmobile, Analytics: { disabled: true } });
const App = () => {
  // useEffect(() => {
  // Auth.currentAuthenticatedUser({ bypassCache: true }).then(user =>
  // setAuthUser(user),
  // console.log(user)
  // );
  // }, []);

  //@ts-ignore
  // console.log(authUser?.attributes as never);
  //   console.log(authUser?.attributes?.sub as never);

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <RootNavigatior />
      </AuthContextProvider>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
};

export default withAuthenticator(App, { signUpConfig });
