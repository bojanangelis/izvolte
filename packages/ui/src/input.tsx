import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

export interface InputProps {
  text: string;
}

export const Input = ({ text }: InputProps) => {
  return (
    <View>
      <TextInput value={text} />
    </View>
  );
};
