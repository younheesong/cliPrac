import React, {useEffect, useState} from 'react';
import {BackHandler, View, Text, SafeAreaView} from 'react-native';
import CustomHeader from '../layouts/Header/CustomHeader';

const useWebViewBackHandling = ({navigation, wvRef}) => {
  const [navState, changeNavState] = useState();
  useEffect(() => {
    const canGoBack = navState?.canGoBack;
    const onPressHardwareBackButton = () => {
      if (canGoBack) {
        wvRef.current.goBack();
        return true;
      } else {
        return false;
      }
    };

    // navigation change
    navigation.setParams({
      canGoBack: canGoBack ? wvRef.current.goBack : null,
    });

    // android back button
    BackHandler.addEventListener(
      'hardwareBackPress',
      onPressHardwareBackButton,
    );
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        onPressHardwareBackButton,
      );
    };
  }, [navState?.canGoBack]);

  return {changeNavState};
};

export default useWebViewBackHandling;
