/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import AutoInvestmentsIndicators from './js/components/AutoInvestmentsIndicators';
// import AutoInvestmentsCarousel from './src/AutoInvestmentsCarousel';
// import AutoInvestmentsSettings from './src/AutoInvestmentsSettings';
// import {dataList} from './src/mock/dataMock';
import {Icon} from 'react-native-elements';
import {styles} from './js/Themes/Styles';
import {Provider} from 'react-redux';
import store from './js/index';

console.error = (error) => error.apply;

const App = () => {
  // const [item, setItem] = useState(dataList[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View style={styles.mainHeader}>
            <TouchableOpacity onPress={() => hideIndicators()}>
              <Icon name="clear" type="material" color="#1D1D1F" />
            </TouchableOpacity>
            <Text style={styles.pageHeading}>Auto-Investments</Text>
          </View>
          <AutoInvestmentsIndicators />
          {/* <AutoInvestmentsCarousel
          changeSettings={(index) => {
            if (index !== activeIndex) {
              setActiveIndex(index);
              setItem(dataList[index]);
            }
          }}
        /> */}
          {/* {item && <AutoInvestmentsSettings item={item} />} */}
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};
export default App;
