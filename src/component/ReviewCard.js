import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import PROFILE from '../../asset/images/profile1.png';
import {hp, wp} from '../methods/commonMethods';
import RatingStarCard from './RatingStarCard';

const ReviewCard = props => {
  const {profilePic, text} = props;
  return (
    <View>
      <View style={style.cardView}>
        <View style={style.height} />
        <View style={style.height} />
        <View style={style.flexView}>
          <Image source={profilePic} style={style.imageStyle} />
          <View style={style.subView}>
            <View style={style.minimumWidth} />
            <Text style={style.reviewTextStyle}>{text}</Text>
            <View style={style.largeHeight} />
            <RatingStarCard />
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
};
const style = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    borderColor: 'white',
    width: '100%',
    padding: hp(1),
    borderRadius: hp(2),
  },
  flexView: {
  flexDirection: 'row'
  },
  reviewTextStyle: {
    fontSize: hp(2.2),
    width: '90%',
    lineHeight: hp(4),
    color:'#00000080'
  },
  subView: {flex: 2, flexWrap: 'wrap'},
  minimumWidth: {width: wp(1)},
  imageStyle: {margin: hp(1.3)},
  largeHeight: {
    height: hp(1.5),
  },
  height: {
    height: hp(1),
  },
});
export default ReviewCard;
