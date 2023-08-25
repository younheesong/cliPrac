import {View, Text, SafeAreaView, Button} from 'react-native';
import React, {useRef, useState} from 'react';
import {WebView} from 'react-native-webview';
const Ranking = () => {
  const [selcted, setSelected] = useState(null);
  const wvRef = useRef(null);
  const postMessage = data => {
    // data 전송 로직
    if (!wvRef.current) return;
    wvRef.current.postMessage(data);
  };
  const handleMessageFromWebview = data => {
    // data 처리 로직
    console.log('from webview: ' + data);
    setSelected(data);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{marginHorizontal: 20}}>
        <Text>클릭한 아이템: {selcted} 번 아이템</Text>
        <Button
          title="전송"
          onPress={() => postMessage('this message from rn')}></Button>
      </View>

      <WebView
        ref={wvRef}
        source={{uri: 'http://10.43.100.120:3000'}}
        style={{flex: 1}}
        onMessage={({nativeEvent}) => {
          const data = JSON.parse(nativeEvent.data);
          handleMessageFromWebview(data);
        }}
      />
    </View>
  );
};
export default Ranking;
