import React, { useState } from 'react'
import { Formik, useField } from 'formik'
import { View, Text, Button, StyleSheet, Pressable } from 'react-native'
import { FormikInputValue } from './FormikInputValue'
import CustomDatePicker from './CustomDatePicker'
// import CustomButton from './CustomButton'
import CustomButtonFind from './CustomButtonFind'
import { airports } from '../../data/db'

const initialValues = {
  from: '',
  to: '',
  depart: '',
  return: '',
  passengers: ''
}

export default function SearchForm({ modalVisible }) {


  return (
    <Formik initialValues={initialValues}
      onSubmit={values => console.log(values)}>
      {({ handleSubmit }) => {
        return <View style={styles.container} >
          <FormikInputValue
            name='from'
            placeholder='From'
            onpPress={modalVisible}
            label='From'
          />
          {/* <ModalInput /> */}
          <FormikInputValue
            name='to'
            placeholder='To'
            label='To'
          />
          <FormikInputValue
            name='passengers'
            placeholder='Passengers'
            label='👨 Passengers'
          />

          <View style={styles.containerMiddleInput}>
            <CustomDatePicker />
          </View>
          <CustomButtonFind
            style={styles.submitButton}
            onpPress={handleSubmit}
            title='Find it!'>
            <Text>a</Text>
          </CustomButtonFind>
        </View>
      }}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  middleInput: {
    maxWidth: 100,

  },
  containerMiddleInput: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 70
  },
  submitButton: {
    backgroundColor: 'red',
    borderRadius: 4,
    paddingHorizontal: 100
  },
  text: {
    color: '#ed982a',
    fontWeight: '500',
    fontStyle: 'bold',
    fontSize: 21,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: 'transparent',
    marginTop: 70,
    marginBottom: 5,

  }
})

