import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailWithTab from '../screens/home/DetailWithTab';
import DetailWithNoTab from '../screens/home/DetailWithNoTab';
import CustomHeader from '../layouts/Header/CustomHeader';
import {View, Text} from 'react-native';
import Home from '../screens/home/Home';
import useHiddenTab from '../hooks/useHiddenTab';
import styles from '../layouts/Header/styles';
import Icon from 'react-native-vector-icons/AntDesign';
const Stack = createNativeStackNavigator();
const HomeNavigator = ({navigation, route}) => {
  useHiddenTab({navigation, route});

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({navigation}) => (
            <CustomHeader
              left={<Text style={styles.leftTitle}>홈</Text>}
              right={<Icon name="shoppingcart" size={36} />}
              rightPress={() => navigation.navigate('ShoppingBasket')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="DetailWithTab"
        component={DetailWithTab}
        options={{
          header: ({navigation}) => (
            <CustomHeader
              left={<Icon name="arrowleft" size={36} />}
              leftPress={navigation.goBack}
              center={<Text style={styles.centerTitle}>detail with Tab</Text>}
            />
          ),
        }}
      />
      <Stack.Screen
        name="DetailWithNoTab"
        component={DetailWithNoTab}
        options={{
          header: ({navigation}) => (
            <CustomHeader
              left={<Icon name="arrowleft" size={36} />}
              leftPress={navigation.goBack}
              center={
                <Text style={styles.centerTitle}>detail with no Tab</Text>
              }
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
