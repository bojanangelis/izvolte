// import React from 'react';
// import {
//   View,
//   KeyboardAvoidingView,
//   StyleSheet,
//   Platform,
//   TouchableWithoutFeedback,
//   Button,
//   Keyboard,
//   TouchableOpacity,
//   Text,
// } from 'react-native';
// import PhoneInput from 'react-native-phone-number-input';

// interface CustomInputProps {
//   phoneInput?: React.RefObject<PhoneInput>;
//   value: string;
//   handleValue: (value: string) => void;
//   handleLogin: () => void;
// }

// const KeyboardAvoidingInput = ({
//   phoneInput,
//   value,
//   handleValue,
//   handleLogin,
// }: CustomInputProps) => {
//   const styles = StyleSheet.create({
//     header: {
//       fontSize: 36,
//       marginBottom: 48,
//     },
//     textInput: {
//       height: 40,
//       borderColor: '#000000',
//       borderBottomWidth: 1,
//       marginBottom: 36,
//     },
//     btnContainer: {
//       backgroundColor: 'white',
//       marginTop: 12,
//     },
//   });

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View>
//           <PhoneInput
//             ref={phoneInput}
//             defaultValue={value}
//             defaultCode="MK"
//             layout="second"
//             onChangeFormattedText={handleValue}
//             withDarkTheme
//           />
//           <TouchableOpacity onPress={handleLogin} style={styles.btnContainer}>
//             <Text>dawe</Text>
//           </TouchableOpacity>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// export default KeyboardAvoidingInput;

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}: any) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              { borderColor: error ? 'red' : '#e8e8e8' },
            ]}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{ color: 'red', alignSelf: 'stretch' }}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});

export default CustomInput;
