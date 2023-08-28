import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  BackHandler,
  ActivityIndicator,
} from 'react-native';
import {WebView} from 'react-native-webview';
import CustomHeader from '../../layouts/Header/CustomHeader';
import useWebViewBackHandling from '../../hooks/useWebViewBackHandling';
const Favorite = ({navigation}) => {
  const wvRef = useRef(null);
  const {changeNavState} = useWebViewBackHandling({navigation, wvRef});

  const handleMessageFromWebview = data => {
    switch (data) {
      case 'SHOW_HEADER':
        navigation.setOptions({
          headerShown: true,
        });
        break;
      case 'HIDE_HEADER':
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
        source={{uri: 'http://10.43.100.95:3000/products'}}
        style={{flex: 1}}
        onMessage={({nativeEvent}) => {
          const data = JSON.parse(nativeEvent.data);
          handleMessageFromWebview(data);
        }}
        onNavigationStateChange={navState => {
          changeNavState(navState);
        }}
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            style={{position: 'absolute', height: '100%', width: '100%'}}
          />
        )}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
};
export default Favorite;
