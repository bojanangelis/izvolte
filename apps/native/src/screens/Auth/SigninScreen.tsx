import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import CustomInput from '../../components/CustomInput';
import PhoneInput from 'react-native-phone-number-input';

const SigninScreen = () => {
  const [inputPhoneNumber, setInputPhoneNumber] = useState<string>('');

  const handlePhoneNumber = (value: string) => {
    setInputPhoneNumber(value);
  };
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const handleLogin = () => {
    const checkValid = phoneInput.current?.isValidNumber(value);
    setShowMessage(true);
    setValid(checkValid ? checkValid : false);
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
        <View style={styles.phoneNumberContainer}>
          {/* <CustomInput
            style={styles.inputNumber}
            onChange={handlePhoneNumber}
            value={inputPhoneNumber}
          /> */}
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="MK"
            layout="first"
            onChangeText={text => {
              setValue(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />

          <TouchableOpacity onPress={handleLogin} style={styles.buttonNext}>
            <Text style={styles.inputButtonText}>next</Text>
            <Icon name="arrowright" size={20} color="#000000" />
          </TouchableOpacity>
          {showMessage && <Text style={styles.wrongInput}>Wrong input</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  signInContainer: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
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

  phoneNumberContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonNext: {
    marginHorizontal: 5,
    backgroundColor: 'whitesmoke',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },
  inputButtonText: {
    marginHorizontal: 1,
    fontWeight: '600',
  },
  wrongInput: {
    color: 'red',
    fontWeight: '600',
  },
});
