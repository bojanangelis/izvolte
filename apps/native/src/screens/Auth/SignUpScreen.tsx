import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

interface FormData {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  name: string;
}
const SignUpScreen = () => {
  const [data, setData] = useState<FormData>({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    name: '',
  });
  const handleInput = (value: string, key: keyof FormData) => {
    setData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };
  const onRegisterPressed = async (data: any) => {
    // const { username, password, email, name } = data;
    try {
      //   await Auth.signIn({
      // username,
      // password,
      // attributes: { email, name, phone_number },
      //   });
      //@ts-ignore
      navigation.navigate('ConfirmEmail', { username });
    } catch (e: any) {
      Alert.alert('Oops', e.message);
    }
  };
  useEffect(() => {
    // Auth.signUp({
    //   username: 'bojanangjeleski@gmail.com',
    //   password: '12345678',
    //   attributes: {
    //     email: 'bojanangjeleski@gmail.com',
    //     phone_number: '+38972210024',
    //     name: 'Bojan Angjeleski',
    //   },
    // })
    //   .then(() => {
    //     console.log('Sign up successful!');
    //   })
    //   .catch(err => {
    //     console.log('Error signing up:', err);
    //   });
    // handleResendCode();
  }, []);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create Izvolte account</Text>
      <View style={styles.inputContainerView}>
        <Text style={styles.textInputLabel}>Enter your email address</Text>
        <TextInput
          style={styles.inputContainer}
          value={data.email}
          onChangeText={value => handleInput(value, 'email')}
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
          placeholder="Type your password"
          secureTextEntry={true}
          value={data.password}
          onChangeText={value => handleInput(value, 'password')}
          keyboardType="visible-password"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainerView}>
        <Text style={styles.textInputLabel}>Enter your confirm password</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder="Type your confirm password"
          secureTextEntry={true}
          value={data.confirmPassword}
          onChangeText={value => handleInput(value, 'confirmPassword')}
          keyboardType="visible-password"
          autoCorrect={false}
        />
      </View>

      <TouchableOpacity
        //@ts-ignore
        // onPress={handlePhoneNumberChange}
        style={styles.buttonNext}
      >
        <Text style={styles.buttonNextText}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  textInputLabel: {
    fontWeight: '500',
    marginBottom: 5,
  },
  inputContainerView: {
    paddingVertical: 10,
  },
  inputContainer: {
    backgroundColor: '#EEEEEE',
    width: '100%',
    // marginTop: 20,
    padding: 20,
    borderRadius: 2,
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
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 2,
    padding: 14,
    marginVertical: 20,
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
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  phoneNumberInput: {
    backgroundColor: '#EEEEEE',
    width: '100%',
    marginTop: 20,
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
export default SignUpScreen;
