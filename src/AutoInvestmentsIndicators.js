import React, { useState, Fragment } from "react";
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity } from "react-native";
import AnimatableProgressBar from "./AnimatableProgressBar";
import {indicators} from './dataMock';
import { Icon } from 'react-native-elements'
import * as colors  from './Themes/Colors';
import {styles} from './Themes/styles';

export default function AutoInvestmentsIndicators() {
  const [showIndicators, setShowIndicators] = useState(true);

  const hideIndicators = () => {
    setShowIndicators(false);
  };

  const getIndicatorBgColor = (index) => {
    return index < indicators.length - 1 && index !== 0? 'gray' : '#1D1D1F';
  };

  return (
    showIndicators && (
      <View style={styles.containerIndicator}>
        <View style={styles.header}>
          <View style={styles.textContent}>
            <Text style={styles.emphasize}>Why invest automatically?</Text>
            <Text style={{flexWrap: 'wrap'}}>
              If someone invest $50 each month from age 0, today you could have
              had $xx,xxx.
            </Text>
          </View>
          <TouchableOpacity onPress={() => hideIndicators()}>
            <Icon
              name='clear'
              type='material'
              color={colors.default.automaticInvestment.black}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Fragment>
              <StatusBar barStyle='dark-content' />
              <SafeAreaView
                style={{
                  flex: 1,
                  ...styles.spaceBetween,
                  alignItems: 'flex-end'
                }}
              >
                {indicators.map((item, index) => {
                  return (
                    <AnimatableProgressBar
                      current={item.current}
                      maximum={item.maximum}
                      width={item.width}
                      borderColor='transparent'
                      height={20}
                      borderRadius={30}
                      borderWidth={2}
                      foreColor={index !== 0 ? '#FFCC00' : '#1D1D1F'}
                      minimum={item.minimum}
                      backgroundColor={getIndicatorBgColor(index)}
                      type='increase'
                      textColor='white'
                      interval={500}
                    />
                  );
                })}
              </SafeAreaView>
            </Fragment>
          </View>
          <View style={styles.legends}>
            <Text>Age 0</Text>
            <Text>Age 35</Text>
          </View>
        </View>
      </View>
    )
  );
};
