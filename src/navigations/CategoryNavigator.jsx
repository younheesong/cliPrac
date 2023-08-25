import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import Category from '../screens/category/Category';
import CustomHeader from '../layouts/Header/CustomHeader';
import Icon from '../components/Icon';
import styles from '../layouts/Header/styles';
const Stack = createNativeStackNavigator();
const CategoryNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoryScreen"
        component={Category}
        options={{
          header: ({navigation}) => (
            <CustomHeader
              left={<Text style={styles.leftTitle}>카테고리</Text>}
              right={<Icon name="search" fill={'#fff'} stroke={'#fff'} />}
              rightPress={() => navigation.navigate('Search')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default CategoryNavigator;
