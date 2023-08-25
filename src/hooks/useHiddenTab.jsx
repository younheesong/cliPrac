import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';

const useHiddenTab = ({navigation, route}) => {
  const tabHiddenRoutes = ['DetailWithNoTab']; // 탭을 숨기고 싶은 페이지 리스트

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({
        tabBarStyle: {display: 'none'},
      });
    } else {
      navigation.setOptions({
        tabBarStyle: {display: 'flex'},
      });
    }
  }, [navigation, route]);
};

export default useHiddenTab;
