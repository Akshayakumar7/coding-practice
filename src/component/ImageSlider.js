import React from 'react';
import {
  FlatList,
  View,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import {shoesData} from '../constants/constantData';
import {hp, wp} from '../methods/commonMethods';
import LIKED_ICON from '../../asset/images/liked.png';
import SHARE_ICON from '../../asset/images/share.png';
import BACK_HANDLER from '../../asset/images/arrow-left.png';
const {width} = Dimensions.get('screen');

const ImageSlider = props => {
  const {needHeader,customStyle} = props;
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const renderProducts = item => {
    return (
      <View>
        <View>
          <Image source={item.shoe} style={style.productStyle} />
        </View>
      </View>
    );
  };

  const Indicator = ({scrollX}) => {
    return (
      <View style={style.indicatorContainer}>
        {shoesData.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [10, 10, 10],
            extrapolate: 'clamp',
          });
          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#c6c6cc', '#707070', '#c6c6cc'],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`indicator-${i}`}
              style={[style.indicator, {width: scale, backgroundColor}]}
            />
          );
        })}
      </View>
    );
  };
  return (
    <View style={[style.greyCard,customStyle]}>
      <View>
        {needHeader && (
          <View style={style.flexView}>
            <View>
              <Image source={BACK_HANDLER} style={style.iconStyle} />
            </View>
            <View style={style.aroundFlex}>
              <Image source={LIKED_ICON} style={style.likedIcon} />
              <Image source={SHARE_ICON} style={style.likedIcon} />
            </View>
          </View>
        )}
      </View>
      <Animated.FlatList
        data={shoesData}
        renderItem={({item}) => renderProducts(item)}
        horizontal={true}
        keyExtractor={(index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        pagingEnabled={true}
      />
      <View>
        <Indicator scrollX={scrollX} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  greyCard: {
    backgroundColor: '#ECEEF0',
    borderWidth: hp(0.3),
    borderColor: '#ECEEF0',
    borderRadius: hp(1.5),
    padding: hp(2),
    marginBottom: hp(-5),
  },
  iconStyle: {
    height: hp(4.5),
    width: wp(7.5),
    margin: hp(1),
  },
  likedIcon: {
    height: hp(4),
    width: wp(7),
    margin: hp(1),
  },
  productStyle: {
    height: hp(33),
    width: wp(75),
    resizeMode: 'contain',
    marginTop: hp(-6),
    marginLeft: wp(7),
    marginRight: wp(1.5),
    marginBottom: hp(-8),
  },
  aroundFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circleStyle: {
    height: hp(1.5),
    width: wp(2.8),
    borderRadius: hp(2),
    backgroundColor: '#333',
    margin: hp(0.5),
  },
  indicator: {
    height: hp(1.3),
    width: wp(3),
    borderRadius: 10,
    marginHorizontal: hp(0.7),
  },
  indicatorContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(-1),
  },
});
export default ImageSlider;
