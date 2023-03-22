import React from 'react';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';

const SocialSignInButtons = () => {
  const navigation = useNavigation();

  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onEmail = () => {
    console.warn('onEmail');
    //@ts-ignore
    navigation.navigate('SignUpScreen');
  };

  return (
    <>
      <CustomButton
        text="Sign up with email"
        onPress={onEmail}
        bgColor="white"
        fgColor="black"
        border="black"
      />
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
