import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: '#b0d7f787',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginBottom: 10,
    width: 200,
    textAlign: 'center'
  }
})

const StyledTextInput = ({ style = {}, ...props }) => {
  const inputStyle = {
    ...styles.TextInput,
    ...style
  }
  return (
    <TextInput style={inputStyle} {...props} />
  )
}

export default StyledTextInput