import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import GoBackComponent from '../../components/GoBackIcon';
import { AntDesign } from '@expo/vector-icons';
interface FormData {
  code: string;
  password: string;
  confirmPassword: string;
}

const NewPasswordScreen = () => {
  const [data, setData] = useState<FormData>({
    code: '',
    password: '',
    confirmPassword: '',
  });
  const handleInput = (value: string, key: keyof FormData) => {
    setData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };
  return (
    <View style={styles.rootView}>
      <Text style={styles.titleView}>Setup new password</Text>
      <View style={styles.inputContainerView}>
        <Text style={styles.textInputLabel}>Enter your new password</Text>
        <TextInput
          style={styles.inputContainer}
          value={data.code}
          onChangeText={value => handleInput(value, 'code')}
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
          value={data.password}
          onChangeText={value => handleInput(value, 'password')}
          placeholder="Confirm your password"
          secureTextEntry={true}
          keyboardType="visible-password"
          autoCorrect={false}
        />
      </View>
      {/* <View style={styles.inputContainerView}>
        <Text style={styles.textInputLabel}>Enter your code</Text>
        <TextInput
          style={styles.inputContainer}
          value={data.code}
          onChangeText={value => handleInput(value, 'code')}
          placeholder="Type your code"
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View> */}

      <TouchableOpacity
        // disabled={loading}
        // onPress={onConfirmPressed}
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
