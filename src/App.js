/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import Router from './router/index'
import store from './Redux/store'
import { StatusBar } from 'react-native';

const MainApp = () => {
  return (
    <>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)"/>
        <Router/>
    </NavigationContainer>
    </>
  )
}

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <MainApp/>
    </Provider>
  );
};


export default App;
