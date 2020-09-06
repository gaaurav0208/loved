import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Icon} from 'react-native-elements';
import {styles} from '../Themes/Styles';
import Fonts from '../Themes/Fonts';
import {connect} from 'react-redux';
import {getUsersDataUsingSaga} from '../../js/actions/index';


function AutoInvestmentsCarousel(props) {
  const [carousel, setCarousel] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    props.getUsersDataUsingSaga('https://raw.githubusercontent.com/gaaurav0208/loved/master/js/mocks/users.json');

   /*  carouselItems.push({
      title: 'Add',
      type: 'empty',
    });*/
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
    return index < props.users.length - 1 ? (
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
            fontFamily: Fonts.type.silkaBold,
            color: renderActiveItem(index).foreColor,
          }}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={{marginLeft: -212}}>
      <Carousel
        ref={(c) => {
          setCarousel(c);
        }}
        data={props.users}
        renderItem={renderItem}
        sliderWidth={610}
        itemWidth={150}
        onSnapToItem={index => {
          if (index < carouselItems.length - 1) {
            setActiveIndex(index);
            props.changeSettings(users[index].username);
          }
        }}
      />
    </View>
  );
};

const mapsStateToProps = (state) => {
  return {
    users: state.remoteUsers.slice(0, 10),
  };
};

export default connect(mapsStateToProps, {getUsersDataUsingSaga})(
  AutoInvestmentsCarousel,
);
