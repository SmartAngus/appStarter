/**
 * @file 设备管理 > 设备交接班
 */
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IEquipmentHandoverProps {
  navigation: RootStackNavigation;
}

class EquipmentHandover extends React.Component<IEquipmentHandoverProps> {
  render() {
    return (
      <View>
        <Text>EquipmentHandover</Text>
      </View>
    );
  }
}
export default EquipmentHandover;
