import React, {Component} from 'react';
import {View, Animated} from 'react-native';

export default class AnimatableProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
    };
    this.widthAnimation = new Animated.Value(0);
    this.backgroundInterpolationValue = null;
  }

  componentDidMount() {
    this.animateSuddendly();
  }

  animateSuddendly() {
    const currentPercent = this.state.current;
    const toValue = currentPercent;
      Animated.timing(this.widthAnimation, {
        toValue: toValue,
        duration: 5000,
      }).start();
  }

  render() {
    return (
      <View
        style={{
          width: this.props.height,
          marginRight: 5,
          height: this.props.width,
          borderRadius: this.props.borderRadius,
          overflow: 'visible',
          backgroundColor: this.props.foreColor || '#FFCC00',
          transform: [{rotate: '180deg'}],
        }}>
        <Animated.View
          style={{
            height: this.widthAnimation,
            width: this.props.height,
            backgroundColor:
              this.backgroundInterpolationValue || this.props.backgroundColor,
            borderRadius: this.props.borderRadius,
            zIndex: 10,
          }}></Animated.View>
      </View>
    );
  }
};