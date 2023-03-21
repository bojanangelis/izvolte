import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/core';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
          }}
        />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ForgotPasswordScreen;
