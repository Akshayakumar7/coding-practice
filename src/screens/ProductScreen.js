import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  Modal,
} from 'react-native';
import SearchBar2 from '../component/SearchBar2';
import {hp, wp} from '../methods/commonMethods';
import FILTER_ICON from '../../asset/images/filter.png';
import GROUP_ICON from '../../asset/images/group2.png';
import {
  CHOOSE_COLOR_TEXT,
  DISCOUNT_TEXT,
  FREE_DELIVERY_TEXT,
  NEW_PRODUCT_TEXT,
  shoesData,
  SMALL_LETTER_DISCOUNT_TEXT,
  SMALL_LETTER_SPECIAL_PRODUCT_TEXT,
  SMALL_LETTER_SUBMIT_TEXT,
  SPECIAL_OFFER_TEXT,
} from '../constants/constantData';
import ProductCard from '../component/productCard';
import LIST_ICON from '../../asset/images/list.png';
import ProductDetailCard from '../component/ProductDetailCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import UNCHECKED from '../../asset/images/unchecked.png';
import CHECKED from '../../asset/images/check.png';
import GREY_ICON from '../../asset/images/grey.png';
import BLUE_ICON from '../../asset/images/blue.png';
import LIGHT_BLUE_ICON from '../../asset/images/lightblue.png';
import PURPOLE_ICON from '../../asset/images/purpole.png';
import GREEN_ICON from '../../asset/images/green.png';
import YELLOW_ICON from '../../asset/images/yellow.png';
import CROSS_ICON from '../../asset/images/close.png';

