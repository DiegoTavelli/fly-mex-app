import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';


export default function CustomButtonFind(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: -50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: '#7f12e5c7',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});