import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Login from '../pages/Login';


const screens = {
  Home: {
    screen: Home,
  },
  Login: {
    screen: Login,
  }
};

const HomeStack = createStackNavigator(screens);

export default HomeStack;