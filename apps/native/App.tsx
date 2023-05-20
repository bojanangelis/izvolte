import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigatior from './src/navigation';
import { Amplify, Auth, Hub } from 'aws-amplify';
import awsmobile from './src/aws-exports';
import { Provider } from 'react-redux';
import store from './store';
import { Button, Platform, SafeAreaView, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';
import { withOAuth } from 'aws-amplify-react-native';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';

const App = () => {
  // const url = Linking.useURL();
  // console.log('url', url);
  // const isLocalhost = Boolean(__DEV__);
  // Assuming you have two redirect URIs, and the first is for localhost and second is for production
  // const [localRedirectSignIn, productionRedirectSignIn] =
  //   awsmobile.oauth.redirectSignIn.split(',');
  // const [localRedirectSignOut, productionRedirectSignOut] =
  //   awsmobile.oauth.redirectSignOut.split(',');
  // const [user, setUser] = useState(null);
  // const [customState, setCustomState] = useState(null);
  // const urlOpener = async (url: any, redirectUrl: any) => {
  //   const data = await WebBrowser.openAuthSessionAsync(url, redirectUrl);
  //   console.log('url', url);
  //   console.log('redirectUrl', redirectUrl);

  //   console.log('data?.url -->', data?.url);
  //   console.log('data-->>', data);
  //   if (data.type === 'success' && Platform.OS === 'ios') {
  //     WebBrowser.dismissBrowser();
  //     return Linking.openURL(data.url);
  //   }
  // };
  // useEffect(() => {
  //   Auth.signOut();
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
  //     console.log(data);
  //     switch (event) {
  //       case 'signIn':
  //         setUser(data);
  //         break;
  //       case 'signOut':
  //         setUser(null);
  //         break;
  //       case 'customOAuthState':
  //         setCustomState(data);
  //     }
  //   });
  //   Auth.currentAuthenticatedUser()
  //     .then(currentUser => setUser(currentUser))
  //     .catch(() => console.log('Not signed in'));
  //   return unsubscribe;
  // }, []);

  // Amplify.configure({
  //   ...awsmobile,
  //   Analytics: { disabled: true },
  //   oauth: {
  //     ...awsmobile.oauth,
  //     redirectSignIn: 'exposchemeappname://',
  //     redirectSignOut: 'exposchemeappname://',
  //     urlOpener,
  //   },
  // });
  const amplifyConfig = {
    ...awsmobile,
    oauth: {
      ...awsmobile.oauth,
      urlOpener: async (url: string, redirectUrl: string) => {
        // @ts-ignore On Expo, use WebBrowser.openAuthSessionAsync to open the Hosted UI pages.
        const { type, url: newUrl } = await WebBrowser.openAuthSessionAsync(
          url,
          redirectUrl,
        );

        if (type === 'success') {
          await WebBrowser.dismissBrowser();

          if (Platform.OS === 'ios') {
            return Linking.openURL(newUrl);
          }
        }
      },
      options: {
        // Indicates if the data collection is enabled to support Cognito advanced security features. By default, this flag is set to true.
        AdvancedSecurityDataCollectionFlag: true,
      },
    },
  };
  const expoScheme = 'exposchemeappname://';
  // Technically you need to pass the correct redirectUrl to the web browser.
  let redirectUrl = Linking.makeUrl();
  if (redirectUrl.startsWith('exp://1')) {
    // console.log('daaa->');
    // handle simulator(localhost) and device(Lan)
    redirectUrl = redirectUrl;
  } else if (redirectUrl === expoScheme) {
    // console.log('ova e ');
    // dont do anything
  } else {
    // handle the expo client
    redirectUrl = Linking.makeUrl();
  }
  amplifyConfig.oauth.redirectSignIn = redirectUrl;
  amplifyConfig.oauth.redirectSignOut = redirectUrl;

  Amplify.configure(amplifyConfig);
  return (
    <Provider store={store}>
      {/* TESTING */}
      {/* <SafeAreaView> 
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
      </SafeAreaView> */}
      <NavigationContainer>
        <RootNavigatior />
        <StatusBar style="dark" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
