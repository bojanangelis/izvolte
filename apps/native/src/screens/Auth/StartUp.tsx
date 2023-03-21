import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const StartUp = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.signInContainer}>
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
          Use your izvolte phone number to get started
        </Animatable.Text>
        <TouchableOpacity
          //@ts-ignore
          onPress={() => navigation.navigate('GetStarted')}
          style={styles.buttonSingIn}
        >
          <Text style={styles.buttonSingInText}>Get started</Text>
          <AntDesign
            style={styles.gettingStartedIcon}
            name="arrowright"
            size={22}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StartUp;

const styles = StyleSheet.create({
  gettingStartedIcon: {},
  buttonSingIn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 4,
    padding: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  buttonSingInText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
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
    marginVertical: 20,
  },
  inputContainerText: {
    fontSize: 18,
    letterSpacing: 2,
    paddingVertical: 20,
    fontWeight: '600',
    textAlign: 'left',
    color: 'black',
  },
});
