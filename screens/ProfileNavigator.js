import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../components/CustomHeader';
import { getUser, selectedUserData, selectedUserToken } from '../features/users/usersSlice';
import BlogDetail from './BlogDetail';
import Profile from './Profile';
import Search from './Search';


const ProfileStack = createNativeStackNavigator();

const navigationOptions = {
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: "#13C767",
  },
  headerTintColor: "#fff"
}

const ProfileNavigator = () => {
  const dispatch = useDispatch()
  const userData = useSelector(selectedUserData);
  const token = useSelector(selectedUserToken);
  useEffect(() => {
    if (!userData) {
      if (token) {
        dispatch(getUser(token))
      }
    }
  }, [])
  return (
    <ProfileStack.Navigator screenOptions={navigationOptions}>
      <ProfileStack.Screen
        name="Profile Component"
        component={Profile}
        options={{
          headerTitle: props => <CustomHeader title={"- Profile"} {...props} />,
        }}
      />
    </ProfileStack.Navigator>
  )
}

export default ProfileNavigator
