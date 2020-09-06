import React, {useState, Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import AnimatableProgressBar from './AnimatableProgressBar';
import * as colors from '../Themes/Colors';
import {QUESTION, ANSWER, AGE_MAX, AGE_ZERO} from '../Constants';
import {getDataUsingSaga} from '../../js/actions/index';
import {styles} from '../Themes/Styles';

function AutoInvestmentsIndicators(props) {
  const [showIndicators, setShowIndicators] = useState(true);

  const hideIndicators = () => {
    setShowIndicators(false);
  };

  const getIndicatorBgColor = (index) => {
    return index < props.indicators.length - 1 && index !== 0
      ? colors.default.automaticInvestment.subheading
      : colors.default.automaticInvestment.black;
  };

  useEffect(() => {
    props.getDataUsingSaga('https://raw.githubusercontent.com/gaaurav0208/loved/master/js/mock/indicators.json');
  }, []);

  return (
    showIndicators && (
      <View style={styles.containerIndicator}>
        <View style={styles.header}>
          <View style={styles.textContent}>
            <Text style={styles.question}>{QUESTION}</Text>
            <Text style={{flexWrap: 'wrap', fontFamily: 'Silka', fontSize: 19}}>
              {ANSWER}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => hideIndicators()}
            style={styles.question}>
            <Icon
              name="clear"
              type="material"
              color={colors.default.automaticInvestment.black}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Fragment>
              <StatusBar barStyle="dark-content" />
              <SafeAreaView
                style={{
                  flex: 1,
                  ...styles.spaceBetween,
                  alignItems: 'flex-end',
                }}>
                {props.indicators.map((item, index) => {
                  return (
                    <AnimatableProgressBar
                      current={item.current}
                      width={item.width}
                      borderColor="transparent"
                      height={20}
                      borderRadius={30}
                      borderWidth={2}
                      foreColor={
                        index !== 0
                          ? colors.default.automaticInvestment.pageBg
                          : colors.default.automaticInvestment.black
                      }
                      backgroundColor={getIndicatorBgColor(index)}
                      textColor="white"
                      interval={500}
                    />
                  );
                })}
              </SafeAreaView>
            </Fragment>
          </View>
          <View style={styles.legends}>
            <Text style={styles.emphasize}>{AGE_ZERO}</Text>
            <Text style={styles.emphasize}>{AGE_MAX}</Text>
          </View>
        </View>
      </View>
    )
  );
}

const mapsStateToProps = (state) => {
  return {
    indicators: state.remoteIndicators.slice(0, 10),
  };
};

export default connect(mapsStateToProps, {getDataUsingSaga})(
  AutoInvestmentsIndicators,
);
