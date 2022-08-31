import React, { useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from './CustomButton'

const CustomDatePicker = () => {
  const [datePickerDepart, setDatePickerDepart] = useState(false)
  const [date, setDate] = useState(new Date())

  const [datePickerReturn, setDatePickerReturn] = useState(false)
  const [dateReturn, setDateReturn] = useState(new Date())

  const showDatePickerDepart = () => {
    setDatePickerDepart(true)
  }
  const onDateSelectedDepart = (e, value) => {
    setDate(value)
    setDatePickerDepart(false)
  }

  const showDatePickerReturn = () => {
    setDatePickerReturn(true)
  }
  const onDateSelectedReturn = (e, value) => {
    setDateReturn(value)
    // console.log(e)
    setDatePickerReturn(false)
  }
  return (
    <SafeAreaView>
      <View style={styles.MainContainer}>
        <View>
          <Text style={styles.text}>{date.toDateString() + ' |'}</Text>
          {datePickerDepart && (
            <DateTimePicker
              value={date}
              mode={'date'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onDateSelectedDepart}
              style={styles.datePicker}
            />
          )}
          {!datePickerDepart && (
            <View style={{ margin: 10, minHeight: 100 }}>
              <CustomButton
                title='Select Depart Date'
                color='#376dac'
                onPress={showDatePickerDepart} />
            </View>
          )}
        </View>
        <View>
          <Text style={styles.text}>{'| ' + dateReturn.toDateString()}</Text>
          {datePickerReturn && (
            <DateTimePicker
              value={dateReturn}
              mode={'date'}
              display={Platform.OS === 'ios' ? 'inline' : 'default'}
              is24Hour={true}
              onChange={onDateSelectedReturn}
              style={styles.datePicker}
            />
          )}
          {!datePickerReturn && (
            <View style={{ margin: 10, minHeight: 100 }}>
              <CustomButton title='Select Return Date' color='#376dac' onPress={showDatePickerReturn} />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  MainContainer: {
    borderRadius: 10,
    flex: 0,
    flexDirection: 'row',
    padding: 0,
    alignItems: 'center',
    backgroundColor: '#ed982aae',
    marginTop: 67,
    maxHeight: 100,

  },

  text: {
    borderRadius: 10,
    fontSize: 18,
    fontStyle: 'bold',
    color: '#7f12e5',
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#fc766aa0'
  },

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: 'center',
    width: 320,
    height: 0,
    display: 'flex',
    flexDirection: 'row'
  },


});

export default CustomDatePicker



