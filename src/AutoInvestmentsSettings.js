import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from './Themes/styles';
import { NEXT_TRANSFER, PORTFOLIO_HEADING, BALANCE } from './Themes/Constants';

export default function AutoInvestmentsIndicators(props) {
  
  const {items, portfolio} = props.item;

  const renderItem = (item) => {
    return (
      <View style={styles.items}>
        <View style={styles.spaceBetween}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.amount}</Text>
        </View>

        <View style={styles.spaceBetween}>
          <Text style={styles.subheading}>
           {NEXT_TRANSFER} {item.nextTransferDate}
          </Text>
          <Text style={styles.type}>{item.type}</Text>
        </View>

      </View>
    );
  };

  const renderPortfolioItem = (item) => {
    return (
      <View style={styles.spaceBetweenWithMarginTop}>
        <View style={styles.spaceBetweenWithMarginTop}>
          <View
            style={styles.appleIcon}>
            <Icon size={40} color="#ffffff" name="apple" type="font-awesome" />
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text style={styles.portfolioTitle}>{item.title}</Text>
            <Text style={styles.subheading}>{BALANCE} {item.balance}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.title}>{item.status}</Text>
        </View>
      </View>
    );
  };

  const renderPortfolio = () => {
    return (
      <View style={styles.portfolio}>
        <View style={{marginBottom: 20}}>
          <View style={styles.spaceBetween}>
            <Text style={styles.title}>PortFolio</Text>
            <Text style={styles.emphasize}>{portfolio.type}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.subheading}>
            {NEXT_TRANSFER} {portfolio.nextTransferDate}
            </Text>
          </View>
        </View>
        {portfolio.items.map((item, index) => renderPortfolioItem(item))}
      </View>
    );
  };

  return (
    <View style={styles.settingsContainer}>
      <Text
        style={{
          display: 'flex',
          alignSelf: 'center',
          marginBottom: 10,
          fontWeight: 'bold',
          fontSize: 17
        }}>
        {PORTFOLIO_HEADING} {props.item.title}
      </Text>
      {items.map((item, index) => renderItem(item))}
      {renderPortfolio()}
    </View>
  );
};
