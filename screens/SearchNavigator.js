import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { View, Text } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import BlogDetail from './BlogDetail';
import Search from './Search';

const SearchStack = createNativeStackNavigator();

const navigationOptions = {
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: "#13C767",
  },
  headerTintColor: "#fff"
}

const SearchNavigator = () => {
  return (
    <SearchStack.Navigator screenOptions={navigationOptions}>
      <SearchStack.Screen
        name="Search Component"
        component={Search}
        options={{
          headerTitle: props => <CustomHeader title={"- Search"} {...props} />,
        }}
      />
      <SearchStack.Screen
        name="Blog Detail"
        component={BlogDetail}
        options={{
          headerTitle: props => <CustomHeader title={"- Blog Detail"} {...props} />,
        }}
      />
    </SearchStack.Navigator>
  )
}

export default SearchNavigator
