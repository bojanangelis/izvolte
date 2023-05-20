import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CloseIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      //@ts-ignore
      onPress={() => navigation.navigate('Restaurants')}
      style={styles.viewIcon}
    >
      <Ionicons name="close-outline" size={28} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewIcon: {
    position: 'absolute',
    right: 25,
    top: 25,
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CloseIcon;
