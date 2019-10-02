import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import Home from '../src/screens/Home';
import DetailsProduct from '../src/screens/DetailsProduct';
import Login from '../src/screens/Login';
import Setting from '../src/screens/Setting';
import map from '../src/screens/map';
import Icon from 'react-native-vector-icons/Ionicons';
import {SourceMapConsumer} from 'source-map';

// const BottomTab = createBottomTabNavigator({
//   Home: {
//     screen: Home,
//   },
//   DetailsProduct: {
//     screen: DetailsProduct,
//   },
//   Setting: {
//     screen: Setting,
//   },
// });
const BottomTab = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  DetailsProduct: {
    screen: DetailsProduct,
  },
  Setting: {
    screen: Setting,
  },
});
const Stack = createStackNavigator({
  map: {
    screen: map,
  },
  login: {
    screen: Login,
  },
});
// const stack = createStackNavigator({
//   map: {
//     screen: map,
//   },
//   Drawer: {
//     screen: Drawer,
//   },
// });
const St = createSwitchNavigator({
  stack: {
    screen: Stack,
  },
  BottomTab: {
    screen: BottomTab,
  },
});

const AppNavigation = createAppContainer(BottomTab);
export default AppNavigation;
