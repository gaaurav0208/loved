import {StyleSheet} from 'react-native';
import Fonts
  from './Fonts';
import * as colors  from './Colors';

const color = colors.default.automaticInvestment;
export const styles = StyleSheet.create({
  scrollView: {
    marginTop: 0,
    height: '100%',
    padding: 20,
    backgroundColor: '#FFCC00'
  },
  mainHeader: {flexDirection: 'row', alignItems: 'center', marginTop: 60},
  pageHeading: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: '25%',
    alignSelf: 'center'
  },
  containerIndicator: {
    flex: 1,
    marginTop: 17,
    backgroundColor: color.indicator,
    borderRadius: 20,
    padding: 15,
  },
  textContent:{
    flex:1
  },
  header: {
    flexDirection: "row",
    fontFamily: Fonts.type.Silka,
    fontSize: 17,
    justifyContent: 'space-between'
  },
  question: {
    fontWeight: "bold",
  },
  legends: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  settingsContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: color.indicatorsBg,
    padding: 20,
    margin: -20,
    borderRadius: 20,
    borderBottomWidth: 0,
  },
  carouselItems: {
    borderRadius: 10,
    padding: 10,
    height: 110,
    marginLeft: 25,
    marginRight: 25
  },
  items: {
    backgroundColor: color.automaticInvestmentsBg,
    marginBottom: 20,
    padding: 10,
    borderRadius: 20,
    borderBottomWidth: 0,
  },
  portfolio: {
    backgroundColor: color.automaticInvestmentsBg,
    marginBottom: 20,
    padding: 10,
    borderRadius: 20,
  },
  subheading: {fontWeight: 'bold', fontSize: 13, color: color.subheading},
  spaceBetween: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  type: {fontWeight: 'bold', fontSize: 13, color: color.black},
  title: {fontWeight: 'bold', fontSize: 24},
  spaceBetweenWithMarginTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  appleIcon: {
    flexDirection: 'column',
    width: 50,
    borderRadius: 40,
    height: 50,
    backgroundColor: color.black,
    borderColor: color.black,
    borderWidth: 1,
    marginRight: 5,
  },
  portfolioTitle: {fontSize: 18},
  emphasize: {fontWeight: 'bold'},
  profileIcon: {
    width: 30,
    borderRadius: 30,
    height: 30,
    paddingTop: 1,
    borderColor: 'transparent',
    borderWidth: 1,
  }
});
