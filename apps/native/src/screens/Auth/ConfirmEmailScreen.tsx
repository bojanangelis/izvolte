import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { AntDesign } from '@expo/vector-icons';
import SocialSignInButtons from '../../components/SocialSigninButtons';
interface Params {
  email: string;
}
const ConfirmEmailScreen = () => {
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');

  const navigation = useNavigation();
  const email = (route?.params as Params)?.email ?? '';
  const onConfirmPressed = async () => {
    try {
      setLoading(true);
      const data = await Auth.confirmSignUp(email, code);
      console.log(data);
      //@ts-ignore
      navigation.navigate('HomeTabs');
    } catch (e: any) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };

  const onResendPress = async () => {
    try {
      setLoading(true);
      //@ts-ignore
      await Auth.resendSignUp(route?.params?.email);
      Alert.alert('Success', 'Code was resent to your email');
    } catch (e: any) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };

  return (
    <View style={styles.rootView}>
      <Text style={styles.titleView}>Confirm your email</Text>
      <View style={styles.inputContainerView}>
        <Text style={styles.textInputLabel}>Enter your code</Text>
        <TextInput
          style={styles.inputContainer}
          value={code}
          onChangeText={(text: string) => setCode(text)}
          placeholder="Type your code"
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <TouchableOpacity
        disabled={loading}
        onPress={onConfirmPressed}
        style={styles.buttonNext}
      >
        <Text> </Text>
        <Text style={styles.buttonNextText}>Confirm</Text>
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
        <Text
          style={styles.link}
          onPress={() => console.log('navigate on terms of use')}
        >
          Terms of Use
        </Text>{' '}
        and{' '}
        <Text
          style={styles.link}
          onPress={() => console.log('navigate on Privacy Policy.')}
        >
          Privacy Policy.
        </Text>
      </Text>
      <View style={styles.dividerContainer}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider}></View>
      </View>
      <SocialSignInButtons signInButton />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputLabel: {
    fontWeight: '500',
    color: 'black',
    marginBottom: 5,
  },
  inputContainerView: {
    paddingVertical: 10,
  },

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
    marginVertical: 10,
  },
  buttonNextText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  rootView: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    paddingTop: '25%',
  },
  titleView: {
    fontSize: 20,
    paddingBottom: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  inputContainer: {
    backgroundColor: '#EEEEEE',
    width: '100%',
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

export default ConfirmEmailScreen;
