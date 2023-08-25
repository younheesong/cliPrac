import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

type headerProps = {
  center: React.ReactNode,
  centerPress: Function,
  left: React.ReactNode,
  leftPress: Function,
  right: React.ReactNode,
  rightPress: Function,
};

export default function CustomHeader({
  center,
  centerPress,
  left,
  leftPress,
  right,
  rightPress,
}: headerProps) {
  return (
    <View style={styles.container}>
      {left && (
        <TouchableOpacity
          onPress={leftPress}
          style={styles.left}
          disabled={leftPress ? false : true}>
          {left}
        </TouchableOpacity>
      )}
      {center && (
        <TouchableOpacity
          onPress={centerPress}
          disabled={centerPress ? false : true}
          style={styles.center}>
          {center}
        </TouchableOpacity>
      )}

      {right && (
        <TouchableOpacity
          onPress={rightPress}
          style={styles.right}
          disabled={rightPress ? false : true}>
          {right}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  center: {
    height: '100%',
    zIndex: -1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    left: 0,
  },
  left: {
    position: 'absolute',
    left: 10,
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  right: {
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
  },
});
