import { Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { API, Auth, DataStore } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { useNavigation } from '@react-navigation/native';
import { createUser } from '../graphql/mutations';
import { RouteProp } from '@react-navigation/native';
import { CreateUserMutation } from '../API';
import { useDispatch, useSelector } from 'react-redux';
import { authUserData } from '../../features/authUser';
import { logout } from '../../features/authUser';

const Profile = () => {
  // const { authUser, setDbuser, dbUser }: any = useAuthContext();
  const dispatch = useDispatch();
  const selectAuthSub = useSelector(authUserData);
  console.log('sub', selectAuthSub?.sub);
  const navigation = useNavigation();
  // const [name, setName] = useState(dbUser?.name || '');
  // const [address, setAddress] = useState(dbUser?.address || '');
  // const [lat, setLat] = useState(dbUser?.lat.toString() || '0');
  // const [lng, setLng] = useState(dbUser?.lng.toString() || '0');

  const onSave = async () => {
    // if (dbUser) {
    // await updateUser();
    // } else {
    await create();
    // }
    navigation.goBack();
  };
  const signOut = async () => {
    dispatch(logout());
    Auth.signOut();
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

  const create = async (): Promise<any> => {
    const userInput = {};
    API.graphql<GraphQLQuery<CreateUserMutation>>({
      query: createUser,
      variables: {
        input: {
          name: 'Bojan Angjeleski',
          address: 'Kopachka bb',
          number: '+38972210024',
          lat: 13,
          lng: 11,
          sub: selectAuthSub?.sub,
        },
      },
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        // Handle any errors that occurred
      });

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
      <Text
        onPress={() => Auth.signOut()}
        style={{ textAlign: 'center', color: 'red', margin: 10 }}
      >
        Sign out
      </Text> */}
      <Button onPress={onSave} title="Save" />
      <Button onPress={signOut} title="SignOut" />
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
