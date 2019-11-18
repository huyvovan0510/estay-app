import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import AppNavigation from './navigation';
import { Provider } from 'react-redux';
import store from '@src/Redux/Store';
import Confirm from '@src/screens/Login';
import SplashScreen from 'react-native-splash-screen';
import Loadingss from '@src/screens/Search';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
    // <Loadingss />
  );
};

export default App;
