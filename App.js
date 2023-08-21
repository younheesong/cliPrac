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
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import {WebView} from 'react-native-webview';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>home screen1</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('naver')}
        style={{marginTop: 10}}>
        <Text style={{backgroundColor: 'white', borderRadius: 10, padding: 10}}>
          naver로 이동하기 💨
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const DetailScreen = () => {
  return <WebView source={{uri: 'https://www.naver.com/'}} style={{flex: 1}} />;
};
const Tab = createBottomTabNavigator();
const App: () => Node = () => {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000); //스플래시 활성화 시간 2초
    } catch (e) {
      console.log(e.message);
    }
  });

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="naver" component={DetailScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
