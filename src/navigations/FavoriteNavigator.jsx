import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Favorite from '../screens/favorite/Favorite';
import CustomHeader from '../layouts/Header/CustomHeader';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../layouts/Header/styles';

const Stack = createNativeStackNavigator();
const FavoriteNavigator = ({navigator}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{
          header: ({navigation, route}) =>
            route.params?.canGoBack ? (
              <CustomHeader
                left={<Icon name="arrowleft" size={36} />}
                leftPress={route.params.canGoBack}
              />
            ) : (
              <CustomHeader
                left={<Text style={styles.leftTitle}>찜</Text>}
                right={<Icon name="shoppingcart" size={36} />}
                rightPress={() => navigation.navigate('ShoppingBasket')}
              />
            ),
        }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteNavigator;
