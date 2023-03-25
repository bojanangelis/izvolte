import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const StartUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signInContainer}>
      <Image
        source={require('../../../assets/loginLogo.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.inputContainer}>
        <Animatable.Text
          animation="fadeIn"
          iterationCount={1}
          style={styles.inputContainerText}
        >
          Get started with Izvolte
        </Animatable.Text>
        <TouchableOpacity
          //@ts-ignore
          // onPress={() => navigation.navigate('')}
          style={styles.buttonSeeStores}
        >
          <Text style={styles.buttonSeeStoresText}>See stores nearby</Text>
        </TouchableOpacity>
        <TouchableOpacity
          //@ts-ignore
          onPress={() => navigation.navigate('GetStarted')}
          style={styles.buttonSingIn}
        >
          <Text style={styles.buttonSingInText}>Sign up or log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartUp;

const styles = StyleSheet.create({
  buttonSeeStores: {
    width: '100%',
    backgroundColor: '#f7d639',
    padding: 20,
    borderRadius: 2,
  },
  buttonSeeStoresText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  gettingStartedIcon: {},
  buttonSingIn: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
    marginVertical: 40,
  },
  buttonSingInText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  signInContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    marginBottom: 5,
  },
  inputContainer: {
    zIndex: 10,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  inputContainerText: {
    fontSize: 24,
    letterSpacing: 2,
    paddingVertical: 20,
    fontWeight: '600',
    textAlign: 'left',
    color: 'black',
  },
});
