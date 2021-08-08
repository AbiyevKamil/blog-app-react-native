import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={{ width: 120, height: 120, marginTop: 20 }} source={require('../assets/homeLogo.png')} />
      <View style={styles.buttonsContainer}>
        <Text style={styles.header}>Wellcome to my Blog App</Text>
        <Text style={styles.description}>Join Us and Share Your Blogs</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        >
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.button}
        >
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.copyright}>Copyright &copy; 2021</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    fontSize: 25,
    color: "#21243D",
    padding: 15,
    textAlign: "center"
  },
  description: {
    fontSize: 18,
    color: "#21243D",
    textAlign: "center",
    marginBottom: 36
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
  button: {
    width: 200,
    padding: 18,
    backgroundColor: "#FF6464",
    marginBottom: 16,
    borderRadius: 8,
  },
  link: {
    width: "100%",
    color: "#FFF",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 16
  },
  footer: {
    marginBottom: 25,
    width: "100%",
    borderTopColor: '#21243D',
    borderTopWidth: 1,
    padding: 5
  },
  copyright: {
    fontSize: 18,
    textAlign: 'center',
    color: '#21243D'
  },
})

export default Home
