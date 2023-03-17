import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native';
import { Controller, FieldValues, FieldErrors } from 'react-hook-form';

interface Props {
  style: any;
  value?: string;
  onChange?: any;
  rules?: Object;
  secureTextEntry?: boolean;
}

const CustomInput = ({ value, onChange, style, secureTextEntry }: Props) => {
  return (
    <View style={style}>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.input}
        onSubmitEditing={Keyboard.dismiss}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});

export default CustomInput;
