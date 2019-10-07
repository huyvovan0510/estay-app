import React from 'react';
import { SafeAreaView } from 'react-native';
import AppNavigation from './navigation';
import { Provider } from 'react-redux';
import store from '@src/Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
