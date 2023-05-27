import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import axios from 'axios';

import HomeScreen from "./src/screens/HomeScreen";
import BrandScreen from './src/screens/BrandScreen';
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';
import BrandSignUp from './src/screens/auth/BrandSignUp';
import InfluencerSignUp from './src/screens/auth/InfluencerSignUp';

const Stack = createStackNavigator();

const App = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  
  const [fontsLoaded] = useFonts({
    'rimouski': require('./src/assets/rimouski.otf'), 
    'karla': require('./src/assets/karla.ttf'), 
    IcoMoon: require('./src/assets/icons/icomoon.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Sign In' component={SignIn}/>
          <Stack.Screen name='Sign Up' component={SignUp}/>
          <Stack.Screen name='Brand Sign Up' component={BrandSignUp}/>
          <Stack.Screen name='Influencer Sign Up' component={InfluencerSignUp}/>

          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Brand' component={BrandScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;