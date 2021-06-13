/**
 * @file 设备管理 > 故障维修
 */
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IMaintenanceTaskProps {
  navigation: RootStackNavigation;
}

class MaintenanceTask extends React.Component<IMaintenanceTaskProps> {
  render() {
    return (
      <View>
        <Text>MaintenanceTask</Text>
      </View>
    );
  }
}
export default MaintenanceTask;
