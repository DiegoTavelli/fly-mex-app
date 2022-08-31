import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';


export default function CustomButton(props) {
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
    marginTop: -13,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ed982aae',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});