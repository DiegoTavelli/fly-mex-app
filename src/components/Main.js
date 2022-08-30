import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchPage from './SearchPage/SearchPage'
import FootBar from './FootBar';
import Flights from './Flights/Flights';
import Profile from './Profile/Profile'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Main = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name='Home' component={SearchPage} />
        <Stack.Screen name='Flights' component={Flights} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
      <FootBar />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0'
  }
});

export default Main;