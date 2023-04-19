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
import { AntDesign } from '@expo/vector-icons';
import GoBackComponent from '../../components/GoBackIcon';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const onSendPressed = async () => {
    if (!email) return;
    try {
      setLoading(true);
      const authData = await Auth.forgotPassword(email);
      if (authData)
        //@ts-ignore
        navigation.navigate('ConfirmNewCodeForPasswordReset', { email: email });
    } catch (e: any) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };

  const onSignInPress = () => {
    // @ts-ignore
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.rootView}>
      <Text style={styles.titleView}>Reset your Izvolte password</Text>
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
        />
      </View>

      <TouchableOpacity
        disabled={loading || !email}
        onPress={onSendPressed}
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
      <GoBackComponent />
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
  arrowNext: {},
  buttonNext: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#f7d639',
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
});

export default ForgotPasswordScreen;
