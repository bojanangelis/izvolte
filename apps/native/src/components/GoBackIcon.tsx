import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const GoBackComponent = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.viewIcon}
    >
      <AntDesign name="arrowleft" size={25} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewIcon: {
    position: 'absolute',
    left: 25,
    bottom: 50,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GoBackComponent;
