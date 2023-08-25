import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Ranking from '../screens/ranking/Ranking';
import CustomHeader from '../layouts/Header/CustomHeader';
import Icon from '../components/Icon';
import {View, Text} from 'react-native';
import styles from '../layouts/Header/styles';

const Stack = createNativeStackNavigator();
const RankingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ranking"
        component={Ranking}
        options={{
          header: ({navigation}) => (
            <CustomHeader
              left={<Text style={styles.leftTitle}>❤️‍🔥랭킹 아이템❤️‍🔥</Text>}
              right={<Icon name="search" fill={'#fff'} stroke={'#fff'} />}
              rightPress={() => navigation.navigate('Search')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default RankingNavigator;
