import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkTransparent,
    justifyContent: 'center',
  },
  contentContainer: {
    margin: metrics.baseMargin * 2,
    borderRadius: metrics.borderRadius,
    padding: metrics.basePadding,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin,
    textAlign: 'center',
  },
  input: {
    borderColor: colors.light,
    borderRadius: metrics.borderRadius,
    borderWidth: 1,
    paddingHorizontal: metrics.basePadding / 2,
    marginHorizontal: metrics.baseMargin / 2,
  },
  buttonsView: {
    marginVertical: metrics.baseMargin,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    borderRadius: metrics.borderRadius,
    flex: 1,
    alignItems: 'center',
    paddingVertical: metrics.basePadding / 2,
    marginHorizontal: metrics.baseMargin / 2,
  },
  buttonSave: {
    backgroundColor: colors.success,
  },
  buttonCancel: {
    backgroundColor: colors.regular,
  },
  buttonText: {
    color: colors.white,
  },
});

export default styles;
