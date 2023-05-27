import firebase from 'firebase/app';
import apiKeys from '../config/firebase-config'
import {Alert} from "react-native";
import { v4 as uuid } from 'uuid';

import 'firebase/auth'; // for authentication
import 'firebase/storage'; // for storage
import 'firebase/database'; // for realtime database
import 'firebase/firestore'; // for cloud firestore

firebase.initializeApp(apiKeys.firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

const registration = async (email: string, password: string) : Promise<string | null> => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password)
    return user.uid;
  } catch (err) {
    Alert.alert("Unsuccessful registration", err.message);
    return null;
  }
}

const signIn = async (email: string, password: string) => {
  try {
   await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("Unsuccessful sign in", err.message);
  }
}

const signOut = async () => {
try {
    await auth.signOut();
  } catch (err) {
    Alert.alert("Unsuccessful sign out", err.message);
  }
}

const uploadImage = async (uri: string) => {
  const storageRef = storage.ref();
  const response = await fetch(uri);
  const blob = await response.blob();

  const result = await storageRef.child(uuid()).put(blob);
  return await result.ref.getDownloadURL();
};

export { registration, signIn, signOut, uploadImage };
