import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const SigninScreen = () => {
  return (
    <SafeAreaView style={styles.signInContainer}>
      <Animatable.Image
        source={require('../../../assets/IzvolteLogo.jpg')}
        animation="fadeIn"
        iterationCount={1}
        style={styles.logo}
      />
      <Animatable.Text
        animation="fadeIn"
        iterationCount={1}
        style={styles.logoText}
      >
        Enter your phone number
      </Animatable.Text>
      <View style={styles.phoneNumberContainer}>
        <TextInput style={styles.inputNumber} />
        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.inputButtonText}>next</Text>
        </TouchableOpacity>
      </View>
      {/* <Progress.Bar size={50} color="white" indeterminate={true} /> */}
    </SafeAreaView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  signInContainer: {
    backgroundColor: '#ecc716',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  signInHeader: {
    color: 'white',
    fontWeight: '900',
    fontSize: 29,
    textAlign: 'center',
  },
  logo: {
    width: '100%',
    height: '50%',
  },
  logoText: {
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
  phoneNumberContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 40,
    margin: 20,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  inputNumber: {
    flexGrow: 1,
  },
  inputButtonText: {
    color: 'black',
    fontWeight: '600',
  },
  inputButton: {
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 4,
  },
});
