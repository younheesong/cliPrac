/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/navigations/AppNavigator';

const App: () => Node = () => {
  useEffect(() => {
    try {
      console.log('hdafa');
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000); //스플래시 활성화 시간 1초
    } catch (e) {
      console.log(e.message);
    }
  });
  return <AppNavigator />;
};

export default App;
