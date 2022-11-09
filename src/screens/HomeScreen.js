import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {hp, wp} from '../methods/commonMethods';
import ProductCard from '../component/productCard';
import {
  CATEGORIES_TEXT,
  categoryData,
  DISCOUNT_TEXT,
  NEW_PRODUCT_TEXT,
  SELECT_ALL_TEXT,
  shoesData,
} from '../constants/constantData';
import CategoryCard from '../component/CategoryCard';
import SearchBar from '../component/SearchBar';
import ImageSlider from '../component/ImageSlider';

const HomeScreen = () => {
  const renderShoes = item => {
    return (
      <View style={style.extraMarinRight}>
        <CategoryCard
          image={item.categoryItem}
          productStyle={style.categoryProductStyle}
          customCardStyle={style.cardStyle}
        />
      </View>
    );
  };

  const renderProducts = item => {
    return (
      <View style={style.extraMarinRight}>
        <ProductCard
          image={item.shoe}
          price={item.price}
          productText={item.productname}
          productStyle={style.productStyle}
        />
      </View>
    );
  };

  return (
    <View style={style.mainView}>
      <View style={style.topView}>
        <SearchBar />
        <View style={style.imageSlider}>
          <ImageSlider />
        </View>
      </View>
      <View style={style.bottomView}>
        <ScrollView>
          <View style={style.extraHeight} />
          <View style={style.flexView}>
            <Text style={style.categoriesText}>{CATEGORIES_TEXT}</Text>
            <TouchableOpacity>
              <Text style={style.selectAllText}>{SELECT_ALL_TEXT}</Text>
            </TouchableOpacity>
          </View>
          <View style={style.divideHeight} />
          <View style={style.leftMargin}>
            <FlatList
              data={categoryData}
              horizontal={true}
              renderItem={({item}) => renderShoes(item)}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={style.divideHeight} />
          <View style={style.flexView}>
            <Text style={style.categoriesText}>{NEW_PRODUCT_TEXT}</Text>
            <TouchableOpacity>
              <Text style={style.selectAllText}>{SELECT_ALL_TEXT}</Text>
            </TouchableOpacity>
          </View>
          <View style={style.divideHeight} />
          <View style={style.marginFlex}>
            <FlatList
              data={shoesData}
              horizontal={true}
              renderItem={({item}) => renderProducts(item)}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={style.divideHeight} />
          <View style={style.flexView}>
            <Text style={style.categoriesText}>{DISCOUNT_TEXT}</Text>
            <TouchableOpacity>
              <Text style={style.selectAllText}>{SELECT_ALL_TEXT}</Text>
            </TouchableOpacity>
          </View>
          <View style={style.divideHeight} />
          <View style={style.marginFlex}>
            <FlatList
              data={shoesData}
              horizontal={true}
              renderItem={({item}) => renderProducts(item)}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  topView: {
    width: '100%',
    flex: 1.25,
    backgroundColor: 'blue',
  },
  bottomView: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: hp(5),
    borderTopRightRadius: hp(5),
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: hp(2),
  },
  extraHeight: {
    height: hp(4),
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
    fontSize: hp(2.2),
  },
  divideHeight: {
    height: hp(2),
  },
  extraMarinRight: {
    marginRight: hp(2),
  },
  mainView: {
    flex: 1,
    backgroundColor: '#0063C6',
  },
  imageSlider: {
    height: hp(20),
    padding: hp(2),
    marginTop: hp(-1),
  },
  leftMargin: {
    marginLeft: wp(4),
  },
  marginFlex: {
    flex: 1,
    marginLeft: wp(4),
  },
  arrowStyle: {
    height: hp(10),
    width: wp(10),
  },
  imageContentView: {
    resizeMode: 'cover',
    height: hp(20),
    borderRadius: hp(2),
    width: wp(92.4),
  },
  productStyle: {
    height: hp(17),
    width: wp(30),
  },
  categoryProductStyle: {
    height: '65%',
    width: '85%',
  },
  cardStyle: {
    width: wp(35),
    height: hp(14),
  },
});
export default HomeScreen;
