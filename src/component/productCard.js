import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {hp, wp} from '../methods/commonMethods';

const ProductCard = (props) => {
  const {image, productText, price,productStyle,customMainView} = props;
  return (
    <View>
      <View>
        <View style={[styles.cardStyle,customMainView]}>
          <Image source={image} style={[styles.imageStyle,productStyle]} />
        </View>
        <View style={styles.smallDivider} />
        <View>
          <Text style={styles.productText}>{productText}</Text>
          <View style={styles.smallDivider} />
          <Text style={styles.priceText}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  cardStyle: {
    borderTopLeftRadius: hp(2),
    borderTopRightRadius: hp(2),
    width: wp(40),
    height: hp(15),
    backgroundColor: '#ECEEF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: '70%',
    height: '70%',
  },
  productText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#a6a6a6',
    fontSize: hp(2.3),
    marginLeft: wp(2),
  },
  smallDivider: {
    height: hp(1),
  },
  priceText: {
    color: '#FA6400',
    fontSize: hp(2.2),
    fontWeight: 'bold',
    marginLeft: wp(2),
  },
});

export default ProductCard;