const ProductScreen = ({navigation}) => {
  const [listView, setListView] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [firstCheckBox, setFirstCheckBox] = useState(false);
  const [secondCheckBox, setSecondCheckBox] = useState(false);
  const [thirdCheckBox, setThirdCheckBox] = useState(false);

  const onPressFirstCheckBox = () => {
    setFirstCheckBox(!firstCheckBox);
  };

  const onPressSecondCheckBox = () => {
    setSecondCheckBox(!secondCheckBox);
  };

  const onPressThirdCheckBox = () => {
    setThirdCheckBox(!thirdCheckBox);
  };

  const onPressFilterIcon = () => {
    console.log("Modal state changed")
    setModalVisible(!modalVisible);
  };

  const renderProducts = item => {
    return (
      <View style={style.extraMarinRight}>
        <Pressable onPress={() => navigation.navigate('ProductDetailScreen')}>
          <ProductCard
            image={item.shoe}
            price={item.price}
            productText={item.productname}
            customMainView={style.productCardWidth}
            // productStyle={style.productStyle}
          />
        </Pressable>
      </View>
    );
  };

  const renderListView = item => {
    return (
      <Pressable onPress={() => navigation.navigate('ProductDetailScreen')}>
        <View style={style.extraMarinRight}>
          <ProductDetailCard
            image={item.shoe}
            productName={item.productname}
            priceText={item.price}
            cardStyle={style.parallelCardStyle}
            itemSeperator={itemSeperator}
            productStyle={style.productStyle}
          />
        </View>
      </Pressable>
    );
  };

  const itemSeperator = () => {
    return (
      <View>
        <View style={style.height} />
      </View>
    );
  };

  const _itemSeperator = () => {
    return (
      <View>
        <View style={style.listViewItemSeperatorHeight} />
      </View>
    );
  };

  return (
    <View style={style.mainView}>
      <View style={style.headerSTyle}>
        <SearchBar2 customStyle={style.searchBarStyle} />
      </View>
      <View style={style.parallelLine} />
      <View>
        <View style={style.height} />
        <View style={style.fleView}>
          <Text style={style.productTextStyle}>{NEW_PRODUCT_TEXT}</Text>
          <View style={style.alignIcon}>
            <View style={style.filterImageMargin}>
              <Pressable onPress={onPressFilterIcon}>
                <Image source={FILTER_ICON} style={style.filterIconStyle} />
              </Pressable>
            </View>
            <View>
              {listView ? (
                <Pressable onPress={() => setListView(!listView)}>
                  <View>
                    <Image source={GROUP_ICON} style={style.groupIconStyle} />
                  </View>
                </Pressable>
              ) : (
                <Pressable onPress={() => setListView(!listView)}>
                  <View>
                    <Image source={LIST_ICON} style={style.listViewImage} />
                  </View>
                </Pressable>
              )}
            </View>
          </View>
        </View>
        <View style={style.smallHeight} />
        {listView ? (
          <View style={style.marginBottom}>
            <FlatList
              data={shoesData}
              numColumns={2}
              renderItem={({item}) => renderProducts(item)}
              showsHorizontalScrollIndicator={false}
              style={style.flatListBottomMargin}
              ItemSeparatorComponent={itemSeperator}
              showsVerticalScrollIndicator={false}
            />
          </View>
        ) : (
          <FlatList
            data={shoesData}
            renderItem={({item}) => renderListView(item)}
            showsHorizontalScrollIndicator={false}
            style={style.flatListBottomMargin}
            ItemSeparatorComponent={_itemSeperator}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
      <View style={style.paddingMargin}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={onPressFilterIcon}>
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <View style={style.crossIconFlexView}>
                <Text style={style.categoryText}>{SPECIAL_OFFER_TEXT}</Text>
                <Pressable onPress={onPressFilterIcon}>
                  <Image source={CROSS_ICON} style={style.crossIconStyle} />
                </Pressable>
              </View>
              <View style={style.minimumHeight} />
              <View style={style.alignItems}>
                <View style={style.flexView}>
                  <View style={style.textWidth}>
                    <Text style={style.filterText}>{FREE_DELIVERY_TEXT}</Text>
                  </View>
                  <Pressable onPress={() => onPressFirstCheckBox()}>
                    <Image
                      source={firstCheckBox ? CHECKED : UNCHECKED}
                      style={style.checkBoxStyle}
                    />
                  </Pressable>
                </View>
                <View style={style.minimumHeight} />
                <View style={style.flexView}>
                  <View style={style.textWidth}>
                    <Text style={style.filterText}>
                      {SMALL_LETTER_DISCOUNT_TEXT}
                    </Text>
                  </View>
                  <Pressable onPress={() => onPressSecondCheckBox()}>
                    <Image
                      source={secondCheckBox ? CHECKED : UNCHECKED}
                      style={style.checkBoxStyle}
                    />
                  </Pressable>
                </View>
                <View style={style.minimumHeight} />
                <View style={style.flexView}>
                  <View style={style.textWidth}>
                    <Text style={style.filterText}>
                      {SMALL_LETTER_SPECIAL_PRODUCT_TEXT}
                    </Text>
                  </View>
                  <Pressable onPress={() => onPressThirdCheckBox()}>
                    <Image
                      source={thirdCheckBox ? CHECKED : UNCHECKED}
                      style={style.checkBoxStyle}
                    />
                  </Pressable>
                </View>
              </View>
              <View>
                <View style={style.minimumHeight} />
                <View style={style.minimumHeight} />
                <Text style={style.categoryText}>{CHOOSE_COLOR_TEXT}</Text>
                <View style={style.minimumHeight} />
              </View>
              <View>
                <View style={style.subFlexView}>
                  <Image
                    source={GREY_ICON}
                    style={[style.commonMarginRight, style.marginLeft]}
                  />
                  <Image source={BLUE_ICON} style={style.commonMarginRight} />
                  <Image
                    source={LIGHT_BLUE_ICON}
                    style={style.commonMarginRight}
                  />
                  <Image
                    source={PURPOLE_ICON}
                    style={style.commonMarginRight}
                  />
                  <Image source={GREEN_ICON} style={style.commonMarginRight} />
                  <Image source={YELLOW_ICON} style={style.commonMarginRight} />
                </View>
                <View style={style.minimumHeight} />
                <View style={style.minimumHeight} />
                <View style={style.minimumHeight} />
                <TouchableOpacity style={style.buttonBorder}>
                  <Text style={style.submitTextStyle}>
                    {SMALL_LETTER_SUBMIT_TEXT}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  headerSTyle: {
    backgroundColor: 'white',
    height: hp(9),
    width: '100%',
  },
  fleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    alignSelf: 'center',
  },
  filterIconStyle: {
    height: hp(3.7),
    width: wp(6.1),
  },
  groupIconStyle: {
    height: hp(3.0),
    width: wp(5.7),
  },
  alignIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  width: {
    width: wp(1),
  },
  productTextStyle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#00000080',
    fontSize: hp(2.3),
  },
  height: {
    height: hp(4),
  },
  extraMarinRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginBottom: {width: '90%', marginBottom: hp(6), alignSelf: 'center'},
  listViewImage: {
    height: hp(3.9),
    width: wp(6.7),
  },
  smallHeight: {
    height: hp(3),
  },
  marginFlex: {flex: 1, marginLeft: wp(4)},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(38),
  },
  modalView: {
    // margin: hp(20),
    backgroundColor: 'white',
    borderRadius: hp(5),
    padding: hp(5),
    // alignItems: "center",
    width: '100%',
    alignSelf: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  minimumHeight: {
    height: hp(2),
  },
  categoryText: {fontSize: hp(2.5), fontWeight: 'bold', margin: hp(1)},
  checkBoxStyle: {height: hp(3), width: wp(6)},
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    alignItems: 'center',
  },
  filterText: {
    fontSize: hp(2.3),
  },
  commonMarginRight: {
    marginRight: wp(4),
  },
  marginLeft: {
    marginLeft: wp(4),
  },
  subFlexView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonBorder: {
    backgroundColor: '#FFC33A',
    borderColor: '#FFC33A',
    borderWidth: hp(0.15),
    borderRadius: hp(1),
  },
  submitTextStyle: {
    fontSize: hp(3),
    textAlign: 'center',
    padding: hp(1.8),
  },
  textWidth: {width: '70%'},
  parallelLine: {
    borderBottomWidth: hp(0.03),
    backgroundColor: '#dee0df',
    width: '100%',
  },
  productCardWidth: {
    width: wp(40),
  },
  productStyle: {height:hp(17),width:wp(30)},
  mainView: {
    backgroundColor: 'white',
  },
  parallelCardStyle: {
    height: hp(16),
    width: wp(31),
  },
  subHeight: {
    height: hp(1.5),
  },
  searchBarStyle: {
    backgroundColor: '#ECEEF0',
  },
  flatListBottomMargin: {
    marginBottom: hp(36),
  },
  paddingMargin: {
    padding: hp(10),
  },
  filterImageMargin: {
    marginRight: wp(4),
  },
  alignItems: {
    alignItems: 'center',
  },
  productStyle: {
    height: hp(13),
    width: wp(30),
  },
  listViewItemSeperatorHeight: {
    height: hp(5.5),
  },
  crossIconStyle: {
    height: hp(2.9),
    width: wp(5.3),
  },
  crossIconFlexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default ProductScreen;
