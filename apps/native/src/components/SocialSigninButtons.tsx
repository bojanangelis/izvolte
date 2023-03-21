import React from 'react';
import CustomButton from './CustomButton';

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <>
      <CustomButton
        text="Continue with facebook"
        onPress={onSignInFacebook}
        bgColor="white"
        fgColor="black"
        border="black"
        image="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
      />
      <CustomButton
        text="Continue with google"
        onPress={onSignInGoogle}
        bgColor="white"
        image={
          'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png'
        }
        fgColor="black"
        border="black"
      />
      <CustomButton
        text="Continue with apple"
        onPress={onSignInApple}
        bgColor="white"
        fgColor="black"
        border="black"
        image="https://alchemyimmersive.com/wp-content/uploads/sites/4/2020/04/apple-logo-transparent.png"
      />
    </>
  );
};

export default SocialSignInButtons;
