import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import store from './src/store';
import Routes from './src/routes';
import Logo from './assets/logo.svg';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#191920" barStyle="light-content" />
      <Logo style={{ position: 'absolute' }} />
      <Routes />
    </Provider>
  );
}
