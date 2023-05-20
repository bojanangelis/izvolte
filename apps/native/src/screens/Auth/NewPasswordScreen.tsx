import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import GoBackComponent from '../../components/GoBackIcon';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
interface FormData {
  newPassword: string;
  confirmNewPassword: string;
}
export interface ParamsNewPass {
  code: string;
  email: string;
}

const NewPasswordScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<FormData>({
    newPassword: '',
    confirmNewPassword: '',
  });
  const code = (route?.params as ParamsNewPass)?.code ?? '';
  const email = (route?.params as ParamsNewPass)?.email ?? '';
  console.log(email);
  console.log(code);
  console.log('data--><', data);
  const handleInput = (value: string, key: keyof FormData) => {
    setData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const submitNewPassword = async () => {
    if (data.newPassword !== data.confirmNewPassword) return;
    try {
      const x = await Auth.forgotPasswordSubmit(email, code, data.newPassword);

      //@ts-ignore go navigate it to startscreen.
      if (x === 'SUCCESS') navigation.navigate('GetStarted');
    } catch (error: any) {
      console.log('Error resetting password:', error);
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.rootView}>
      <Text style={styles.titleView}>Setup new password</Text>

      <View style={styles.inputContainerView}>
        <Text style={styles.textInputLabel}>Enter your new password</Text>
        <TextInput
          style={styles.inputContainer}
          value={data.newPassword}
          onChangeText={value => handleInput(value, 'newPassword')}
          placeholder="Type your password"
          secureTextEntry={true}
          keyboardType="visible-password"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainerView}>
        <Text style={styles.textInputLabel}>Confirm your new password</Text>
        <TextInput
          style={styles.inputContainer}
          value={data.confirmNewPassword}
          onChangeText={value => handleInput(value, 'confirmNewPassword')}
          placeholder="Confirm your password"
          secureTextEntry={true}
          keyboardType="visible-password"
          autoCorrect={false}
        />
      </View>

      <TouchableOpacity
        disabled={loading}
        onPress={submitNewPassword}
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
export default NewPasswordScreen;
