import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import {hp, wp} from '../methods/commonMethods';
import SHOE1 from '../../asset/images/running-shoes.png';
// import SHOE1 from '../../src/constants/imagePath';
import SHOE from '../../asset/images/shoe1.png'

const CategoryCard = props => {
  const {image, productStyle,customCardStyle} = props;
  return (
    <View style={style.mainView}>
      <View style={[style.cardStyle,customCardStyle]}>
        <Image source={image} style={[style.imageStyle, productStyle]} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
  },
  cardStyle: {
    width: wp(37),
    height: hp(15),
    backgroundColor: '#ECEEF0',
    borderRadius: hp(2.5),
    alignItems: 'center',
    justifyContent: 'center',
    // alignContent:'center'
  },
  imageStyle: {
    width: '70%',
    height: '70%',
    marginTop:hp(1.5)
  },
});
export default CategoryCard;
