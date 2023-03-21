import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import PhoneInput from 'react-native-phone-number-input';
import KeyboardAvoidingInput from '../../components/CustomInput';
import phoneUtil from 'google-libphonenumber';
import { Auth } from 'aws-amplify';

const SigninScreen = () => {
  const [inputPhoneNumber, setInputPhoneNumber] = useState<string>('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const handleLogin = () => {
    const checkValid = phoneInput.current?.isValidNumber(inputPhoneNumber);
    setShowMessage(true);
    setValid(checkValid ? checkValid : false);
  };

  const handleFormatedValue = async (data: any) => {
    // const response = await Auth.signIn(data.username, data.password)
    console.log(data);
  };
  useEffect(() => {
    handleFormatedValue({ username: 'da', password: 'daaa' });
  }, []);
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.signInContainer}>
      <Animatable.Image
        source={require('../../../assets/loginLogo.jpg')}
        animation="fadeIn"
        iterationCount={1}
        style={[styles.logo, { height: height * 0.7 }]}
      />
      <Animatable.Text
        animation="fadeIn"
        iterationCount={1}
        style={styles.signInContainerLogo}
      >
        Izvolte logo
      </Animatable.Text>
      <View style={styles.inputContainer}>
        <Animatable.Text
          animation="fadeIn"
          iterationCount={1}
          style={styles.inputContainerText}
        >
          Use your izvolte phone number to get started
        </Animatable.Text>
        <KeyboardAvoidingInput
          phoneInput={phoneInput}
          value={inputPhoneNumber}
          handleValue={setInputPhoneNumber}
          handleLogin={handleLogin}
        />
      </View>
    </SafeAreaView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  inputView: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginVertical: 10,
    zIndex: 999,
  },
  signInContainer: {
    height: '100%',
  },
  signInContainerLogo: {
    position: 'absolute',
    top: 110,
    left: 10,
    fontSize: 36,
    fontWeight: '700',
    fontStyle: 'normal',
    letterSpacing: 2,
    color: 'black',
  },
  logo: {
    width: '100%',
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputContainerText: {
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: '600',
    textAlign: 'left',
    color: 'black',
  },
  btnContainer: {
    textAlign: 'center',
  },
});
