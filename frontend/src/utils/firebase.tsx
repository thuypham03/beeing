import firebase from 'firebase/app';
import apiKeys from '../../config/keys';
import {Alert} from "react-native";

import 'firebase/auth'; // for authentication
import 'firebase/storage'; // for storage
import 'firebase/database'; // for realtime database
import 'firebase/firestore'; // for cloud firestore

firebase.initializeApp(apiKeys.firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

const registration = async (email: string, password: string) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("Unsuccessful registration", err.message);
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

export { registration, signIn, signOut };
