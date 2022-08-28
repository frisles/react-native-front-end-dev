/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MobileNumber from './src/register/MobileNumber';
import VerifyAccount from './src/register/VerifyAccount';
import Agree from './src/register/Agree';
import Details from './src/register/Details';
import UploadPicture from './src/register/UploadPicture';
import Location from './src/register/Location';
import InviteFriends from './src/register/InviteFriends';
import Interests from './src/register/Interests';
import Groups from './src/register/Groups';
import Home from './src/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="mobileNumber">
        <Stack.Screen name="mobileNumber" component={MobileNumber} />
        <Stack.Screen name="verifyAccount" component={VerifyAccount} />
        <Stack.Screen name="agree" component={Agree} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="uploadPicture" component={UploadPicture} />
        <Stack.Screen name="location" component={Location} />
        <Stack.Screen name="inviteFriends" component={InviteFriends} />
        <Stack.Screen name="interests" component={Interests} />
        <Stack.Screen name="groups" component={Groups} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
