import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

interface RouteParams {
  email: string;
}
const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const router = useRoute();
  const [data, setData] = useState({
    code: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleInput = (value: string, key: keyof FormData) => {
    setData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const resetPassword = async (): Promise<void> => {
    try {
      await Auth.forgotPasswordSubmit(
        (router?.params as RouteParams)?.email,
        '',
        '31',
      );
      console.log('Password reset successful');
      // Redirect the user to the login page or perform any other desired action
    } catch (error) {
      console.log('Password reset failed', error);
      // Handle any errors that occurred during the password reset process
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset password</Text>
      <View style={styles.inputContainerView}>
        <Text>Your email</Text>
        <Text style={styles.textInputLabelEmail}>
          {(router?.params as RouteParams)?.email}
        </Text>
      </View>
      <View style={styles.inputContainerView}>
        <Text style={styles.textInputLabel}>Enter your code</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder="Type your code"
          secureTextEntry={true}
          value={data.password}
          onChangeText={value => handleInput(value, 'password')}
          keyboardType="visible-password"
          autoCorrect={false}
        />
        <View style={styles.inputContainerView}>
          <Text style={styles.textInputLabel}>Enter your password</Text>
          <TextInput
            style={styles.inputContainer}
            placeholder="Type your password"
            secureTextEntry={true}
            // value={data.confirmPassword}
            // onChangeText={value => handleInput(value, 'confirmPassword')}
            keyboardType="visible-password"
            autoCorrect={false}
          />
        </View>
      </View>
      <View style={styles.inputContainerView}>
        <Text style={styles.textInputLabel}>Enter your confirm password</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder="Type your confirm password"
          secureTextEntry={true}
          // value={data.confirmPassword}
          // onChangeText={value => handleInput(value, 'confirmPassword')}
          keyboardType="visible-password"
          autoCorrect={false}
        />
      </View>

      <TouchableOpacity
        //@ts-ignore
        // disabled={loading}
        // onPress={onRegisterPressed}
        style={styles.buttonNext}
      >
        <Text style={styles.buttonNextText}>Create account</Text>
      </TouchableOpacity>
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
  textInputLabelEmail: {
    fontWeight: '500',
    marginBottom: 5,
    color: 'gray',
    paddingVertical: 5,
  },
  textInputLabel: {
    fontWeight: '500',
    marginBottom: 5,
    color: 'gray',
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
    marginBottom: 20,
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

export default NewPasswordScreen;
