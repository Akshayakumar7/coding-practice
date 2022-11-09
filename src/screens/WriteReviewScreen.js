import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CategoryCard from '../component/CategoryCard';
import {hp, wp} from '../methods/commonMethods';
import SHOE from '../../asset/images/shoe1.png';
import RatingStarCard from '../component/RatingStarCard';
import { RATING_TEXT, SHOES_TEXT, SMALL_LETTER_SUBMIT_TEXT, SUGGESTION_TEXT } from '../constants/constantData';

const WriteReviewScreen = () => {
  return (
    <View style={style.mainView}>
      <View style={style.contentMainView}>
        <View style={style.flexView}>
          <View style={style.cardWidth}>
            <CategoryCard
              customCardStyle={style.cardView}
              image={SHOE}
              productStyle={style.imageStyle}
            />
          </View>
          <View style={style.productTextWidth}>
            <Text style={style.textStyle}>{SHOES_TEXT}</Text>
          </View>
        </View>
        <View style={style.minHeight} />
        <View style={style.extraHeight} />
        <View>
          <Text style={style.reviewText}>{RATING_TEXT}</Text>
          <View style={style.minHeight} />
          <RatingStarCard starImageStyle={style.ratingStyle} />
          <View style={style.extraHeight} />
          <View style={style.minHeight} />
          <Text style={style.reviewText}>{SUGGESTION_TEXT}</Text>
          <View style={style.minHeight} />
          <View style={style.minHeight} />
        </View>
        <View style={style.reviewBorder}>
          <TextInput placeholder="Good quality & very original product" />
        </View>
        <View style={style.wideHeight} />
        <TouchableOpacity style={style.buttonBorder}>
          <Text style={style.submitTextStyle}>{SMALL_LETTER_SUBMIT_TEXT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  flexView: {
    flexDirection: 'row',
  },
  contentMainView: {
    width: '90%',
    alignSelf: 'center',
    margin: hp(2),
  },
  cardView: {height: hp(10.5), width: wp(20)},
  imageStyle: {
    height: hp(8),
    width: wp(14),
  },
  textStyle: {
    fontSize: hp(3),
    lineHeight: hp(5),
    color:'#00000080'
  },
  extraHeight: {
    height: hp(2),
  },
  reviewText: {
    fontSize: hp(2.5),
    color:'#00000080'
  },
  minHeight: {
    height: hp(1),
  },
  reviewBorder: {
    height: hp(25),
    width: wp(90),
    borderColor: '#ECEEF0',
    borderWidth: hp(0.2),
    borderRadius: hp(1),
  },
  buttonBorder: {
    backgroundColor: '#FFC33A',
    borderColor: '#FFC33A',
    borderWidth: hp(0.15),
    borderRadius: hp(1),
  },
  submitTextStyle: {
    fontSize: hp(3),
    textAlign: 'center',
    padding: hp(2),
    color:'black'
  },
  mainView: {backgroundColor: 'white', flex: 1},
  cardWidth:{width: '27%'},
  productTextWidth:{width: '75%'},
  ratingStyle:{height: hp(6), width: wp(8)},
  wideHeight:{
    height:hp(8)
  }
});
export default WriteReviewScreen;
