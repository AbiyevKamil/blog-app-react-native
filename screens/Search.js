import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} placeholder={"Search blogs..."} placeholderTextColor={"#21243D"} />
        <TouchableOpacity style={styles.button} >
          <Icon name="search" size={23} color="#21243D" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.resultsContainer}>
        <View>
          
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#21243D',
    borderWidth: 1,
    padding: 12
  },
  input: {
    flex: 1,
  },
  // searchContainer: {
  //   height: 45,
  //   flexDirection: 'row',
  //   alignItems: 'center',

  // },
});

export default Search
