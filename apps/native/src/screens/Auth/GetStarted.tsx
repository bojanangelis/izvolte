import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Auth } from 'aws-amplify';
import SocialSignInButtons from '../../components/SocialSigninButtons';
import { AntDesign } from '@expo/vector-icons';

const GetStarted = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };
  const handleSignIn = async () => {
    try {
      setLoading(true);
      const authUser = await Auth.signIn(email, password);
      console.log('>>>>', authUser);
    } catch (err: any) {
      Alert.alert(err?.message);
    }
    setLoading(false);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Sign in with your izvolte account</Text>
      <View style={styles.inputContainerView}>
        <Text style={styles.textInputLabel}>Enter your email address</Text>
        <TextInput
          style={styles.inputContainer}
          value={email}
          onChangeText={(text: string) => setEmail(text)}
          placeholder="Type your email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
        />
      </View>
      <View style={styles.inputContainerView}>
        <Text style={styles.textInputLabel}>Enter your password</Text>
        <TextInput
          style={styles.inputContainer}
          value={password}
          placeholder="Type your password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text: string) => setPassword(text)}
          keyboardType="visible-password"
        />
      </View>
      <TouchableOpacity
        //@ts-ignore
        onPress={() => navigation.navigate('ForgotPassword')}
        style={styles.forgotPasswordButton}
      >
        <Text style={styles.forgotPasswordText}>Forgot password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={loading}
        onPress={handleSignIn}
        style={styles.buttonNext}
      >
        <Text> </Text>
        <Text style={styles.buttonNextText}>Sign in</Text>
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
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.viewIcon}
      >
        <AntDesign name="arrowleft" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewIcon: {
    position: 'absolute',
    left: 25,
    bottom: 50,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: 'gray',
  },
  forgotPasswordButton: {
    marginVertical: 10,
  },
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
  root: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    paddingTop: '25%',
  },
  title: {
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

export default GetStarted;
