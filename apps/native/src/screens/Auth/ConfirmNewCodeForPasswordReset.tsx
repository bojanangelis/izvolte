import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Params } from './ConfirmEmailScreen';
import GoBackComponent from '../../components/GoBackIcon';

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: 'white' },
  title: {
    padding: 20,
    paddingVertical: 40,
    fontSize: 20,
    paddingBottom: 5,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  codeFieldRoot: { marginTop: 20, paddingHorizontal: 40 },
  cell: {
    width: 45,
    height: 48,
    lineHeight: 40,
    fontSize: 28,
    borderWidth: 0.9,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  subtitle: {
    padding: 20,
    fontSize: 12,
    color: 'gray',
  },
  resednCode: {
    padding: 20,
    fontSize: 15,
    color: 'orange',
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

  if (value.length === 6) {
    //@ts-ignore
    navigation.navigate('NewPassword', { email: email, code: value });
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Confirm your reset password code</Text>
      <CodeField
        ref={ref}
        {...props}
        caretHidden={false}
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
      <Text style={styles.subtitle}>
        Check your email address, your spam or trash folder.
      </Text>
      <Text style={styles.resednCode}>Resedn code</Text>
      <GoBackComponent />
    </SafeAreaView>
  );
};

export default ConfirmNewCodeForPasswordReset;
