import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import {hp, wp} from '../methods/commonMethods';
// import WOMEN from '../../asset/images/women.jpg';
import SHOE1 from '../../asset/images/running-shoes.png';
import CategoryCard from './CategoryCard';
import STAR_IMAGE from '../../asset/images/stars.png';
import RatingStarCard from './RatingStarCard';
import SHOE from '../../asset/images/shoe1.png';

const ProductDetailCard = props => {
  const {image, productName, priceText,cardStyle,productStyle,startImageStyle} = props;
  return (
    <View>
      <View style={style.flexView}>
        <View style={style.cardWidth}>
          <CategoryCard image={image} productStyle={productStyle} customCardStyle={cardStyle} />
        </View>
        {/* <View style={{width:wp(3)}}/> */}
    
        <View style={style.productTextWidth}>
          <Text style={style.productTextSTyle}>{productName}</Text>
          <View style={style.extraHeight} />
         
          <Text style={style.priceText}>{priceText}</Text>
          <View style={style.extraHeight} />
          <View style={style.smallDivider} />
          <RatingStarCard startImageStyle={startImageStyle}/>
          
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
  },
  imageStyle: {
    width: '70%',
    height: '70%',
  },
  flexView: {
    width:'100%',
    // height:'100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productTextSTyle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#00000080',
    fontSize: hp(2.3),
  },
  smallDivider: {
    height: hp(0.5),
  },
  priceText: {
    color: '#FA6400',
    fontSize: hp(2.3),
    fontWeight: 'bold',
    // marginLeft: wp(2),
  },
  startImageStyle: {
    width: '50%',
    height: '10%',
  },
  extraHeight:{
    height:hp(2)
  },
  cardWidth:{width:'35%'},
  productTextWidth:{height:'100%',width:'35%'}
});
export default ProductDetailCard;
