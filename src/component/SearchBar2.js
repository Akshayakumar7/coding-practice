import React from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import BACK_HANDLER from '../../asset/images/arrow-left.png';
import BROWN_SEARCH_BAR from '../../asset/images/brownsearch.png'
import {hp, wp} from '../methods/commonMethods';

const SearchBar2 = ({navigation}) => {
  return (
    <View>
      <View style={style.fleView}>
        <TouchableOpacity>
        <Image source={BACK_HANDLER} style={style.arrowStyle} />
        </TouchableOpacity>
        <View style={style.searchBorder}>
          <View style={style.alignSearchbar}>
            <TextInput />
            <Image source={BROWN_SEARCH_BAR} style={style.searchIcon}/>
          </View>
        </View>
      </View>
     
    </View>
  );
};
const style = StyleSheet.create({
  fleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowStyle: {
    margin: hp(2),
    marginLeft:wp(4)
  },
  searchBorder: {
    borderColor: '#ECEEF0',
    backgroundColor: '#ECEEF0',
    width: '77%',
    borderRadius: hp(1),
    margin: hp(1),
  },
  alignSearchbar:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  searchIcon:{
    height:hp(3),
    width:wp(5),
    marginRight:wp(4)
  },
});
export default SearchBar2;
