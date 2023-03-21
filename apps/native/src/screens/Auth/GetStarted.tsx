import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
// import CustomButton from '../../components/CustomButton';
// import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/core';
import { Auth } from 'aws-amplify';
import SocialSignInButtons from '../../components/SocialSigninButtons';
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';
import { AntDesign } from '@expo/vector-icons';

const GetStarted = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const onRegisterPressed = async (data: any) => {
    const { username, password, email, name } = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, name, preferred_username: username },
      });
      //@ts-ignore
      navigation.navigate('ConfirmEmail', { username });
    } catch (e: any) {
      Alert.alert('Oops', e.message);
    }
  };

  const onSignInPress = () => {
    //@ts-ignore
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };
  const handlePhoneNumberChange = () => {
    if (phoneNumber) {
      // Initialize PhoneNumberUtil with default region
      const phoneUtil = PhoneNumberUtil.getInstance();
      try {
        // Parse phone number with country code
        const parsedNumber = phoneUtil.parse(phoneNumber, 'MK');

        // Format phone number in E.164 format
        const formattedNumber = phoneUtil.format(
          parsedNumber,
          PhoneNumberFormat.E164,
        );
        // Update state with formatted phone number
        setPhoneNumber(formattedNumber);
      } catch (error) {
        // Invalid phone number, update state with original input
        setPhoneNumber(phoneNumber);
      }
    }
  };
  console.warn('this is my phone', phoneNumber);
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Enter your phone number</Text>
      <TextInput
        style={styles.phoneNumberInput}
        value={phoneNumber}
        placeholder="+389 70 555 555"
        onChangeText={(text: string) => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <TouchableOpacity
        //@ts-ignore
        onPress={handlePhoneNumberChange}
        style={styles.buttonNext}
      >
        <Text> </Text>
        <Text style={styles.buttonNextText}>Next</Text>
        <AntDesign
          style={styles.arrowNext}
          name="arrowright"
          size={22}
          color="white"
        />
      </TouchableOpacity>
      <Text style={styles.text}>
        By proceeding, you consent to get calls, Whatsapp or SMS messages,
        including by automated means, from izvolte and its affiliates to the
        number provided.{' '}
        <Text style={styles.link} onPress={onTermsOfUsePressed}>
          Terms of Use
        </Text>{' '}
        and{' '}
        <Text style={styles.link} onPress={onPrivacyPressed}>
          Privacy Policy.
        </Text>
      </Text>
      <View style={styles.dividerContainer}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider}></View>
      </View>
      <SocialSignInButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  dividerContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  dividerText: {
    textAlign: 'center',
    color: 'gray',
    paddingHorizontal: 5,
  },
  divider: {
    width: '45%',
    borderTopWidth: 1,
    paddingVertical: 10,
    marginVertical: 10,
  },
  arrowNext: {},
  buttonNext: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 2,
    padding: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  buttonNextText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  root: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    paddingTop: '25%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  phoneNumberInput: {
    backgroundColor: '#EEEEEE',
    width: '100%',
    marginVertical: 20,
    padding: 20,
    borderRadius: 2,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default GetStarted;
