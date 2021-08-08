import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Blogs from './Blogs';
import BlogDetail from './BlogDetail';
import CustomHeader from '../components/CustomHeader';

const BlogsStack = createNativeStackNavigator();

const navigationOptions = {
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: "#13C767",
  },
  headerTintColor: "#fff"
}

const Main = ({ navigation }) => {
  return (
    <BlogsStack.Navigator screenOptions={navigationOptions}>
      <BlogsStack.Screen
        name="Blogs"
        component={Blogs}
        options={{
          headerTitle: props => <CustomHeader title={"- Blogs"} {...props} />,
        }}
      />
      <BlogsStack.Screen
        name="Blog Detail"
        component={BlogDetail}
        options={{
          headerTitle: props => <CustomHeader title={"- Blog"} {...props} />,
        }}
      />
    </BlogsStack.Navigator>
  )
}



export default Main
