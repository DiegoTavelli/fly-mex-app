import React from 'react'
import { useField } from 'formik'
import StyledTextInput from './StyledTextInput'


export const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <StyledTextInput
      value={field.value}
      onChangeText={value => helpers.setValue(value)}
      {...props}
    />
  )
}