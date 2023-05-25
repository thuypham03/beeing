import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import HomeScreen from "./src/screens/HomeScreen";
import BrandScreen from './src/screens/BrandScreen';
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';
import BrandSignUp from './src/screens/auth/BrandSignUp';
import InfluencerSignUp from './src/screens/auth/InfluencerSignUp';

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async () => await Font.loadAsync({
    'rimouski': require('./src/assets/rimouski.otf'), 
    'karla': require('./src/assets/karla.ttf'), 
    IcoMoon: require('./src/assets/icons/icomoon.ttf'),
  });

  // Load Fonts
  useEffect(() => {
    loadFonts();
    setFontsLoaded(true);
  }, []);

  // Use the AppLoading component to handle font loading
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
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