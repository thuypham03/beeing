import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

import HomeScreen from "./src/screens/HomeScreen";
import BrandScreen from './src/screens/BrandScreen';
import SignIn from './src/screens/auth/SignIn';

const Stack = createStackNavigator();

const App = () => {
  // Load Fonts
  useEffect(() => {
    const loadFonts = async () => await Font.loadAsync({
      'rimouski': require('./src/assets/rimouski.otf'), 
      'karla': require('./src/assets/karla.ttf'), 
      IcoMoon: require('./src/assets/icons/icomoon.ttf'),
    });
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Sign In' component={SignIn}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Brand' component={BrandScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;