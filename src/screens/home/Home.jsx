import React from 'react';
import {Text, View, Button, TouchableOpacity, SafeAreaView} from 'react-native';
import BasketIcon from '../../components/Icon';
import Icon from '../../components/Icon';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Home Component</Text>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('DetailWithTab')}>
          <View style={{width: '100%', height: 200, backgroundColor: 'grey'}}>
            <Text>detail with Tab</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('DetailWithNoTab')}
          style={{marginTop: 10}}>
          <View style={{width: '100%', height: 200, backgroundColor: 'grey'}}>
            <Text>detail with no Tab</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Home;
