import React from 'react'
import { View, StyleSheet, ScrollView, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomButton from './SearchPage/CustomButton'
import theme from '../theme'


const FootBar = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Button style={styles.text} title='Home' onPress={() => navigation.navigate('Home')} >Home</Button>
        <Button style={styles.text} title='Flights' onPress={() => navigation.navigate('Flights')} >Flights</Button>
        <Button style={styles.text} title='Profile' onPress={() => navigation.navigate('Profile')} >Profile</Button>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    padding: 10,
    flexDirection: 'column',
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.footBar.primary,
  },
  text: {
    color: '#0d84e5d3',
  },
  active: {
    color: 'black'
  }
})

export default FootBar


// const FootBar = () => {
//   return (
//     <View style={styles.container}>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//       >
//         <FootBarTab to='Home'>Home</FootBarTab>
//         <FootBarTab to='Flights'>Flights</FootBarTab>
//         <FootBarTab to='Profile'>Profile</FootBarTab>
//       </ScrollView>
//     </View>
//   )
// }

// const FootBarTab = ({ children, to }) => {
//   const { pathname } = useLocation()
//   const active = pathname === to

//   const textStyles = [styles.text,
//   active && styles.active,
//   ]

//   return (
//     <Link to={to} component={TouchableWithoutFeedback} >
//       <Text style={textStyles} >
//         {children}
//       </Text>
//     </Link>
//   )
// }