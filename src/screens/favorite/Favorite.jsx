import React, {useEffect, useRef, useState} from 'react';
import {View, Text, SafeAreaView, BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';
import CustomHeader from '../../layouts/Header/CustomHeader';
import Icon from '../../components/Icon';
import useWebViewNavState from '../../hooks/useWebViewNavState';
const Favorite = ({navigation}) => {
  const wvRef = useRef(null);
  const {changeNavState} = useWebViewNavState({navigation, wvRef});

  const handleMessageFromWebview = data => {
    // data 처리 로직
    console.log('from webview: ' + data);
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
