import 'react-native-gesture-handler'
import React, { Component } from 'react'
import {  Text,View, KeyboardAvoidingView,ScrollView,BackHandler,Alert,StatusBar , ImageBackground} from 'react-native'


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from '../Containers/HomeScreen'
import DetailsScreen from '../Containers/DetailsScreen'



// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  HomeScreen :{screen:HomeScreen},
  DetailsScreen:{screen:DetailsScreen}
},
{
  defaultNavigationOptions: {
    gestureEnabled: false,
  },
  
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  
  
});



export default createAppContainer(PrimaryNav)
