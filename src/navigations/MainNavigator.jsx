import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoryNavigator from './CategoryNavigator';
import RankingNavigator from './RankingNavigator';
import HomeNavigator from './HomeNavigator';
import FavoriteNavigator from './FavoriteNavigator';
import MyPageNavigator from './MyPageNavigator';
import Icon from '../components/Icon';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import useToggleTab from '../hooks/useHiddenTab';
const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarShowLabel: false}}
      initialRouteName="HomeTab">
      <Tab.Screen
        name="CategoryTab"
        component={CategoryNavigator}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="menu" width={size} heigth={size} />;
          },
          headerShown: false,
        })}></Tab.Screen>
      <Tab.Screen
        name="RankingTab"
        component={RankingNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="dashboard" width={size} heigth={size} />;
          },
          headerShown: false,
        }}></Tab.Screen>
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="home" width={size} heigth={size} />;
          },
          headerShown: false,
        })}></Tab.Screen>
      <Tab.Screen
        name="FavoriateTab"
        component={FavoriteNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="heart" width={size} heigth={size} />;
          },
          headerShown: false,
        }}></Tab.Screen>
      <Tab.Screen
        name="MyPageTab"
        component={MyPageNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="user" width={size} heigth={size} />;
          },
          headerShown: false,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default MainNavigator;
