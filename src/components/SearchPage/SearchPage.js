import React from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import SearchForm from './SearchForm'

const image = {
  uri:
    "https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2019/09/Playas-mas-bonitas-de-Mexico-Cancun.jpg?resize=1280%2C640&ssl=1"
};

const SearchPage = () => {

  return (
    <View>
      <ImageBackground source={image} style={{ minHeight: 700 }} >
        <Text style={styles.title} >Fly MEx</Text>
        <SearchForm />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2683e177',
  },
  title: {
    fontSize: 30,
    marginTop: 40,
    alignSelf: 'center',
    marginBottom: 20
  },
  input: {
    height: 30,
    width: 200,
    margin: 2,
    borderWidth: 1,
    padding: 13,
    borderRadius: 50,
  },
})

export default SearchPage


{/* <View>
      <Text style={styles.title} >Fly MEx App</Text>
      <View style={styles.container} >
        <SafeAreaView>
          <Text >From</Text>
          <TextInput
            style={styles.input}
            value={fromText}
            onChangeText={onChangeFromText}
          />
          <Text >To</Text>
          <TextInput
            style={styles.input}
            value={toText}
            onChangeText={onChangeToText}
          />
          <View >
            <Text >Depart</Text>
            <TextInput
              style={styles.input}
              value={toText}
              onChangeText={onChangeToText}
            />
            <Text >Return</Text>
            <TextInput
              style={styles.input}
              value={toText}
              onChangeText={onChangeToText}
            />
          </View>
        </SafeAreaView>
      </View>
    </View> */}