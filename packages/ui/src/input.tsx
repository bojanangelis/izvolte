import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export interface InputProps {
  text: string;
}

export const Input = ({ text }: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {},
});
