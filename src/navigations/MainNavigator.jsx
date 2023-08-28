import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoryNavigator from './CategoryNavigator';
import RankingNavigator from './RankingNavigator';
import HomeNavigator from './HomeNavigator';
import FavoriteNavigator from './FavoriteNavigator';
import MyPageNavigator from './MyPageNavigator';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import useToggleTab from '../hooks/useHiddenTab';
import Icon from 'react-native-vector-icons/AntDesign';
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
            return (
              <Icon
                name="bars"
                size={size}
                color={focused ? 'black' : 'grey'}
              />
            );
          },
          headerShown: false,
        })}></Tab.Screen>
      <Tab.Screen
        name="RankingTab"
        component={RankingNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Icon
                name="appstore-o"
                size={size}
                color={focused ? 'black' : 'grey'}
              />
            );
          },
          headerShown: false,
        }}></Tab.Screen>
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Icon
                name="home"
                size={size}
                color={focused ? 'black' : 'grey'}
              />
            );
          },
          headerShown: false,
        })}></Tab.Screen>
      <Tab.Screen
        name="FavoriateTab"
        component={FavoriteNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Icon
                name="hearto"
                size={size}
                color={focused ? 'black' : 'grey'}
              />
            );
          },
          headerShown: false,
        }}></Tab.Screen>
      <Tab.Screen
        name="MyPageTab"
        component={MyPageNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Icon
                name="user"
                size={size}
                color={focused ? 'black' : 'grey'}
              />
            );
          },
          headerShown: false,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default MainNavigator;
