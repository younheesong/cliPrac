import {StyleSheet} from 'react-native';

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
  leftTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  centerTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
