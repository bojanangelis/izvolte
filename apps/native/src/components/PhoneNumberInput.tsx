import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';

interface PhoneNumberInputProps extends TextInputProps {
  countryCode: string;
  value: string;
  handlePhoneNumberChange: (text: string) => void;
}

const PhoneNumberInput = ({ countryCode, ...props }: PhoneNumberInputProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (text: string) => {
    // Initialize PhoneNumberUtil with default region
    const phoneUtil = PhoneNumberUtil.getInstance();

    try {
      // Parse phone number with country code
      const parsedNumber = phoneUtil.parse(text, countryCode);

      // Format phone number in E.164 format
      const formattedNumber = phoneUtil.format(
        parsedNumber,
        PhoneNumberFormat.E164,
      );

      // Update state with formatted phone number
      setPhoneNumber(formattedNumber);
    } catch (error) {
      // Invalid phone number, update state with original input
      setPhoneNumber(text);
    }
  };

  return (
    <TextInput
      {...props}
      value={phoneNumber}
      onChangeText={handlePhoneNumberChange}
      keyboardType="phone-pad"
    />
  );
};

export default PhoneNumberInput;
