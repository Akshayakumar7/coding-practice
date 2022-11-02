import React from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import {hp, wp} from '../methods/commonMethods';
import WHITE_SEARCH_ICON from '../../asset/images/search.png';
import WHITE_CART_ICON from '../../asset/images/cart-icon.png';
import BROWN_SEARCH_ICON from '../../asset/images/brownsearch.png';
import BLACK_CART_ICON from '../../asset/images/blackcart.png';

const SearchBar = props => {
  const {
    needBrownSearchBar = false,
    needBlackCart = false,
    customStyle,
  } = props;
  return (
    <View style={style.mainView}>
      <View style={style.flexView}>
        <View style={[style.searchBarBorder, customStyle]}>
          <View style={style.flexView}>
            <View style={{margin: hp(1), marginLeft: wp(4)}}>
              {needBrownSearchBar ? (
                <View>
                  <Image
                    source={BROWN_SEARCH_ICON}
                    style={style.searchIconStyle}
                  />
                </View>
              ) : (
                <View>
                  <Image
                    source={WHITE_SEARCH_ICON}
                    style={style.searchIconStyle}
                  />
                </View>
              )}
            </View>
            <TextInput />
          </View>
        </View>
        <View style={style.cardView}>
          {needBlackCart ? (
            <View>
              <Image source={BLACK_CART_ICON} style={style.cartIconStyle} />
            </View>
          ) : (
            <View>
              <Image source={WHITE_CART_ICON} style={style.cartIconStyle} />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarBorder: {
    borderWidth: hp(0.15),
    width: '85%',
    height: '60%',
    borderRadius: hp(1),
    borderColor: '#7297db',
    backgroundColor: '#7297db',
  },
  height: {
    height: hp(1),
  },
  searchIconStyle: {
    height: hp(3),
    width: wp(6),
  },
  extraWidth: {
    width: wp(3),
  },
  cartIconStyle: {
    height: hp(6),
    width: wp(8),
  },
  mainView: {paddingHorizontal: hp(2.2)},
  cardView:{margin: hp(1), marginTop: hp(2.5), marginLeft: wp(3)}
});
export default SearchBar;
