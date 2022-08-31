import React from 'react'
import { Text, View, StyleSheet, ImageBackground, SafeAreaView, ScrollView, Image } from 'react-native'
import SearchForm from './SearchForm'
import background from '../../images/background2.jpg'
import logo from '../../images/logo2.png'
const image = {
  uri:
    "https://i.pinimg.com/originals/70/ae/de/70aededb671c0862bc0bd8341eb07d33.png"
};

const SearchPage = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={background} style={{ minHeight: 700 }} >
          <Image source={logo} style={[styles.title, styles.shadowProp]} ></Image>
          {/* <Text style={[styles.title, styles.shadowProp]} >Fly MEx</Text> */}
          <SearchForm />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
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
    fontWeight: '1000',
    shadowRadius: 10,
    fontStyle: 'bold',
    color: '#7f12e5c7',
    fontSize: 40,
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
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
})

export default SearchPage

