import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blog App {title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
  },
})

export default CustomHeader
