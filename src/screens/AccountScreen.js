import React from 'react';
import { Button, Text, View } from 'react-native';
import navigationStrings from '../constants/navigationStrings';
import { implementNavidation } from '../methods/commonMethods';

const AccountScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Account Screen</Text>
      
    </View>
  )
}
export default AccountScreen;