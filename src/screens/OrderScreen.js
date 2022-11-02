import React from 'react';
import {Button, Text, View} from 'react-native';
import ProductDetailCard from '../component/ProductDetailCard';
import navigationStrings from '../constants/navigationStrings';
import {implementNavidation} from '../methods/commonMethods';
import SHOE from '../../asset/images/shoe1.png';

const OrderScreen = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Order Screen</Text>
    </View>
  );
};
export default OrderScreen;
