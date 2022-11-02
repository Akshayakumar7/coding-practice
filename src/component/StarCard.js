import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import STAR_ICON from '../../asset/images/start.png';
import {hp, wp} from '../methods/commonMethods';

const StarCard = props => {
  const {needStarIcon, valueText} = props;
  return (
    <View>
      <View style={style.CardView}>
        <View style={style.flexView}>
          {needStarIcon ? (
            <View>
              <Image source={STAR_ICON} style={[style.starImageSTyle]} />
            </View>
          ) : null}
          <Text style={style.textStyle}>{valueText}</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: hp(1),
    justifyContent: 'center',
  },
  CardView: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: hp(1),
    width: wp(17.5),
    height:hp(5.5)
  },
  starImageSTyle: {height: hp(3), width: wp(4),marginRight:wp(2)},
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: hp(2.1),
    color:'#00000080'
  },
});
export default StarCard;
