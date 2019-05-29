import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  colloutContainer: {
    width: metrics.screenWidth * 0.5,
  },
  annotationContainer: {
    borderColor: colors.primary,
    borderRadius: metrics.screenWidth * 0.075,
    borderWidth: 5,
    height: metrics.screenWidth * 0.15,
    width: metrics.screenWidth * 0.15,
  },
  input: {},
  button: {},
  buttonText: {},
});

export default styles;
