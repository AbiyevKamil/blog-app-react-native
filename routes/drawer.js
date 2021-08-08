import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from '@react-navigation/native';

import HomeStack from './homeStack';

const screens = {
  Home: {
    screen: HomeStack
  }
}

const RootDrawerNavigator = createDrawerNavigator(screens);
export default createAppContainer(RootDrawerNavigator);