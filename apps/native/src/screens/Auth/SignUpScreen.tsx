import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import GoBackComponent from '../../components/GoBackIcon';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUpScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleInput = (value: string, key: keyof FormData) => {
    setData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };
  const onRegisterPressed = async () => {
    if (data.password !== data.confirmPassword) return;
    try {
      setLoading(true);
      await Auth.signUp({
        username: data.email,
        password: data.password,
        attributes: { email: data.email },
        autoSignIn: { enabled: true },
      });
      //@ts-ignore
      navigation.navigate('ConfirmEmail', { email: data.email });
    } catch (e: any) {
      Alert.alert('Oops', e.message);
      setLoading(false);
    }
  };

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
        disabled={loading}
        onPress={onRegisterPressed}
        style={styles.buttonNext}
      >
        <Text style={styles.buttonNextText}>Create account</Text>
      </TouchableOpacity>
      <GoBackComponent />
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
export default SignUpScreen;
