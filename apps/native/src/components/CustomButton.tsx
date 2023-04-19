import React from 'react';
import { Image } from 'react-native';
import { Text, StyleSheet, Pressable } from 'react-native';
interface CustomButtonInterface {
  onPress: () => void;
  text: string;
  bgColor: string;
  fgColor: string;
  border: string;
  image?: Object;
}

const CustomButton = ({
  onPress,
  text,
  bgColor,
  fgColor,
  border,
  image,
}: CustomButtonInterface) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        border ? { borderColor: border, borderWidth: 1 } : {},
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      {image && <Image source={image} style={styles.logo} />}
      <Text style={[styles.text, fgColor ? { color: fgColor } : {}]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 2,
  },
  logo: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 15,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_SECONDARY: {
    color: '#3B71F3',
  },

  text_TERTIARY: {
    color: 'gray',
  },
});

export default CustomButton;
