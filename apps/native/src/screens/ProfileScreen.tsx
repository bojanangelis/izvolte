import { Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Auth, DataStore } from 'aws-amplify';
// import { useAuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/authUser';
// import { User } from '../models';

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const [name, setName] = useState(dbUser?.name || '');
  // const [address, setAddress] = useState(dbUser?.address || '');
  // const [lat, setLat] = useState(dbUser?.lat.toString() || '0');
  // const [lng, setLng] = useState(dbUser?.lng.toString() || '0');

  const onSave = async () => {
    // if (dbUser) {
    //   await updateUser();
    // } else {
    //   await createUser();
    // }
    // navigation.goBack();
  };

  const updateUser = async () => {
    // const user = await DataStore.save(
    //   User.copyOf(dbUser, (updated: any) => {
    //     updated.name = name;
    //     updated.number = '41421412';
    //     updated.address = address;
    //     updated.lat = parseFloat(lat);
    //     updated.lng = parseFloat(lng);
    //   }),
    // );
    // setDbuser(user);
  };

  const createUser = async () => {
    // try {
    //   const user = await DataStore.save(
    //     new User({
    //       name,
    //       address,
    //       number: '072210024',
    //       lat: parseFloat(lat),
    //       lng: parseFloat(lng),
    //       sub: authUser.attributes.sub,
    //     } as any),
    //   );
    //   setDbuser(user);
    // } catch ({ message }) {
    //   if (message) return Alert.alert(message as string);
    // }
  };

  const handleSignOut = async () => {
    dispatch(logout());
    Auth.signOut();
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      {/* <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
      />
      <Button onPress={onSave} title="Save" />
    */}
      <Text
        onPress={handleSignOut}
        style={{ textAlign: 'center', color: 'red', margin: 10 }}
      >
        Sign out
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
  },
});

export default Profile;
