import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import STAR_ICON from '../../asset/images/start.png';
import {hp, wp} from '../methods/commonMethods';

const RatingStarCard = props => {
  const {starImageStyle} = props
  return (
    <View>
      <View style={style.fleView}>
        <Image source={STAR_ICON} style={[style.starImageSTyle,starImageStyle]} />
        <View style={style.space} />
        <Image source={STAR_ICON} style={[style.starImageSTyle,starImageStyle]}/>
        <View style={style.space} />
        <Image source={STAR_ICON} style={[style.starImageSTyle,starImageStyle]} />
        <View style={style.space} />
        <Image source={STAR_ICON} style={[style.starImageSTyle,starImageStyle]} />
        <View style={style.space} />
        <Image source={STAR_ICON} style={[style.starImageSTyle,starImageStyle]} />
        <View style={style.space} />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  mainView: {
    alignItems: 'center',
  },
  fleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starImageSTyle: {height: hp(3.5), width: wp(4.5)},
  space: {
    width: wp(1),
  },
});
export default RatingStarCard;
