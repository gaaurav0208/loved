import {StyleSheet} from 'react-native';
import Fonts from './Fonts';
import * as colors from './Colors';

const color = colors.default.automaticInvestment;
export const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    fontFamily: Fonts.type.silka,
    color: color.black,
    backgroundColor: color.pageBg,
  },
  mainHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    marginLeft: 15,
    marginRight: 15,
  },
  pageHeading: {
    fontFamily: Fonts.type.silkaBold,
    fontSize: 17,
    marginLeft: '25%',
    alignSelf: 'center',
  },
  containerIndicator: {
    flex: 1,
    backgroundColor: color.indicator,
    borderRadius: 15,
    padding: 15,
    margin: 15,
  },
  textContent: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    fontSize: 17,
    justifyContent: 'space-between',
  },
  question: {
    fontFamily: Fonts.type.silkaBold,
  },
  legends: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settingsContainer: {
    marginTop: 15,
    backgroundColor: color.indicatorsBg,
    padding: 15,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  carouselItems: {
    borderRadius: 10,
    padding: 10,
    height: 110,
  },
  items: {
    backgroundColor: color.automaticInvestmentsBg,
    marginBottom: 15,
    padding: 10,
    borderRadius: 15,
    borderBottomWidth: 0,
  },
  portfolio: {
    backgroundColor: color.automaticInvestmentsBg,
    marginBottom: 15,
    padding: 10,
    borderRadius: 15,
  },
  subheading: {fontFamily: Fonts.type.silkaBold, fontSize: 13, color: color.subheading},
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  type: {fontSize: 13, color: color.black, fontFamily: Fonts.type.silkaBold},
  title: {fontSize: 24},
  spaceBetweenWithMarginTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  appleIcon: {
    flexDirection: 'column',
    width: 40,
    borderRadius: 40,
    height: 40,
    backgroundColor: color.black,
    borderColor: color.black,
    borderWidth: 1,
    marginRight: 5,
    paddingTop: 2,
  },
  portfolioTitle: {fontSize: 18},
  emphasize: {fontFamily: Fonts.type.silkaBold},
  profileIcon: {
    width: 35,
    borderRadius: 35,
    height: 35,
    paddingTop: 2,
    borderColor: 'transparent',
    borderWidth: 1,
  },
});
