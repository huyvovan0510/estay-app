import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import Home from '../src/screens/Home';
import DetailsProduct from '../src/screens/DetailsProduct';
import Login from '../src/screens/Login';
import Hotel from '@src/screens/ListProduct/Hotel';
import Setting from '../src/screens/Setting';
import map from '../src/screens/map';
import getTabBarIcon from './getBarIcon';
import BookCalendar from '@src/screens/BookCalendar';
import Confirm from '@src/screens/Confirm';
import Ticket from '@src/screens/Ticket';
import History from '@src/screens/history';
import Search from '@src/screens/Search';
import HomeStay from '@src/screens/ListProduct/HomeSay';
import Motel from '@src/screens/ListProduct/Motel';

const BottomTab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    map: {
      screen: map,
    },
    History: {
      screen: History,
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
    BookCalendar: {
      screen: BookCalendar,
    },
    Confirm_sc: {
      screen: Confirm,
    },
    HomeStay: {
      screen: HomeStay,
    },
    Motel: {
      screen: Motel,
    },
    Search:{
      screen:Search
    }
  },
  {
    headerMode: 'none',
  },
);
const Swich = createSwitchNavigator({
  Stack: {
    screen: Stack,
  },
  Ticket: {
    screen: Ticket,
  },
  Login: {
    screen: Login,
  },
});

const AppNavigation = createAppContainer(Swich);
export default AppNavigation;
