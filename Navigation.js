import React from 'react'
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { getUser, selectedIsLoggedIn, selectedUserData, setToken } from './features/users/usersSlice';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import Main from './screens/Main';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';
import CustomHeader from './components/CustomHeader';
import NewBlogNavigator from './screens/NewBlogNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileNavigator from './screens/ProfileNavigator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const navigationOptions = {
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: "#13C767",
  },
  headerTintColor: "#fff"
}

const Navigation = () => {
  const userData = useSelector(selectedUserData);
  const dispatch = useDispatch()
  let token;
  const getCookie = async () => {
    token = await AsyncStorage.getItem('access_token');
    if (token !== "") {
      dispatch(getUser(token))
      dispatch(setToken(token))
    }
    return token;
  }
  useEffect(() => {
    getCookie();
  }, [token]);
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      {token !== "" > 0 ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let icon;

              if (route.name === 'Main') {
                icon = focused
                  ? <Icon name="home" size={23} color="#FF6464" />
                  : <Icon name="home-outline" size={23} color="#fff" />
              } else if (route.name === 'Profile') {
                icon = focused
                  ? <Icon name="person" size={23} color="#FF6464" />
                  : <Icon name="person-outline" size={23} color="#fff" />;
              } else if (route.name === 'New Blog') {
                icon = focused
                  ? <IconAnt name="pluscircle" size={23} color="#FF6464" />
                  : <IconAnt name="pluscircleo" size={23} color="#fff" />;
              }
              else if (route.name === 'Search') {
                icon = focused
                  ? <Icon name="search" size={23} color="#FF6464" />
                  : <Icon name="search-outline" size={23} color="#fff" />;
              }
              return icon;
            },
            tabBarActiveTintColor: '#FF6464',
            tabBarInactiveTintColor: '#fff',
            tabBarLabelStyle: {
              fontSize: 13,
              padding: 0,
              margin: 0,
            },
            tabBarIconStyle: {
              padding: 1,
            },
            tabBarStyle: {
              height: 60,
              paddingBottom: 6,
              backgroundColor: '#13C767',
            },
            headerShown: false,
          })}
        >
          <Tab.Screen
            name="Main"
            component={Main}
          />
          {/* <Tab.Screen
            name="Search"
            component={SearchNavigator}
          /> */}
          <Tab.Screen
            name="New Blog"
            component={NewBlogNavigator}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileNavigator}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={navigationOptions}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: props => <CustomHeader title={"- Home"} {...props} />,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: props => <CustomHeader title={"- Login"} {...props} />,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerTitle: props => <CustomHeader title={"- Sign Up"} {...props} />,
            }}
          />
        </Stack.Navigator>
      )
      }
    </NavigationContainer >
  )
}

export default Navigation
