import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {signIn} from '../../utils/firebase';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handlePress = () => {
    if (!email) {
      Alert.alert('Email field is required.');
    }
    else if (!password) {
      Alert.alert('Password field is required.');
    }
    else {
      signIn(email, password);
      setEmail('');
      setPassword('');
    }
  };

  const signUp = () => navigation.navigate('Sign Up');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>

      <TextInput
        style={styles.formInput}
        placeholder="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.formInput}
        placeholder="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={{...styles.breakerText, fontSize: 16, marginTop: 10}}>Forgot password?</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: '20%' }}>
        <View style={styles.breaker} />
        <Text style={styles.breakerText}>Don’t have an account?</Text>
        <View style={styles.breaker} />
      </View>
      <TouchableOpacity style={{...styles.button, width: 220}} onPress={signUp}>
        <Text style={styles.buttonText}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    marginTop: '20%',
    fontFamily: 'rimouski',
    fontSize: 45,
    padding: 25,
  },
  formInput: {
    marginBottom: 10,
    width: 365,
    height: 45,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'black',
    textAlign: 'left',  
    alignSelf: 'center',
    fontSize: 15,
  },
  button: {
    marginTop: 15,
    width: 140,
    height: 38,
    borderRadius: 30,
    backgroundColor: '#FCE330',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'rimouski',
    fontSize: 18,
  },
  breaker: {
    width: 100,
    borderWidth: 0.5,
  },
  breakerText: {
    padding: 5,
    fontFamily: 'karla',
    fontSize: 18,
  },
});

export default SignIn;