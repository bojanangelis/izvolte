import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { AntDesign } from '@expo/vector-icons';
import SocialSignInButtons from '../../components/SocialSigninButtons';
import GoBackComponent from '../../components/GoBackIcon';
import { useDispatch } from 'react-redux';
import { UserState, login, logout } from '../../../features/authUser';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export interface Params {
  email: string;
  password: string;
}
const ConfirmEmailScreen = () => {
  const CELL_COUNT = 6;
  const route = useRoute();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const email = (route?.params as Params)?.email ?? '';
  const password = (route?.params as Params)?.password ?? '';
  const onConfirmPressed = async () => {
    try {
      setLoading(true);
      await Auth.confirmSignUp(email, value);
      await handleSignIn();
    } catch (e: any) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };

  const handleSignIn = async () => {
    setLoading(true);
    Auth.signIn(email, password)
      .then(user => {
        dispatchLogin({
          email: user?.attributes?.email ?? '',
          emailAuthenticated: user?.attributes?.email_verified ?? false,
          sub: user?.attributes?.sub ?? '',
        });
      })
      .catch(err => {
        Alert.alert(err?.message);
        dispatch(logout);
      });
    setLoading(false);
  };

  const dispatchLogin = useCallback(
    (user: UserState['user']) =>
      dispatch(
        login({
          email: user?.email ?? '',
          sub: user?.sub ?? '',
          emailAuthenticated: user?.emailAuthenticated ?? false,
        }),
      ),
    [dispatch],
  );

  const onResendPress = async () => {
    try {
      setLoading(true);
      //@ts-ignore
      await Auth.resendSignUp(route?.params?.email);
      Alert.alert('Success', 'Code was resent to your email');
    } catch (e: any) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };

  return (
    <View style={styles.rootView}>
      <Text style={styles.titleView}>Confirm your email</Text>
      <View style={styles.inputContainerView}>
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
      </View>
      <TouchableOpacity
        disabled={loading}
        onPress={onConfirmPressed}
        style={styles.buttonNext}
      >
        <Text> </Text>
        <Text style={styles.buttonNextText}>Confirm</Text>
        <AntDesign
          style={styles.arrowNext}
          name="arrowright"
          size={22}
          color="white"
        />
      </TouchableOpacity>
      <Text style={styles.text}>
        Check you email address for the code confirmation, or
        <Text style={styles.link} onPress={onResendPress}>
          {' '}
          resend code.
        </Text>
      </Text>
      <View style={styles.dividerContainer}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider}></View>
      </View>
      <SocialSignInButtons signInButton />
      <GoBackComponent />
    </View>
  );
};

const styles = StyleSheet.create({
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
  textInputLabel: {
    fontWeight: '500',
    color: 'black',
    marginBottom: 5,
  },
  inputContainerView: {
    paddingVertical: 10,
  },

  dividerContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  dividerText: {
    textAlign: 'center',
    color: 'gray',
    paddingHorizontal: 5,
  },
  divider: {
    width: '45%',
    borderTopWidth: 1,
    paddingVertical: 10,
    marginVertical: 10,
  },
  arrowNext: {},
  buttonNext: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#f7d639',
    borderRadius: 2,
    padding: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonNextText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  rootView: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    paddingTop: '25%',
  },
  titleView: {
    fontSize: 20,
    paddingBottom: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  inputContainer: {
    backgroundColor: '#EEEEEE',
    width: '100%',
    padding: 20,
    borderRadius: 2,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
