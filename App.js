import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import {
  HomeScreenNavigator,
  ProductScreenNavigator,
} from './src/Navigation/CustomStackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import OrderScreen from './src/screens/OrderScreen';
import AccountScreen from './src/screens/AccountScreen';
import HOME_ICON from './asset/images/home.png';
import PRODUCT_ICON from './asset/images/product.png';
import ORDER_ICON from './asset/images/order.png';
import ACCOUNT_ICON from './asset/images/account.png'

import { hp, wp } from './src/methods/commonMethods';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Navigator  screenOptions={{
        headerShown: false, tabBarActiveTintColor:'#0d0d0c',tabBarInactiveTintColor:'#D8D8D8'
      }}>
        <Tab.Screen
          name="Home"
          component={HomeScreenNavigator} 
          options={{tabBarIcon:({focused})=>{
            return(
              <Image source={HOME_ICON} style={{height:hp(4),width:wp(6.3),tintColor:focused ? '#0d0d0c':'#D8D8D8'}}/>
            )
          }}}
        />
        <Tab.Screen
          name="Product"
          component={ProductScreenNavigator} 
          options={{tabBarIcon:({focused})=>{
            return(
              <Image source={PRODUCT_ICON} style={{height:hp(4),width:wp(8),tintColor:focused ? '#0d0d0c':'#D8D8D8'}}/>
            )
          }}}
        />
        <Tab.Screen
          name="Order"
          component={OrderScreen} 
          options={{tabBarIcon:({focused})=>{
            return(
              <Image source={ORDER_ICON} style={{height:hp(4),width:wp(7),tintColor:focused ? '#0d0d0c':'#D8D8D8'}}/>
            )
          }}}
        />
         <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{tabBarIcon:({focused})=>{
            return(
              <Image source={ACCOUNT_ICON} style={{height:hp(3.5),width:wp(6.5),tintColor:focused ? '#0d0d0c':'#D8D8D8'}}/>
            )
          }}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;


