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
import { data } from '@src/data';
import { ScrollView } from 'react-native-gesture-handler';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
    // <ScrollView style={{ flex: 1, flexDirection: 'row' }}>
    //   {data.map((item, index) => {
    //     return <Text>index</Text>;
    //   })}
    // </ScrollView>
  );
};

export default App;
