import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main.js'

export default function App() {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}

