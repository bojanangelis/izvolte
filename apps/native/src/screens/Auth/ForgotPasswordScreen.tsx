import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import GoBackComponent from '../../components/GoBackIcon';

const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSendPressed = async (data: any) => {
    try {
      await Auth.forgotPassword(data.username);
      //@ts-ignore
      navigation.navigate('NewPassword');
    } catch (e: any) {
      Alert.alert('Oops', e.message);
    }
  };

  const onSignInPress = () => {
    // @ts-ignore
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Reset password on your izvolte account</Text>
      <View style={styles.inputContainerView}>
        <Text style={styles.textInputLabel}>Enter your email address</Text>
        <TextInput
          style={styles.inputContainer}
          // value={data.email}
          // onChangeText={value => handleInput(value, 'email')}
          placeholder="Type your email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
        />
      </View>

      <TouchableOpacity
        //@ts-ignore
        // disabled={loading}
        // onPress={onRegisterPressed}
        style={styles.buttonNext}
      >
        <Text style={styles.buttonNextText}>Reset password</Text>
      </TouchableOpacity>
      <GoBackComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-start',
    flex: 1,
    padding: 20,
    width: '100%',
  },
  title: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  inputContainerView: {
    padding: 20,
    paddingVertical: 10,
    width: '100%',
  },
  textInputLabel: {
    fontWeight: '500',
    marginBottom: 5,
  },
  inputContainer: {
    backgroundColor: '#EEEEEE',
    width: '100%',
    // marginTop: 20,
    padding: 20,
    borderRadius: 2,
  },
  buttonNext: {
    alignItems: 'center',
    backgroundColor: '#f7d639',
    borderRadius: 2,

    padding: 14,
    marginVertical: 20,
  },
  buttonNextText: {
    color: 'white',
    fontSize: 19,
    letterSpacing: 1,
    fontWeight: '600',
  },
});

export default ForgotPasswordScreen;
