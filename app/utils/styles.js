import { colors } from './colors';

export default Styles = {
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  bottomButton: {
    marginTop: 32,
    width: '80%',
  },
  customTextInput: {
    marginTop: 40,
    width: '80%',
  },
  errorText: { width: '80%', marginLeft: 32, marginTop: 8 },
  textBase: {
    fontFamily: 'HKGroteskMedium',
  },
  textLight: {
    fontFamily: 'HKGroteskLight',
  },
  textBold: {
    fontFamily: 'HKGroteskBold',
  },
  text: {
    width: '80%',
    marginTop: 80,
    fontSize: 24,
    textAlign: 'center',
  },
  pageHeaderText: {
    fontFamily: 'HKGroteskMedium',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 22,
    fontWeight: '300',
    color: colors.textColorBlack,
    lineHeight: 26,
    letterSpacing: -1,
  },
  formGroupContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  backNavigation: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  boldTextStyle: { fontWeight: 'bold' },
  textLabel: { fontSize: 14, fontWeight: '400', color: colors.labelText },
  fullWidth: {
    width: '100%'
  },
  marginTop16: {
    marginTop: 16
  },
  marginBottom8: {
    marginBottom: 8
  },
  marginBottom16: {
    marginBottom: 16
  },
  marginBottom32: {
    marginBottom: 32
  },
  disabledButton: {
    backgroundColor: colors.lightGray,
    color: colors.textColorSecondary,
  }
};
