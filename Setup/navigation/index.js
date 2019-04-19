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
import Hotel from '@src/screens/ListProduct/Hotel';
import Setting from '../src/screens/Setting';
import map from '../src/screens/map';
import getTabBarIcon from './getBarIcon';
import Icons from '@src/comon/Icon';

const BottomTab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    map: {
      screen: map,
    },
    Setting: {
      screen: Setting,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: '#ff1f75', // active icon color
      inactiveTintColor: 'grey', // inactive icon color
      style: {
        paddingTop: 2,
      },
    },
  },
);

const Stack = createStackNavigator(
  {
    BottomTab: {
      screen: BottomTab,
    },
    DetailsProduct: {
      screen: DetailsProduct,
    },
    Hotel: {
      screen: Hotel,
    },
  },
  {
    headerMode: 'none',
  },
);

const AppNavigation = createAppContainer(Stack);
export default AppNavigation;
