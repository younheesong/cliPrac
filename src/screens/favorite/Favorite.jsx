import React, {useEffect, useRef, useState} from 'react';
import {View, Text, SafeAreaView, BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';
import CustomHeader from '../../layouts/Header/CustomHeader';
import Icon from '../../components/Icon';
import useWebViewNavState from '../../hooks/useWebViewNavState';
const Favorite = ({navigation}) => {
  const wvRef = useRef(null);
  const {changeNavState} = useWebViewNavState({navigation, wvRef});

  useEffect(() => {
    console.log(navigation);
    navigation.setOptions({
      tabBarStyle: {display: 'none'},
    });
    console.log(navigation.options);
  }, []);

  const handleMessageFromWebview = data => {
    // data 처리 로직
    console.log('from webview: ' + data);
    switch (data) {
      case 'SHOW_HEADER':
        navigation.setOptions({
          headerShown: true,
        });
        break;
      case 'HIDE_HEADER':
        console.log(11);
        navigation.setOptions({
          headerShown: false,
        });
        break;
      case 'SHOW_TAB':
        navigation.getParent().setOptions({
          tabBarStyle: {display: 'flex'},
        });
        break;
      case 'HIDE_TAB':
        console.log('hello');
        navigation.getParent().setOptions({
          tabBarStyle: {display: 'none'},
        });
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <WebView
        ref={wvRef}
        source={{uri: 'http://10.43.100.120:3000/products'}}
        style={{flex: 1}}
        onMessage={({nativeEvent}) => {
          const data = JSON.parse(nativeEvent.data);
          handleMessageFromWebview(data);
        }}
        onNavigationStateChange={navState => {
          changeNavState(navState);
        }}
      />
    </SafeAreaView>
  );
};
export default Favorite;
