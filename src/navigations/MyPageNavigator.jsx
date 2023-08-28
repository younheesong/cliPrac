import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import MyPage from '../screens/myPage/MyPage';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomHeader from '../layouts/Header/CustomHeader';
import {View, Text} from 'react-native';
import styles from '../layouts/Header/styles';

const Stack = createNativeStackNavigator();
const MyPageNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{
          header: ({navigation}) => (
            <CustomHeader
              left={<Text style={styles.leftTitle}>마이페이지</Text>}
              right={<Icon name="bells" size={36} />}
              rightPress={() => navigation.navigate('Notification')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MyPageNavigator;
