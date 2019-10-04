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
import { SourceMapConsumer } from 'source-map';

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
  map: {
    screen: map,
  },
  Setting: {
    screen: Setting,
  },
});
const Stack = createStackNavigator(
  {
    BottomTab: {
      screen: BottomTab,
    },
    DetailsProduct: {
      screen: DetailsProduct,
    },
  },
  {
    headerMode: 'none',
  },
);
// const stack = createStackNavigator({
//   map: {
//     screen: map,
//   },
//   Drawer: {
//     screen: Drawer,
//   },
// });

const AppNavigation = createAppContainer(Stack);
export default AppNavigation;
