import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../src/screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import ProductDetailScreen from '../../src/screens/ProductDetailScreen';
import DescriptionScreen from '../screens/DescriptionScreen';
import ReviewScreen from '../screens/ReviewScreen';
import WriteReviewScreen from '../screens/WriteReviewScreen';

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export {HomeScreenNavigator};

const ProductScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProductScreen" options={{headerShown: false}}  component={ProductScreen} />
      <Stack.Screen name="ProductDetailScreen" options={{headerShown: false}}  component={ProductDetailScreen} />
      <Stack.Screen name="DescriptionScreen" options={{headerShown: false}}  component={DescriptionScreen} />
      <Stack.Screen name="ReviewScreen" options={{headerShown: false}}  component={ReviewScreen} />
      <Stack.Screen name="WriteReviewScreen" options={{headerShown: false}}  component={WriteReviewScreen} />
    </Stack.Navigator>
  );
};

export {ProductScreenNavigator};
