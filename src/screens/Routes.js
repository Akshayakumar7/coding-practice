import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  ProductScreen,
  OrderScreen,
  AccountScreen,
} from '../screens';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name={navigationStrings.Home} component={HomeScreen} />
        <Tab.Screen
          name={navigationStrings.Product}
          component={ProductScreen}
        />
        <Tab.Screen name={navigationStrings.Order} component={OrderScreen} />
        <Tab.Screen
          name={navigationStrings.Account}
          component={AccountScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
