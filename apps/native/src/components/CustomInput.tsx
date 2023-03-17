import React, { LegacyRef } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface CustomInputProps {
  phoneInput: LegacyRef<PhoneInput> | undefined;
  value: string;
  handleValue: (value: string) => void;
  setFormattedValue: (value: string) => void;
}

const KeyboardAvoidingInput = ({
  phoneInput,
  value,
  handleValue,
  setFormattedValue,
}: CustomInputProps) => {
  return (
    <KeyboardAwareScrollView
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // behavior={Platform.OS === "ios" ? "padding" : null}
      // keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="MK"
            layout="first"
            onChangeText={text => {
              handleValue(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default KeyboardAvoidingInput;
