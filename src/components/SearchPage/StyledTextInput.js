import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput } from '@react-native-material/core'

const StyledTextInput = ({ ...props }) => {
  const inputStyle = {
    ...styles.textInput,
  }
  return (
    <TextInput variant='outlined'
      style={[inputStyle, { margin: 16, marginBottom: -5 }]}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    maxHeight: 55,
    width: 280,
    textAlign: 'center'
  }
})

export default StyledTextInput