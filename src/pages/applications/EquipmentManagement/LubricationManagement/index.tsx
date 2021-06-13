/**
 * @file 设备管理 > 润滑管理
 */
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface ILubricationManagementProps {
  navigation: RootStackNavigation;
}

class LubricationManagement extends React.Component<ILubricationManagementProps> {
  render() {
    return (
      <View>
        <Text>LubricationManagement</Text>
      </View>
    );
  }
}
export default LubricationManagement;
