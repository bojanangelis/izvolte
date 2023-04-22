import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigatior from './src/navigation';
import { Amplify, Auth, Hub } from 'aws-amplify';
import awsmobile from './src/aws-exports';
import { Provider } from 'react-redux';
import store from './store';
import { Button, Platform, SafeAreaView, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

const App = () => {
  const isLocalhost = Boolean(__DEV__);
  // Assuming you have two redirect URIs, and the first is for localhost and second is for production
  const [localRedirectSignIn, productionRedirectSignIn] =
    awsmobile.oauth.redirectSignIn.split(',');

  const [localRedirectSignOut, productionRedirectSignOut] =
    awsmobile.oauth.redirectSignOut.split(',');

  const [user, setUser] = useState(null);
  const [customState, setCustomState] = useState(null);
  async function urlOpener(url: any, redirectUrl: any) {
    //@ts-ignore
    const data = await WebBrowser.openAuthSessionAsync(url, redirectUrl);
    console.log('async data-->', data);
    if (data.type === 'success' && Platform.OS === 'ios') {
      WebBrowser.dismissBrowser();
      //@ts-ignore
      return Linking.openURL(data.url);
    }
  }
  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
      console.log(data);
      switch (event) {
        case 'signIn':
          setUser(data);
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'customOAuthState':
          setCustomState(data);
      }
    });

    Auth.currentAuthenticatedUser()
      .then(currentUser => setUser(currentUser))
      .catch(() => console.log('Not signed in'));

    return unsubscribe;
  }, []);

  Amplify.configure({
    ...awsmobile,
    Analytics: { disabled: true },
    oauth: {
      ...awsmobile.oauth,
      redirectSignIn: 'myapp://',
      redirectSignOut: 'myapp://',
      urlOpener,
    },
  });
  console.log('user here-->', user);
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Button
          title="Open google"
          onPress={() =>
            Auth.federatedSignIn({
              provider: CognitoHostedUIIdentityProvider.Google,
            })
          }
        />
        <Button title="Open Hosted UI" onPress={() => Auth.federatedSignIn()} />
        <Button title="Sign Out" onPress={() => Auth.signOut()} />
        {/* @ts-ignore */}
        <Text>{user && user?.getUsername()}</Text>
      </SafeAreaView>
      {/* <NavigationContainer>
        <RootNavigatior />
        <StatusBar style="dark" />
      </NavigationContainer> */}
    </Provider>
  );
};

export default App;
