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
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return <Image
              source={require('./src/assets/images/home-menu.png')}
              style={{ width: 24, height: 24, color: '' }}
                />
            }
          }}  
        />
        <Tab.Screen 
          name="Connect" 
          component={Home} 
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return <Image
              source={require('./src/assets/images/connect-menu.png')}
              style={{ width: 24, height: 24, color: '' }}
                />
            }
          }}  
        />
  </Tab.Navigator>
  )
}

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
    <Stack.Screen name="home" component={HomeStackScreen} />
  </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
