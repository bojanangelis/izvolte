import { useNavigation, useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Params } from './ConfirmEmailScreen';

const styles = StyleSheet.create({
  root: { flex: 1 },
  title: {
    padding: 20,
    fontSize: 20,
    paddingBottom: 5,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  codeFieldRoot: { marginTop: 20, paddingHorizontal: 40 },
  cell: {
    width: 45,
    height: 50,
    lineHeight: 40,
    fontSize: 28,
    borderWidth: 0.5,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  subtitle: {
    paddingHorizontal: 20,
    fontSize: 12,
    color: 'gray',
  },
});

const CELL_COUNT = 6;

const ConfirmNewCodeForPasswordReset = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const email = (route?.params as Params)?.email ?? '';
  console.log('email i got here wow-->', email);
  console.log(value.length);
  if (value.length === 6) {
    //@ts-ignore
    navigation.navigate('NewPasswordScreen', { email: email, code: value });
  }
  const verifyCode = async () => {};

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Confirm your reset password code</Text>
      <Text style={styles.subtitle}>Check your email</Text>

      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default ConfirmNewCodeForPasswordReset;
