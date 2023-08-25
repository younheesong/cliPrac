import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigator from './MainNavigator';
import Search from '../screens/search/Search';
import Notification from '../screens/notification/Notification';
import ShoppingBasket from '../screens/shoppingBasket/ShoppingBasket';
import CustomHeader from '../layouts/Header/CustomHeader';
import Icon from '../components/Icon';
import {Text} from 'react-native';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            header: ({navigation}) => (
              <CustomHeader
                left={<Icon name="leftArrow" />}
                leftPress={navigation.goBack}
                center={
                  <Text style={{fontSize: 16, fontWeight: '500'}}>Search</Text>
                }
              />
            ),
          }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            header: ({navigation}) => (
              <CustomHeader
                left={<Icon name="leftArrow" />}
                leftPress={navigation.goBack}
                center={
                  <Text style={{fontSize: 16, fontWeight: '500'}}>
                    Notification
                  </Text>
                }
              />
            ),
          }}
        />
        <Stack.Screen
          name="ShoppingBasket"
          component={ShoppingBasket}
          options={{
            header: ({navigation}) => (
              <CustomHeader
                left={<Icon name="leftArrow" />}
                leftPress={navigation.goBack}
                center={
                  <Text style={{fontSize: 16, fontWeight: '500'}}>
                    장바구니
                  </Text>
                }
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
