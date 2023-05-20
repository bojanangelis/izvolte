import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import React from 'react';
import CloseIcon from '../components/CloseIcon';

const ErrorScreen = () => {
  const styles = StyleSheet.create({
    root: {
      position: 'relative',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecc716',
    },
    backgroundImage: {
      marginBottom: 5,
      height: 400,
      width: '100%',
    },
    inputContainerText: {
      fontSize: 20,
      letterSpacing: 2,
      paddingVertical: 20,
      fontWeight: '600',
      textAlign: 'left',
      color: 'white',
    },
    progressBar: {
      width: 200,
      height: 10,
      borderRadius: 50,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.root}>
      <Animatable.Image
        source={require('../../assets/IzvolteLogo.jpg')}
        animation="slideInUp"
        iterationCount={1}
        style={styles.backgroundImage}
      />
      <View style={styles.container}>
        <Animatable.Text
          animation="fadeIn"
          iterationCount={1}
          style={styles.inputContainerText}
        >
          Something whent wrong
        </Animatable.Text>
      </View>
      <CloseIcon />
    </View>
  );
};

export default ErrorScreen;
