import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { selectedIsLoggedIn } from './features/users/usersSlice';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomHeader from './components/CustomHeader';
import Main from './pages/Main';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import Profile from './pages/Profile';
import AddNewBlog from './pages/AddNewBlog';
import Search from './pages/Search';
import BlogDetail from './pages/BlogDetail';

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
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      {isLoggedIn ? (
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
          <Tab.Screen
            name="Search"
            component={Search}
          />
          <Tab.Screen
            name="New Blog"
            component={AddNewBlog}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
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
