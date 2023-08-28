import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import Category from '../screens/category/Category';
import CustomHeader from '../layouts/Header/CustomHeader';
import styles from '../layouts/Header/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
              right={<Icon name="search" size={36} size={36} />}
              rightPress={() => navigation.navigate('Search')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default CategoryNavigator;
