import React, { useState } from 'react'
import { Formik, useField } from 'formik'
import { View, Text, Button, StyleSheet } from 'react-native'
import { FormikInputValue } from './FormikInputValue'
import DatePicker from '@react-native-community/datetimepicker';

import { airports } from '../../data/db'

const initialValues = {
  from: '',
  to: '',
  depart: '',
  return: '',
  passengers: ''
}

export default function SearchForm() {
  const [date, setDate] = useState('09-10-2022')


  return (
    <Formik initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {({ handleSubmit }) => {
        return <View style={styles.container} >
          <Text>
            From
          </Text>
          <FormikInputValue
            name='from'
            placeholder='from'
          />
          <Text>
            To
          </Text>
          <FormikInputValue
            name='to'
            placeholder='to'
          />
          <View style={{ flexDirection: 'row' }} >
            <Text style={{ marginRight: 70 }} >depart</Text>
            <Text>return</Text>
          </View>
          <View style={styles.containerMiddleInput}>
            <DatePicker
              style={styles.middleInput}
              date={date}
              value={new Date()}
              mode='date'
              placeholder='select date'
              format='DD-MM-YYYY'
              minDate='01-01-2022'
              maxDate='01-01-2025'
              confirmBtnText='Confirm'
              cancelBtnText='Cancel'
              onDateChange={(date) => {
                setDate(date)
              }}
            />
            <FormikInputValue
              name='return'
              style={styles.middleInput}
              placeholder='return'
            />
          </View>
          <Text>
            passengers
          </Text>
          <FormikInputValue
            name='passengers'
            placeholder='passengers'
          />
          <Button style={styles.submitButton} onpPress={handleSubmit} title='Search' ></Button>
        </View>
      }}
    </Formik >
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  middleInput: {
    maxWidth: 100
  },
  containerMiddleInput: {
    display: 'flex',
    flexDirection: 'row',
  },
  submitButton: {
    borderRadius: 40,
    color: 'red'
  }
})