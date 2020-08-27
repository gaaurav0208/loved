/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './src/Themes/styles';
import AutoInvestmentsIndicators from './src/AutoInvestmentsIndicators';
import AutoInvestmentsCarousel from './src/AutoInvestmentsCarousel';
import AutoInvestmentsSettings from './src/AutoInvestmentsSettings';
import {dataList} from './src/dataMock'; 
import {Icon} from 'react-native-elements';
const App = () => {
  const [item, setItem] = useState(dataList[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ScrollView
        style={styles.scrollView}>
        <View style={styles.mainHeader}>
        <TouchableOpacity onPress={() => hideIndicators()}>
            <Icon name="clear" type="material" color="#1D1D1F" />
          </TouchableOpacity>
        <Text
          style={styles.pageHeading}>
          Auto-Investments
        </Text>
       
        </View>
        <AutoInvestmentsIndicators />
        <AutoInvestmentsCarousel
          changeSettings={(index) => {
            if (index !== activeIndex) {
              setActiveIndex(index);
              setItem(dataList[index]);
            }
          }}
        />
        {item && <AutoInvestmentsSettings item={item} />}
      </ScrollView>
  );
};
export default App;
