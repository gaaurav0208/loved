import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {dataList} from './dataMock';
import {Icon} from 'react-native-elements';
import {styles} from './Themes/styles';

export default function AutoInvestmentsCarousel(props) {
  const [carousel, setCarousel] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = dataList;

  useEffect(() => {
    carouselItems.push({
      title: 'Add',
      type: 'empty',
    });
  }, []);

  const renderActiveItem = (index) => {
    let bgColor = '#F2F2F2',
      foreColor = '#969DA5';
    if (activeIndex === index) {
      bgColor = '#1D1D1F';
      foreColor = '#fff';
    }
    return {
      bgColor,
      foreColor,
    };
  };

  const renderIconColor = (index) => {
    let bgColor = '#969DA5',
      foreColor = '#F2F2F2';
    if (activeIndex === index) {
      bgColor = '#ffffff';
      foreColor = '#1D1D1F';
    }

    return {
      bgColor,
      foreColor,
    };
  };

  const renderIcon = (index) => {
    return index < dataList.length - 1 ? (
      <Icon
        name="user"
        type="font-awesome"
        color={renderIconColor(index).foreColor}
      />
    ) : (
      <Icon
        name="plus"
        type="font-awesome"
        color={renderIconColor(index).foreColor}
      />
    );
  };
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          ...styles.carouselItems,
          backgroundColor: renderActiveItem(index).bgColor,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              ...styles.profileIcon,
              backgroundColor: renderIconColor(index).bgColor,
            }}>
            {renderIcon(index)}
          </View>
          {activeIndex === index && (
            <Text style={{fontSize: 12, color: '#FFCC00'}}>{'Open'}</Text>
          )}
        </View>
        <Text
          style={{
            ...styles.title,
            position: 'absolute',
            bottom: 10,
            left: 10,
            fontWeight: 'bold',
            color: renderActiveItem(index).foreColor,
          }}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={{marginTop: 20}}>
      <Carousel
        ref={(c) => {
          setCarousel(c);
        }}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={350}
        itemWidth={180}
        onSnapToItem={index => {
          if (index < carouselItems.length - 1) {
            setActiveIndex(index);
            props.changeSettings(index);
          }
        }}
      />
    </View>
  );
};
