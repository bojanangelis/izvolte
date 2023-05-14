import React, { useCallback, useEffect, useState } from 'react';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Alert, View } from 'react-native';
import { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { useDispatch } from 'react-redux';
import { UserState, login, logout } from '../../features/authUser';

interface SocialSigninButtonsInterface {
  signInButton?: boolean;
}
const SocialSignInButtons = ({
  signInButton,
}: SocialSigninButtonsInterface) => {
  // const [user, setUser] = useState(null);
  // const [customSet, setCustomState] = useState();
  // useEffect(() => {
  //   const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
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

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const dispatchLogin = useCallback(
    (user: UserState['user']) =>
      dispatch(
        login({
          email: user?.email ?? '',
          sub: user?.sub ?? '',
          emailAuthenticated: user?.emailAuthenticated ?? false,
        }),
      ),
    [dispatch],
  );
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = async () => {
    await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
  };

  const onSignIn = () => {
    console.warn('signIn');
    //@ts-ignore
    navigation.navigate('GetStarted');
  };

  const onEmail = () => {
    console.warn('onEmail');
    //@ts-ignore
    navigation.navigate('SignUpScreen');
  };

  return (
    <>
      {signInButton ? (
        <CustomButton
          text="Sign in"
          onPress={onSignIn}
          bgColor="white"
          fgColor="black"
          border="black"
        />
      ) : (
        <View>
          <CustomButton
            text="Sign up with email"
            onPress={onEmail}
            bgColor="white"
            fgColor="black"
            border="black"
          />
          <CustomButton
            text="Continue with google"
            onPress={onSignInGoogle}
            bgColor="white"
            image={require('../../assets/googleLogo.png')}
            fgColor="black"
            border="black"
          />
        </View>
      )}
      {/* <CustomButton
        text="Continue with facebook"
        onPress={onSignInFacebook}
        bgColor="white"
        fgColor="black"
        border="black"
        image={require('../../assets/facebook.png')}
      />
      <CustomButton
        text="Continue with google"
        onPress={onSignInGoogle}
        bgColor="white"
        image={require('../../assets/googleLogo.png')}
        fgColor="black"
        border="black"
      /> */}
    </>
  );
};

export default SocialSignInButtons;
