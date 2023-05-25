import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './src/Profile';
import Register from './src/Register';
import Home from './src/components/Home';
import Footer from './src/components/Footer';

const Stack = createNativeStackNavigator();

function App({navigation}) {
  return (
    
    <NavigationContainer>
      <StatusBar backgroundColor="#409ae7" barStyle="light-content" />
      <Stack.Navigator initialRouteName="Register" screenOptions={{}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Footer"
          component={Footer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
