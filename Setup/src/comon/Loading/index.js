import React from 'react';

import AppNavigation from './navigation';
import { Provider } from 'react-redux';
import store from '@src/Redux/Store';

const Loading = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default Loading;
