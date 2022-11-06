import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {hp, wp} from '../methods/commonMethods';
import BACK_HANDLET from '../../asset/images/arrow-left.png';
import StarCard from '../component/StarCard';
import {
  AllReviewData,
  ALL_REVIEW_TEXT,
  FILTER_TEXT,
  reviewData,
} from '../constants/constantData';
import ReviewCard from '../component/ReviewCard';
import PLUS_ICON from '../../asset/images/plus.png';

const ReviewScreen = ({navigation}) => {
  const _renderStarCard = item => {
    return (
      <View style={style.extraRightMargin}>
        <StarCard valueText={item.reviewValue} needStarIcon={item.needStar} />
      </View>
    );
  };

  const _renderReviewData = item => {
    return (
      <View>
        <ReviewCard profilePic={item.profilePic} text={item.review} />
        <View style={style.height} />
        <View style={style.height} />
      </View>
    );
  };
  return (
    <View style={style.mainView}>
      <View style={style.headerSTyle}>
        <View style={style.flexView}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={BACK_HANDLET} style={style.arrowStyle} />
          </TouchableOpacity>
          <Text style={style.testStyle}>{ALL_REVIEW_TEXT}</Text>
        </View>
      </View>
      <View style={style.height} />
      <View style={style.height} />
      <View style={style.contentMainView}>
        <View style={style.flexView}>
          <Text style={style.filterTextStyle}>{FILTER_TEXT}</Text>
          <View style={style.width} />

          <FlatList
            data={reviewData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => _renderStarCard(item)}
          />
        </View>
        <View style={style.height} />
        <View style={style.height} />
        <View>
          <FlatList
            data={AllReviewData}
            renderItem={({item}) => _renderReviewData(item)}
            style={style.bottomMargin}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={style.buttonStyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate('WriteReviewScreen')}>
            <Image source={PLUS_ICON} style={style.ButtonSize} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  headerSTyle: {
    backgroundColor: 'white',
    height: hp(9),
    width: '100%',
  },
  arrowStyle: {
    margin: hp(2),
    marginTop: hp(2.8),
  },
  testStyle: {
    fontSize: hp(2.5),
    color: 'black',
    fontWeight: 'bold',
  },
  flexView: {flexDirection: 'row', alignItems: 'center'},
  contentMainView: {
    width: '90%',
    alignSelf: 'center',
  },
  filterTextStyle: {
    fontSize: hp(2.4),
    color: '#a6a6a6',
    fontWeight: 'bold',
  },
  height: {
    height: hp(1),
  },
  extraRightMargin: {marginRight: wp(2.5)},
  width: {width: wp(2)},
  buttonStyle: {
    width: wp(1),
    height: hp(1),
    position: 'absolute',
    bottom: hp(30),
    right: hp(9),
  },
  ButtonSize: {
    width: wp(18),
    height: hp(9.5),
  },
  bottomMargin: {marginBottom: hp(25)},
  mainView: {flex: 1},
});
export default ReviewScreen;
