import {
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import React, { useRef, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import PhoneInput from 'react-native-phone-number-input';
import KeyboardAvoidingInput from '../../components/CustomInput';

const SigninScreen = () => {
  const [inputPhoneNumber, setInputPhoneNumber] = useState<string>('');
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const handleLogin = () => {
    const checkValid = phoneInput.current?.isValidNumber(value);
    setShowMessage(true);
    setValid(checkValid ? checkValid : false);
    console.log(valid);
  };
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
        {/* <KeyboardAvoidingInput
          phoneInput={phoneInput}
          value={value}
          handleValue={setValue}
          setFormattedValue={setFormattedValue}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signInContainer: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
  },
  signInContainerLogo: {
    position: 'absolute',
    top: 110,
    left: 10,
    zIndex: 999,
    fontSize: 36,
    fontWeight: '700',
    fontStyle: 'normal',
    letterSpacing: 2,
    color: 'black',
  },
  logo: {
    width: '100%',
    zIndex: 1,
  },
  inputContainer: {
    padding: 20,
  },
  inputContainerText: {
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: '600',
    textAlign: 'left',
    color: 'black',
  },
});
