import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import RatingStarCard from '../component/RatingStarCard';
import {hp, wp} from '../methods/commonMethods';
import ARROW_ICON from '../../asset/images/rightarrow.png';
import {
  ADD_REVIEW_TEXT,
  ADD_TO_CART_TEXT,
  BUY_NOW_TEXT,
  imageUrlArray,
  PRICE_TEXT,
  PRODUCT_TEXT,
  RELEATED_PRODUCT_TEXT,
  SEE_DESCRIPTION_TEXT,
  SEE_REVIEW_TEXT,
  SELECT_ALL_TEXT,
  shoesData,
} from '../constants/constantData';
import ProductCard from '../component/productCard';
import {ImageSlider} from 'react-native-image-slider-banner';

const ProducDetailScreen = ({navigation}) => {

  const onPressSeeDiscriptionButton = () => {
    navigation.navigate('DescriptionScreen');
  };

  const onPressAddReviewButton = () => {
    navigation.navigate('ReviewScreen');
  };
  const renderProducts = item => {
    return (
      <View style={style.productCardStyle}>
        <ProductCard
          image={item.shoe}
          price={item.price}
          productText={item.productname}
          productStyle={style.productCard}
        />
      </View>
    );
  };

  return (
    <View style={style.mainView}>
      <View style={style.imageSlider}>
        <ImageSlider
          data={imageUrlArray}
          caroselImageStyle={style.imageContentView}
          autoPlay={true}
        />
      </View>
      <View style={style.contentMainView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={style.productText}>{PRODUCT_TEXT}</Text>
          <View style={style.smallHeight} />
          <View style={style.flexView}>
            <RatingStarCard />
            <View style={style.minimumWidth} />
            <Text style={style.reviewText}>{SEE_REVIEW_TEXT}</Text>
          </View>
          <View style={style.extraHeight} />
          <Text style={style.priceText}>{PRICE_TEXT}</Text>
          <View style={style.extraHeight} />
          <View style={style.smallHeight} />

          <TouchableOpacity onPress={() => onPressSeeDiscriptionButton()}>
            <View style={style.buttonBorderView}>
              <View style={style.alignBittonItems}>
                <Text style={style.descriptionText}>{SEE_DESCRIPTION_TEXT}</Text>
                <Image source={ARROW_ICON} style={style.arrowIconStyle} />
              </View>
            </View>
          </TouchableOpacity>
          <View style={style.extraHeight} />
          <View style={style.smallHeight} />

          <TouchableOpacity onPress={() => onPressAddReviewButton()}>
            <View style={style.subView}>
              <View style={style.alignBittonItems}>
                <Text style={style.descriptionText}>{ADD_REVIEW_TEXT}</Text>
                <Image source={ARROW_ICON} style={style.arrowIconStyle} />
              </View>
            </View>
          </TouchableOpacity>
          <View style={style.extraHeight} />
          <View style={style.alignBittonItems}>
            <Text style={style.categoriesText}>{RELEATED_PRODUCT_TEXT}</Text>
            <TouchableOpacity>
              <Text style={style.selectAllText}>{SELECT_ALL_TEXT}</Text>
            </TouchableOpacity>
          </View>
          <View style={style.extraHeight} />
          <View>
            <FlatList
              data={shoesData}
              horizontal={true}
              renderItem={({item}) => renderProducts(item)}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>
      <View style={style.parallelLine} />
      <View style={style.fotterView}>
        <View style={style.alignBittonItems}>
          <TouchableOpacity>
            <View>
              <Text style={style.textStyle}>{ADD_TO_CART_TEXT}</Text>
            </View>
          </TouchableOpacity>
          <View style={style.parallelWidth} />
          <TouchableOpacity>
            <View style={style.textView}>
              <Text style={style.buyNowTextStyle}>{BUY_NOW_TEXT}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  contentMainView: {
    flex: 0.95,
    width: '90%',
    alignSelf: 'center',
  },
  productText: {
    fontFamily: 'Roboto',
    color: '#00000080',
    fontSize: hp(2.4),
  },
  smallHeight: {
    height: hp(0.5),
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewText: {
    fontFamily: 'Roboto',
    color: '#B620E0',
    fontSize: hp(2.2),
    fontWeight: 'bold',
  },
  extraHeight: {
    height: hp(2),
  },
  priceText: {
    color: '#FA6400',
    fontSize: hp(2.5),
    fontWeight: 'bold',
  },
  alignBittonItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionText: {
    fontSize: hp(2.5),
    color: 'black',
    marginLeft: wp(3),
  },
  categoriesText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#00000080',
    fontSize: hp(2.3),
  },
  selectAllText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#B620E0',
    fontSize: hp(2.3),
  },
  extraMarinRight: {
    marginRight: hp(2),
  },
  marginFlex: {flex: 1, marginLeft: wp(4)},
  textStyle: {
    fontSize: hp(2.2),
    fontWeight: 'bold',
    color: 'black',
  },
  buyNowTextStyle: {
    fontSize: hp(2.2),
    fontWeight: 'bold',
    margin: hp(1),
    marginHorizontal: hp(6.5),
    color: 'black',
  },
  imageSlider: {height: hp(34), padding: hp(2)},
  imageContentView: {
    resizeMode: 'cover',
    height: hp(30),
    borderRadius: hp(2),
    width: wp(92.4),
    backgroundColor: '#979797',
  },
  subView: {
    borderRadius: hp(1),
    borderWidth: hp(0.15),
    borderColor: '#DCDCDC',
  },
  textView: {
    borderWidth: 0.2,
    backgroundColor: '#FFC33A',
    borderColor: '#FFC33A',
    margin: hp(1),
    borderRadius: hp(0.5),
  },
  fotterView: {
    flex: 0.13,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  parallelLine: {
    borderBottomWidth: hp(0.04),
    backgroundColor: '#B4B4B4',
    width: '100%',
  },
  mainView: {flex: 1, backgroundColor: 'white'},
  productCardStyle: {flex: 1, marginRight: wp(4)},
  arrowIconStyle: {height: hp(4), width: wp(4), margin: hp(1.5)},
  buttonBorderView: {
    borderRadius: hp(1),
    borderWidth: hp(0.15),
    borderColor: '#DCDCDC',
  },
  parallelWidth: {width: wp(12)},
  minimumWidth: {width: wp(3)},
  productCard: {height: '80%', width: '100%'},
});
export default ProducDetailScreen;
