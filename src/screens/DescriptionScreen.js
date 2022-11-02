import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {hp, wp} from '../methods/commonMethods';
import BACK_HANDLET from '../../asset/images/arrow-left.png';
import { DESCRIPTION_TEXT } from '../constants/constantData';

const DescriptionScreen = () => {
  return (
    <View style={style.mainView}>
      <View style={style.flexView}>
        <Image source={BACK_HANDLET} style={style.arrowStyle} />
        <Text style={style.textStyle}>{DESCRIPTION_TEXT}</Text>
      </View>
      <View>
        <Text style={style.paragraphText}>
          The history of fashion design refers specifically to the development
          of the purpose and intention behind garments, shoes and accessories,
          and their design and construction. The modern industry, based around
          firms or fashion houses run by individual designers, started in the
          19th century with Charles Frederick Worth who, beginning in 1858, was
          the first designer to have his label sewn into the garments he created
        </Text>
        <View style={style.height} />
        <Text style={style.paragraphText}>
          Before the mid-19th century the division between haute couture and
          ready-to-wear did not really exist. All but the most basic pieces of
          female clothing were made-to-measure by dressmakers and seamstresses
          dealing directly with the client. Most often, clothing was patterned,
          sewn and tailored in the household.
        </Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowStyle: {
    margin: hp(2),
    // marginLeft: wp(4),
    marginTop: hp(2.6),
  },
  textStyle: {
    fontSize: hp(2.5),
    color: 'black',
  },
  paragraphText: {
    fontSize: hp(2.2),
    lineHeight: hp(4.5),
    color:'#00000080'
  },
  mainView: {width: '90%', alignSelf: 'center'},
  height:{
    height:hp(1)
  }
});
export default DescriptionScreen;
