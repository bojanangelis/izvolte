import React from 'react';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';

interface SocialSigninButtonsInterface {
  signInButton?: boolean;
}
const SocialSignInButtons = ({
  signInButton,
}: SocialSigninButtonsInterface) => {
  const navigation = useNavigation();

  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
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
        <CustomButton
          text="Sign up with email"
          onPress={onEmail}
          bgColor="white"
          fgColor="black"
          border="black"
        />
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
