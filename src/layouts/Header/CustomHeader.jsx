import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
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
