import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { View, Text } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import AddNewBlog from './AddNewBlog';

const NewBlogStack = createNativeStackNavigator();

const navigationOptions = {
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: "#13C767",
  },
  headerTintColor: "#fff"
}

const NewBlogNavigator = () => {
  return (
    <NewBlogStack.Navigator screenOptions={navigationOptions}>
      <NewBlogStack.Screen
        name="Add New Blog"
        component={AddNewBlog}
        options={{
          headerTitle: props => <CustomHeader title={"- New Blog"} {...props} />,
        }}
      />
    </NewBlogStack.Navigator>
  )
}

export default NewBlogNavigator
